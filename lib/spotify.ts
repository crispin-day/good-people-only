/**
 * Spotify API client for fetching artist images at build time.
 * Uses Client Credentials flow — no user auth needed.
 */

let cachedToken: { token: string; expiresAt: number } | null = null

async function getAccessToken(): Promise<string> {
  if (cachedToken && Date.now() < cachedToken.expiresAt) {
    return cachedToken.token
  }

  const clientId = process.env.SPOTIFY_CLIENT_ID
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET

  if (!clientId || !clientSecret) {
    throw new Error('SPOTIFY_CLIENT_ID and SPOTIFY_CLIENT_SECRET must be set')
  }

  const res = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'client_credentials',
      client_id: clientId,
      client_secret: clientSecret,
    }),
  })

  const data = await res.json()
  if (!data.access_token) throw new Error('Failed to get Spotify token')

  cachedToken = {
    token: data.access_token,
    expiresAt: Date.now() + (data.expires_in - 60) * 1000,
  }

  return cachedToken.token
}

export async function getSpotifyArtistImageUrl(artistId: string): Promise<string | null> {
  try {
    const token = await getAccessToken()
    const res = await fetch(`https://api.spotify.com/v1/artists/${artistId}`, {
      headers: { Authorization: `Bearer ${token}` },
      next: { revalidate: 86400 }, // cache for 24h
    })

    if (!res.ok) return null
    const data = await res.json()
    const images: { url: string; width: number; height: number }[] = data.images || []

    // Prefer 640px image (index 1), fallback to largest (index 0)
    return images[1]?.url ?? images[0]?.url ?? null
  } catch {
    return null
  }
}
