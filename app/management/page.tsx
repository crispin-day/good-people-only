import { redirect } from 'next/navigation'

export default function Management() {
  redirect('/roster?filter=Management')
}
