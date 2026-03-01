import React from 'react';
import { socialLinks } from '../../constants/social';

const Contact = () => {
  return (
    <section id="contact" className="section relative">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container lg:grid lg:grid-cols-2 lg:items-stretch relative">

        <div className="mb-12 lg:mb-0 lg:flex lg:flex-col">
          <h2 className="headline-2 lg:max-w-[12ch] reveal-up">
            Contact me for collaboration
          </h2>

          <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] lg:max-w-[30ch] reveal-up">
            Reach out today to discuss your project needs and start collaborating on something amazing!
          </p>

          <div className="flex items-center gap-2 mt-auto">
            {socialLinks.map(({ href, icon, alt }, key) => (
              <a
                key={key}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 grid place-items-center rounded-xl transition-all duration-300 reveal-up border border-zinc-800 text-zinc-500 hover:bg-zinc-800 hover:text-white hover:border-zinc-700 hover:-translate-y-1 active:translate-y-0"
                data-reveal-delay={key * 0.1}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        <form
          action="https://getform.io/f/YOUR_FORM_ID"
          method="POST"
          className="xl:pl-10 2xl:pl-20 glass rounded-2xl p-6 border border-zinc-800/50"
        >
          <div className="md:grid md:items-center md:grid-cols-2 md:gap-2">
            <div className="mb-4">
              <label htmlFor="name" className="label reveal-up">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="name"
                required
                placeholder="Your Name"
                className="text-field reveal-up"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="label reveal-up">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                required
                placeholder="your@email.com"
                className="text-field reveal-up"
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="subject" className="label reveal-up">Subject</label>
            <input
              type="text"
              name="subject"
              id="subject"
              required
              placeholder="How can I help you?"
              className="text-field reveal-up"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="label reveal-up">Message</label>
            <textarea
              name="message"
              id="message"
              required
              placeholder="Hi there..."
              className="text-field resize-y min-h-32 max-h-80 reveal-up"
            ></textarea>
          </div>

          <button
            type="submit"
            className="btn btn-primary [&]:max-w-full w-full justify-center reveal-up"
          >
            Submit
          </button>
        </form>

      </div>
    </section>
  )
}

export default Contact;
