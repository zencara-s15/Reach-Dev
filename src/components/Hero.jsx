import React from "react";

import { ButtonPrimary } from "./Button";

const Hero = () => {
  return (
    <section
      id="home" 
      className="pt-28 lg:pt-36"
    >
      <div className="container lg:grid lg:grid-cols-2 items-center lg:gap-10">
        
        <div>
          <div className="flex items-center gap-3">
            <figure className="img-box w-9 h-9 rounded-lg">
              <img
                className="img-cover"
                src="public/Images/Eye.jpg"
                alt="Reach Port"
                width={40}
                height={40}
              />
            </figure>
            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
              {/* active icon  */}
              <span className="relative w-2 h-2 rounded-full bg-red-500 ">
                <span className="absolute inset-0 rounded-full bg-red-500 animate-ping"></span>
              </span>
              Unavaible for Work
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
            
            ButtonOutline
          </div>
        </div>

        <div className="hidden lg:block">
          <figure className="w-full max-w-[480px] ml-auto bg-gradient-to-t from-sky-400 via-25% via-sky-400/40 to-65%
            rounded-[60px] overflow-hidden">
            <img
              className="img-cover w-full"
              src="public/Images/me-nobg.png"
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
