import React from 'react';

const brokers = [
  { id: 'Z', name: 'Zerodha', color: 'text-teal-400' },
  { id: 'A', name: 'Angel One', color: 'text-teal-400' },
  { id: 'D', name: 'Dhan', color: 'text-teal-400' },
  { id: 'M', name: 'Motilal Oswal', color: 'text-teal-400' },
];

export default function BrokerWorkflow() {
  return (
    <section className="bg-[#0b0f19] py-16 px-4 flex flex-col items-center justify-center">
      {/* Subtitle */}
      <p className="text-xs sm:text-sm tracking-[0.2em] uppercase text-cyan-400/80 font-semibold mb-8">
        Built Around Your Broker Workflow
      </p>

      {/* Broker Cards Container */}
      <div className="flex flex-wrap items-center justify-center gap-6 max-w-5xl">
        {brokers.map((broker) => (
          <div
            key={broker.id}
            className="flex items-center gap-4 bg-[#111827]/80 border border-slate-800/80 hover:border-slate-700 rounded-xl px-5 py-3.5 shadow-lg backdrop-blur-sm transition-all duration-300"
          >
            {/* Letter Badge */}
            <div className={`w-10 h-10 rounded-lg bg-[#1a2234] border border-slate-700/50 flex items-center justify-center font-bold text-lg ${broker.color}`}>
              {broker.id}
            </div>
            
            {/* Broker Name */}
            <span className="text-white font-medium text-base tracking-wide">
              {broker.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}