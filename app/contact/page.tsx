import Nav from '../components/Nav'
import Footer from '../components/Footer'
import ContactForm from './ContactForm'

export const metadata = {
  title: 'Contact | Good People Only',
  description: 'Get in touch with Good People Only.',
}

export default function ContactPage() {
  return (
    <main
      className="min-h-screen"
      style={{
        backgroundColor: 'var(--color-void)',
        animation: 'fadein 0.4s ease-in forwards',
        paddingTop: '120px',
        paddingBottom: '120px',
      }}
    >
      <Nav />

      <div className="max-w-[600px] mx-auto px-5">
        <h1
          className="font-medium uppercase mb-2"
          style={{
            color: 'var(--color-bone)',
            fontFamily: 'var(--font-heading)',
            fontSize: '12px',
            letterSpacing: '0.2em',
          }}
        >
          Get in Touch
        </h1>

        <a
          href="mailto:info@goodpeopleonly.com"
          className="hover-bone block mb-10"
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '14px',
          }}
        >
          info@goodpeopleonly.com
        </a>

        <ContactForm />
      </div>

      <Footer />
    </main>
  )
}
