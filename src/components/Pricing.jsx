// import React from 'react';
// import { pricingData }from '../data/pricingData';

// const Pricing = () => {
//   return (
//     <section id="pricing" className="bg-[#0B0C0E] px-6 py-24 text-white border-t border-gray-900">
//       <div className="max-w-7xl mx-auto text-center">
//         <span className="bg-orange-950/60 border border-orange-800/40 text-orange-400 text-[10px] tracking-widest font-bold uppercase px-3 py-1 rounded-full">
//           SIMPLE BY DESIGN
//         </span>
//         <h2 className="mt-6 text-4xl md:text-5xl font-extrabold tracking-tight">
//           Straightforward access. <br /> No surprises.
//         </h2>
//         <p className="mt-4 text-gray-400 text-sm md:text-base max-w-xl mx-auto">
//           No profit sharing, no opaque pricing. Just the software you need to execute with consistency.
//         </p>

//         {/* Pricing Cards Grid */}
//         <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
//           {pricingData.map((plan, idx) => (
//             <div
//               key={idx}
//               className={`bg-[#121418] rounded-xl p-6 flex flex-col justify-between relative transition-all border ${
//                 plan.isPopular ? 'border-orange-500 shadow-xl shadow-orange-500/10' : 'border-gray-800/80 hover:border-gray-700'
//               }`}
//             >
//               {plan.isPopular && (
//                 <div className="absolute -top-3 left-6 bg-orange-500 text-black text-[9px] font-extrabold tracking-wider px-2.5 py-1 rounded-md uppercase">
//                   {plan.popularBadgeText}
//                 </div>
//               )}

//               <div>
//                 <h3 className="text-base font-bold text-white">{plan.title}</h3>
//                 <p className="mt-1 text-xs text-gray-400 min-h-[32px]">{plan.description}</p>

//                 <div className="mt-6">
//                   <span className="text-3xl font-extrabold text-white">{plan.price}</span>
//                   <span className="text-xs text-gray-500 ml-1">{plan.period}</span>
//                 </div>
//                 <p className="mt-1 text-[11px] text-gray-400 font-mono">{plan.minCapital}</p>

//                 <hr className="my-6 border-gray-800/80" />

//                 <ul className="space-y-3 text-xs text-gray-300">
//                   {plan.features.map((feat, fIdx) => (
//                     <li key={fIdx} className="flex items-center gap-2">
//                       <span className="text-orange-500 text-sm">✓</span> {feat}
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               <button
//                 className={`mt-8 w-full py-3 rounded-lg text-xs font-semibold transition-all ${
//                   plan.isPopular
//                     ? 'bg-orange-500 hover:bg-orange-600 text-black shadow-lg shadow-orange-500/20'
//                     : 'bg-[#1A1D24] hover:bg-gray-800 text-white border border-gray-700/60'
//                 }`}
//               >
//                 Buy Now
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Pricing;








// import React from 'react';
// import { pricingData } from '../data/pricingData';

// const Pricing = () => {
//   return (
//     <section id="pricing" className="bg-[#0B0C0E] px-6 py-24 text-white border-t border-gray-900">
//       <div className="max-w-7xl mx-auto text-center">
//         <span className="bg-orange-950/60 border border-orange-800/40 text-orange-400 text-[10px] tracking-widest font-bold uppercase px-3 py-1 rounded-full">
//           SIMPLE BY DESIGN
//         </span>
//         <h2 className="mt-6 text-4xl md:text-5xl font-extrabold tracking-tight">
//           Straightforward access. <br /> No surprises.
//         </h2>
//         <p className="mt-4 text-gray-400 text-sm md:text-base max-w-xl mx-auto">
//           No profit sharing, no opaque pricing. Just the software you need to execute with consistency.
//         </p>

//         {/* Pricing Cards Grid */}
//         <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
//           {pricingData.map((plan, idx) => (
//             <div
//               key={idx}
//               className={`bg-[#121418] rounded-xl p-6 flex flex-col justify-between relative transition-all border ${
//                 plan.isPopular ? 'border-orange-500 shadow-xl shadow-orange-500/10' : 'border-gray-800/80 hover:border-gray-700'
//               }`}
//             >
//               {plan.isPopular && (
//                 <div className="absolute -top-3 left-6 bg-orange-500 text-black text-[9px] font-extrabold tracking-wider px-2.5 py-1 rounded-md uppercase">
//                   {plan.popularBadgeText}
//                 </div>
//               )}

//               <div>
//                 <h3 className="text-base font-bold text-white">{plan.title}</h3>
//                 <p className="mt-1 text-xs text-gray-400 min-h-[32px]">{plan.description}</p>

//                 <div className="mt-6">
//                   <span className="text-3xl font-extrabold text-white">{plan.price}</span>
//                   <span className="text-xs text-gray-500 ml-1">{plan.period}</span>
//                 </div>
//                 <p className="mt-1 text-[11px] text-gray-400 font-mono">{plan.minCapital}</p>

//                 <hr className="my-6 border-gray-800/80" />

//                 <ul className="space-y-3 text-xs text-gray-300">
//                   {plan.features.map((feat, fIdx) => (
//                     <li key={fIdx} className="flex items-center gap-2">
//                       <span className="text-orange-500 text-sm">✓</span> {feat}
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               <button
//                 className={`mt-8 w-full py-3 rounded-lg text-xs font-semibold transition-all ${
//                   plan.isPopular
//                     ? 'bg-orange-500 hover:bg-orange-600 text-black shadow-lg shadow-orange-500/20'
//                     : 'bg-[#1A1D24] hover:bg-gray-800 text-white border border-gray-700/60'
//                 }`}
//               >
//                 Buy Now
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Pricing;


import React, { useState } from 'react';
import { pricingData } from '../data/pricingData';

const Pricing = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cardsToShow = 3;
  const totalCards = pricingData.length;

  // Next Slide: 1 card aage shift hoga (Circular logic ke sath)
  const handleNext = () => {
    setCurrentIndex((prev) => (prev - 1 + totalCards) % totalCards);
  };

  // Prev Slide: 1 card peeche shift hoga
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev + 1) % totalCards);
  };

  // Safe slicing logic taaki array ke bahar na jaye aur hamesha 3 hi card milein
  const getVisibleCards = () => {
    let visible = [];
    for (let i = 0; i < cardsToShow; i++) {
      const index = (currentIndex + i) % totalCards;
      visible.push(pricingData[index]);
    }
    return visible;
  };

  const visibleCards = getVisibleCards();

  return (
    <section id="pricing" className="bg-[#0B0C0E] px-6 py-24 text-white border-t border-gray-900 relative">
      <div className="max-w-7xl mx-auto text-center">
        <span className="bg-orange-950/60 border border-orange-800/40 text-orange-400 text-[10px] tracking-widest font-bold uppercase px-3 py-1 rounded-full">
          SIMPLE BY DESIGN
        </span>
        <h2 className="mt-6 text-4xl md:text-5xl font-extrabold tracking-tight">
          Straightforward access. <br /> No surprises.
        </h2>
        <p className="mt-4 text-gray-400 text-sm md:text-base max-w-xl mx-auto">
          No profit sharing, no opaque pricing. Just the software you need to execute with consistency.
        </p>

        {/* Carousel Container */}
        <div className="relative mt-16 px-4 md:px-12 max-w-6xl mx-auto">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 z-20 bg-[#1A1D24] hover:bg-orange-500 hover:text-black text-white w-10 h-10 flex items-center justify-center rounded-full border border-gray-700/60 transition-all shadow-lg cursor-pointer"
            aria-label="Previous Slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6"/>
            </svg>
          </button>

          {/* Pricing Cards Grid - Hamesha exact 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {visibleCards.map((plan, idx) => (
              <div
                key={`${plan.title}-${idx}`}
                className={`bg-[#121418] rounded-xl p-6 flex flex-col justify-between relative transition-all border ${
                  plan.isPopular ? 'border-orange-500 shadow-xl shadow-orange-500/10' : 'border-gray-800/80 hover:border-gray-700'
                }`}
              >
                {plan.isPopular && (
                  <div className="absolute -top-3 left-6 bg-orange-500 text-black text-[9px] font-extrabold tracking-wider px-2.5 py-1 rounded-md uppercase">
                    {plan.popularBadgeText}
                  </div>
                )}

                <div>
                  <h3 className="text-base font-bold text-white">{plan.title}</h3>
                  <p className="mt-1 text-xs text-gray-400 min-h-[32px]">{plan.description}</p>

                  <div className="mt-6">
                    <span className="text-3xl font-extrabold text-white">{plan.price}</span>
                    <span className="text-xs text-gray-500 ml-1">{plan.period}</span>
                  </div>
                  <p className="mt-1 text-[11px] text-gray-400 font-mono">{plan.minCapital}</p>

                  <hr className="my-6 border-gray-800/80" />

                  <ul className="space-y-3 text-xs text-gray-300">
                    {plan.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2">
                        <span className="text-orange-500 text-sm">✓</span> {feat}
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  className={`mt-8 w-full py-3 rounded-lg text-xs font-semibold transition-all ${
                    plan.isPopular
                      ? 'bg-orange-500 hover:bg-orange-600 text-black shadow-lg shadow-orange-500/20'
                      : 'bg-[#1A1D24] hover:bg-gray-800 text-white border border-gray-700/60'
                  }`}
                >
                  Buy Now
                </button>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 z-20 bg-[#1A1D24] hover:bg-orange-500 hover:text-black text-white w-10 h-10 flex items-center justify-center rounded-full border border-gray-700/60 transition-all shadow-lg cursor-pointer"
            aria-label="Next Slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;