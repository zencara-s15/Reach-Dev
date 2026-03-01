import React from "react";

const aboutItems = [
  {
    label: "Project Done",
    number: "100",
  },
  {
    label: "Year of Experience",
    number: "1",
  },
];

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="gradient-border glass p-7 rounded-2xl md:p-12 card-hover">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch] leading-relaxed reveal-up">
            I have been working as a web developer for the past 1 year. I have
            worked on a variety of projects, including e-commerce websites,
            blogs, and portfolios. I am always looking for new challenges and
            opportunities to grow my skills.
          </p>
          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {aboutItems.map(({ label, number }, key) => (
              <div key={key} className="reveal-up" data-reveal-delay={key * 0.15}>
                <div className="flex items-center md:-2">
                  <span className="text-2xl font-bold md:text-4xl text-zinc-50">{number}</span>
                  <span className="text-blue-400 font-bold text-2xl md:text-4xl">+</span>
                </div>
                <p className="text-zinc-500 text-sm mt-1">{label}</p>
              </div>
            ))}
            <img
              src="/Images/Eye.jpg"
              alt="Logo"
              width={40}
              height={40}
              className="ml-auto md:w-[40px] md:h-[40px] rounded-lg opacity-60"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
