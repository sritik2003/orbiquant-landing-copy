import React from 'react';
// Assuming you saved the generated image as hero-chart.png in src/assets/
import heroChartBg from '../assets/heroBG.png'; 

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-[85vh] flex items-center px-6 py-20 text-white relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroChartBg})` }}
    >
      {/* Dark overlay to ensure text readability against the technical chart image */}
      <div className="absolute inset-0 bg-black/70 z-0"></div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.05] max-w-4xl">
          Trade with <br />
          discipline. <br />
          Automated. <br />
          Every single time.
        </h1>
        <p className="mt-8 text-lg md:text-xl text-gray-200 max-w-xl font-normal leading-relaxed">
          No emotions, no hesitation — just your strategy, executed exactly as designed.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#signup"
            className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-6 py-3.5 rounded-lg transition-all flex items-center gap-2 shadow-lg shadow-orange-500/10"
          >
            Get Started Free &rarr;
          </a>
          <button className="bg-[#16181D]/80 border border-gray-700 hover:border-gray-600 text-gray-100 font-medium px-6 py-3.5 rounded-lg transition-all flex items-center gap-2 backdrop-blur-sm">
            <span>&#9654;</span> See How It Works
          </button>
        </div>

        <p className="mt-6 text-xs text-gray-400">
          7-day free trial &bull; No credit card required.
        </p>
      </div>

      <div className="absolute bottom-4 left-0 right-0 text-center text-[10px] text-gray-500 z-10">
        Trading involves risk. Past performance is not indicative of future results.
      </div>
    </section>
  );
};

export default Hero;
