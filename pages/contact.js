import { useState } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        e.target,
        'YOUR_USER_ID'
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormSubmitted(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
      {formSubmitted ? (
        <p>Thank you for contacting us! We will get back to you shortly.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="border border-gray-300 p-2 rounded-md w-full mt-2"
            />
          </div>
          <div className="mt-4">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="border border-gray-300 p-2 rounded-md w-full mt-2"
            />
          </div>
          <div className="mt-4">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              required
              className="border border-gray-300 p-2 rounded-md w-full mt-2"
              rows="5"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
          >
            Send Message
          </button>
        </form>
      )}
    </div>
  );
}

export default Contact;