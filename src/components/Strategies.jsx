import React from 'react';  
import { strategiesData } from '../data/strategiesData';

const Strategies = () => {
  return (
    <section id="strategies" className="bg-[#0B0C0E] px-6 py-24 text-white border-t border-gray-900">
      <div className="max-w-7xl mx-auto">
        <span className="bg-orange-950/60 border border-orange-800/40 text-orange-400 text-[10px] tracking-widest font-bold uppercase px-3 py-1 rounded-full">
          BUILT FOR DEFINED BEHAVIOUR
        </span>

        <div className="mt-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              Strategies with a point of view.
            </h2>
            <p className="mt-3 text-gray-400 text-sm md:text-base">
              Explore quantitative approaches with transparent risk profiles and market fit.
            </p>
          </div>
          <a href="#pricing" className="text-orange-400 hover:text-orange-300 text-xs font-semibold flex items-center gap-1">
            View access plans &rarr;
          </a>
        </div>

        {/* Dynamic Strategy Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {strategiesData.map((item, idx) => (
            <div
              key={idx}
              className={`bg-[#121418] rounded-xl p-6 flex flex-col justify-between transition-all border ${
                item.highlighted ? 'border-orange-500/60 shadow-lg shadow-orange-500/5' : 'border-gray-800/80 hover:border-gray-700'
              }`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold tracking-wider text-orange-400 uppercase">
                    {item.badge}
                  </span>
                  <span className="text-gray-500 text-sm">📈</span>
                </div>

                <h3 className="mt-4 text-xl font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-xs text-gray-400 leading-relaxed min-h-[48px]">
                  {item.description}
                </p>

                {/* Model Chart Placeholder */}
                <div className="mt-6 bg-[#0B0C0E] rounded-lg p-4 border border-gray-800/50">
                  <div className="flex items-center justify-between text-[10px] font-mono text-gray-500">
                    <span>MODEL ACTIVITY</span>
                    <span className="text-emerald-400 font-semibold">{item.status}</span>
                  </div>
                  {/* Wave Visual Simulation */}
                  <div className="h-16 mt-2 flex items-end">
                    <svg className="w-full h-12 text-orange-500" viewBox="0 0 100 30" fill="none" stroke="currentColor">
                      <path d="M0 25 Q 25 5, 50 20 T 100 10" strokeWidth="2" fill="none" />
                    </svg>
                  </div>
                </div>

                {/* Tags */}
                <div className="mt-6 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    {item.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="bg-[#1A1D24] text-gray-300 text-[10px] font-semibold px-2.5 py-1 rounded-md border border-gray-800">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="bg-[#1A1D24] text-orange-300 text-[10px] font-medium px-2.5 py-1 rounded-md border border-orange-900/30">
                    {item.riskBadge}
                  </span>
                </div>
              </div>

              <a href="#explore" className="mt-8 text-xs font-semibold text-gray-300 hover:text-white flex items-center justify-between border-t border-gray-800/80 pt-4">
                <span>Explore strategy</span>
                <span>↗</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Strategies;