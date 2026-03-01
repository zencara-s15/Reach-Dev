import React from 'react';
import { sitemap, footerSocials } from '../../constants/navigation';

const Footer = () => {
  return (
    <footer className="section">
      <div className="container">

        <div className="lg:grid lg:grid-cols-2">

          <div className="mb-10">
            <h2 className="headline-1 mb-8 lg:max-w-[12ch] reveal-up">
              Let&apos;s work together today!
            </h2>

            <a href="#contact" className="btn btn-primary reveal-up">
              Start Project
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4 lg:pl-20">

            <div>
              <p className="mb-2 text-zinc-300 font-medium reveal-up">Sitemap</p>
              <ul>
                {sitemap.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      className="block text-sm text-zinc-500 py-1 transition-colors duration-200 hover:text-zinc-50 hover:translate-x-1 reveal-up"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-2 text-zinc-300 font-medium reveal-up">Socials</p>
              <ul>
                {footerSocials.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-sm text-zinc-500 py-1 transition-colors duration-200 hover:text-zinc-50 reveal-up"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

        <div className="flex items-center justify-between pt-10 mt-10 mb-8 border-t border-zinc-800/80">
          <a href="/" className="logo reveal-up">
            <img
              src="/Images/Eye.jpg"
              width={40}
              height={40}
              alt="Logo"
              className="rounded-lg opacity-70 hover:opacity-100 transition-opacity"
            />
          </a>

          <p className="text-zinc-500 text-sm reveal-up">
            &copy; 2026 <span className="text-zinc-300">Zencara</span>
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer;
