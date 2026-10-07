import React from 'react';
import { stepsData } from '../data/stepsData';

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="bg-[#0B0C0E] px-6 py-24 text-white border-t border-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight max-w-2xl">
          From your first signal to disciplined execution.
        </h2>
        <p className="mt-4 text-gray-400 max-w-xl text-sm md:text-base">
          A deliberate four-step workflow designed to get you started quickly without compromising control.
        </p>

        {/* Live Status Bar */}
        <div className="mt-12 bg-[#121418] border border-gray-800/80 rounded-xl p-4 md:p-6 flex flex-wrap items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center space-x-12">
            <div>
              <p className="text-[10px] tracking-wider text-gray-500 font-semibold uppercase">NIFTY 50</p>
              <p className="text-lg font-bold mt-1">24,618.20 <span className="text-xs bg-emerald-950/80 text-emerald-400 border border-emerald-800/50 px-2 py-0.5 rounded-md ml-2">+0.42%</span></p>
            </div>
            <div>
              <p className="text-[10px] tracking-wider text-gray-500 font-semibold uppercase">BANK NIFTY</p>
              <p className="text-lg font-bold mt-1">55,182.60 <span className="text-xs bg-emerald-950/80 text-emerald-400 border border-emerald-800/50 px-2 py-0.5 rounded-md ml-2">+0.28%</span></p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div>
              <p className="text-[10px] tracking-wider text-gray-500 font-semibold uppercase">SYSTEM STATUS</p>
              <p className="text-sm font-semibold mt-1 text-gray-200">All systems normal</p>
            </div>
            <span className="bg-emerald-950/90 text-emerald-400 border border-emerald-700/60 text-[10px] font-bold px-2.5 py-1 rounded-md uppercase">
              LIVE
            </span>
          </div>
        </div>

        {/* Dynamic Cards Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stepsData.map((step) => (
            <div key={step.stepNumber} className="bg-[#121418] border border-gray-800/60 hover:border-gray-700 rounded-xl p-6 transition-all relative flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-lg bg-orange-950/40 border border-orange-800/40 flex items-center justify-center text-orange-500">
                    ❖
                  </div>
                  <span className="text-xs font-mono text-gray-600">{step.stepNumber}</span>
                </div>
                <h3 className="mt-6 text-lg font-bold text-white">{step.title}</h3>
                <p className="mt-3 text-xs text-gray-400 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;