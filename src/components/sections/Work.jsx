import React from 'react';
import { works } from '../../constants/works';

const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">
          My portfolio highlights
        </h2>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <div
              key={key}
              className="relative p-4 rounded-2xl bg-zinc-900/80 ring-1 ring-inset ring-zinc-800 transition-all duration-300 card-hover group reveal-up"
              data-reveal-delay={key * 0.1}
            >
              <figure className="img-box aspect-square rounded-xl mb-4 overflow-hidden">
                <img
                  src={imgSrc}
                  alt={title}
                  loading="lazy"
                  className="img-cover transition-transform duration-500 group-hover:scale-110"
                />
              </figure>

              <div className="flex items-center justify-between gap-4">
                <div>
                  <h3 className="title-1 mb-3">
                    {title}
                  </h3>

                  <div className="flex flex-wrap items-center gap-2">
                    {tags.map((label, key) => (
                      <span
                        key={key}
                        className="h-7 text-xs text-zinc-400 bg-zinc-800 grid items-center px-3 rounded-full border border-zinc-700/50"
                      >
                        {label}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="w-11 h-11 rounded-xl grid place-items-center bg-zinc-800 text-zinc-400 shrink-0 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              <a
                href={projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0"
              ></a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work;
