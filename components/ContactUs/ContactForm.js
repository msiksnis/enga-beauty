import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("gmail", "template_031j0rg", form.current, "2QCMLfdwht-vieuwI")
      .then(
        () => {
          alert("Message successfuly sent!");
          window.location.reload(false);
        },
        () => {
          alert("Failed to send message, please try again!");
        }
      );
  };

  return (
    <form className="w-full max-w-lg" ref={form} onSubmit={sendEmail}>
      <div className="-mx-3 mb-3 flex flex-wrap">
        <div className="mb-3 w-full px-3 md:mb-0 md:w-1/2">
          <input
            className="mb-3 block w-full rounded border border-gray-100 bg-gray-100 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500  focus:bg-white focus:outline-none"
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />
        </div>
        <div className="w-full px-3 md:w-1/2">
          <input
            className="mb-3 block w-full rounded border border-gray-100 bg-gray-100 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500  focus:bg-white focus:outline-none"
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />
        </div>
      </div>
      <div className="-mx-3 mb-3 flex flex-wrap">
        <div className="w-full px-3">
          <input
            className="mb-3 block w-full appearance-none rounded border border-gray-100 bg-gray-100 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
            type="text"
            name="subject"
            placeholder="Subject"
            required
          />
        </div>
      </div>
      <div className="-mx-3 mb-3 flex flex-wrap">
        <div className="w-full px-3">
          <textarea
            className="mb-3 block h-48 w-full rounded border border-gray-100 bg-gray-100 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
            type="text"
            name="message"
            placeholder="Your Message..."
            required
          />
        </div>
      </div>
      <div className="pt-3 md:flex md:items-center">
        <button
          className="w-full rounded border border-gray-900 bg-gray-900 py-2 uppercase text-white transition-all duration-300 hover:bg-white hover:text-gray-900"
          type="submit"
        >
          Sende Melding
        </button>
      </div>
    </form>
  );
}
