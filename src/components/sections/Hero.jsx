import React from "react";
import { ButtonPrimary, ButtonOutline } from "../ui/Button";

const Hero = () => {
  return (
    <section
      id="home"
      className="pt-28 lg:pt-36 relative overflow-hidden"
    >
      {/* Background gradient orbs */}
      <div className="absolute top-0 -left-40 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 -right-40 w-[400px] h-[400px] bg-violet-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container lg:grid lg:grid-cols-2 items-center lg:gap-10 relative">

        <div>
          <div className="flex items-center gap-3">
            <figure className="img-box w-9 h-9 rounded-lg">
              <img
                className="img-cover"
                src="/Images/Eye.jpg"
                alt="Reach Port"
                width={40}
                height={40}
              />
            </figure>
            <div className="flex items-center gap-1.5 text-emerald-400 text-sm tracking-wide">
              <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
              </span>
              Available for Work
            </div>
          </div>
          <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
            Building Scalable Modern Website for the Future
          </h2>
          <div className="flex items-center gap-3">
            <ButtonPrimary
              label="Download CV"
              icon="download"
            />

            <ButtonOutline
              href="#about"
              label="Scroll Down"
              icon="arrow_downward"
            />
          </div>
        </div>

        <div className="hidden lg:block">
          <figure className="w-full max-w-[480px] ml-auto rounded-[60px] overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent z-10 opacity-60" />
            <img
              className="img-cover w-full transition-transform duration-700 group-hover:scale-105"
              src="/Images/rereach.jpg"
              alt="Reach Port"
              width={566}
              height={800}
            />
          </figure>
        </div>

      </div>
    </section>
  );
};

export default Hero;
