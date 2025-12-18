import './Contact.css'

export default function Contact() {
  return (
    <section className="contact">
      <h2>Contact Us</h2>
      <form>
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email" />
        <input type="tel" placeholder="Phone" />
        <button>Submit</button>
      </form>
    </section>
  )
}
