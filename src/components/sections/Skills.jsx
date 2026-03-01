import React from 'react';
import { skillItems } from '../../constants/skills';

const Skills = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="headline-2 reveal-up">
          Essential Tools I use
        </h2>

        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
          Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications
        </p>

        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {skillItems.map(({ imgSrc, label, desc }, key) => (
            <div
              key={key}
              className="flex items-center gap-3 rounded-2xl p-3 border border-zinc-800/80 bg-zinc-900/50 hover:bg-zinc-800/50 hover:border-zinc-700 transition-all duration-300 group card-hover reveal-up"
              data-reveal-delay={key * 0.08}
            >
              <figure className="bg-zinc-800/80 rounded-xl overflow-hidden w-14 h-14 p-2 shrink-0 group-hover:bg-zinc-700/80 transition-all duration-300 group-hover:scale-110 flex items-center justify-center">
                <img
                  src={imgSrc}
                  alt={label}
                  className="w-full h-full object-contain"
                />
              </figure>

              <div>
                <h3 className="font-medium text-zinc-200 group-hover:text-white transition-colors">{label}</h3>
                <p className="text-zinc-500 text-sm">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills;
