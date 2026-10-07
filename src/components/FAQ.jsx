import React, { useState } from 'react';
import { faqData } from '../data/faqData';

const FAQ = () => {
  const [openId, setOpenId] = useState(null);

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="bg-[#0B0C0E] px-6 py-24 text-white border-t border-gray-900">
      <div className="max-w-3xl mx-auto text-center">
        <span className="bg-orange-950/60 border border-orange-800/40 text-orange-400 text-[10px] tracking-widest font-bold uppercase px-3 py-1 rounded-full">
          NEED TO KNOW
        </span>
        <h2 className="mt-6 text-4xl md:text-5xl font-extrabold tracking-tight">
          Questions, answered clearly.
        </h2>
        <p className="mt-3 text-gray-400 text-sm">
          Everything you need to understand before you begin.
        </p>

        {/* FAQ Accordion List */}
        <div className="mt-12 space-y-3 text-left">
          {faqData.map((faq) => (
            <div
              key={faq.id}
              className="bg-[#121418] border border-gray-800/80 rounded-xl overflow-hidden transition-all"
            >
              <button
                onClick={() => toggleFaq(faq.id)}
                className="w-full p-5 flex items-center justify-between text-left text-sm font-semibold text-gray-200 hover:text-white"
              >
                <span>{faq.question}</span>
                <span className="text-gray-500 text-xs ml-4">
                  {openId === faq.id ? '▲' : '▼'}
                </span>
              </button>
              {openId === faq.id && (
                <div className="px-5 pb-5 text-xs text-gray-400 leading-relaxed border-t border-gray-800/40 pt-3">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;