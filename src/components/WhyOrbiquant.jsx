import React from 'react';
import { featuresData } from '../data/featuresData';

const WhyOrbiquant = () => {
  const topFeature = featuresData.find(f => f.fullWidth);
  const gridFeatures = featuresData.filter(f => !f.fullWidth);

  return (
    <section id="why-orbiquant" className="bg-[#0B0C0E] px-6 py-24 text-white border-t border-gray-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column Text */}
        <div className="lg:col-span-5">
          <span className="bg-orange-950/60 border border-orange-800/40 text-orange-400 text-[10px] tracking-widest font-bold uppercase px-3 py-1 rounded-full">
            INFRASTRUCTURE YOU CAN TRUST
          </span>
          <h2 className="mt-6 text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            Professional-grade, without the complexity.
          </h2>
          <p className="mt-4 text-gray-400 text-sm md:text-base leading-relaxed">
            Built for traders who want the discipline of a system and the freedom to remain in control.
          </p>

          <ul className="mt-8 space-y-3 text-sm text-gray-300 font-medium">
            <li className="flex items-center gap-2">
              <span className="text-orange-500">✔</span> No pooled funds or custody
            </li>
            <li className="flex items-center gap-2">
              <span className="text-orange-500">✔</span> Clear controls at every step
            </li>
            <li className="flex items-center gap-2">
              <span className="text-orange-500">✔</span> Built for the Indian markets
            </li>
          </ul>
        </div>

        {/* Right Column Cards */}
        <div className="lg:col-span-7 space-y-4">
          {topFeature && (
            <div className="bg-[#121418] border border-gray-800/80 rounded-xl p-6 flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-orange-950/40 border border-orange-800/40 flex items-center justify-center text-orange-500 shrink-0">
                ⚡
              </div>
              <div>
                <h3 className="text-base font-bold text-white">{topFeature.title}</h3>
                <p className="mt-1 text-xs text-gray-400">{topFeature.description}</p>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {gridFeatures.map((item, idx) => (
              <div key={idx} className="bg-[#121418] border border-gray-800/80 rounded-xl p-6 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-orange-950/40 border border-orange-800/40 flex items-center justify-center text-orange-500 mb-4">
                    🛡
                  </div>
                  <h3 className="text-base font-bold text-white">{item.title}</h3>
                  <p className="mt-2 text-xs text-gray-400 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyOrbiquant;