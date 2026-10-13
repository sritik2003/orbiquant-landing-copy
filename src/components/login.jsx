// import React, { useState } from 'react';

// export default function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleCreateAccount = (e) => {
//     e.preventDefault();
//     // Yahan account creation ki logic daal sakte hain
//     console.log("Create Account:", { email, password });
//   };

//   const handleSignIn = (e) => {
//     e.preventDefault();
//     // Yahan sign in ki logic daal sakte hain
//     console.log("Sign In:", { email, password });
//   };

//   return (
//     <section className="bg-[#05080f] text-white min-h-screen flex flex-col items-center justify-center px-4 py-16 font-sans">
      
//       {/* Top Header Section */}
//       <div className="text-center max-w-3xl mb-12">
//         <p className="text-[11px] sm:text-xs tracking-[0.25em] uppercase text-emerald-400 font-bold mb-3">
//           YOUR COMMAND CENTER
//         </p>
//         <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
//           Take control of <span className="text-emerald-400">your</span> <br />
//           <span className="text-cyan-400">workspace.</span>
//         </h1>
//         <p className="text-slate-400 text-sm sm:text-base">
//           Sign in to explore strategy eligibility and your broker-specific paper trading setup.
//         </p>
//       </div>

//       {/* Main Split Box */}
//       <div className="w-full max-w-5xl rounded-2xl overflow-hidden border border-slate-800/80 bg-[#090e18] grid grid-cols-1 lg:grid-cols-2 shadow-2xl">
        
//         {/* Left Side: Info & Stats */}
//         <div className="relative p-8 sm:p-12 flex flex-col justify-between bg-gradient-to-br from-[#0a2527] via-[#07141b] to-[#05080f] border-r border-slate-800/50">
//           <div>
//             <p className="text-[11px] tracking-[0.2em] uppercase text-emerald-400 font-bold mb-3">
//               ORBIQUANT / ACCESS
//             </p>
//             <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4 leading-snug">
//               Trade on your terms.
//             </h2>
//             <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-sm">
//               One secure space for your paper trading strategy configurations.
//             </p>
//           </div>

//           {/* Stats Footer */}
//           <div className="flex items-center gap-12 mt-12 pt-8 border-t border-slate-800/40">
//             <div>
//               <div className="text-3xl sm:text-4xl font-bold text-white tracking-tight">07</div>
//               <div className="text-[10px] tracking-[0.15em] text-slate-400 uppercase mt-1">DAY TRIAL</div>
//             </div>
//             <div>
//               <div className="text-3xl sm:text-4xl font-bold text-white tracking-tight">04</div>
//               <div className="text-[10px] tracking-[0.15em] text-slate-400 uppercase mt-1">BROKERS</div>
//             </div>
//           </div>
//         </div>

//         {/* Right Side: Form */}
//         <div className="p-8 sm:p-12 flex flex-col justify-center bg-[#090e18]">
//           <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Welcome to Orbiquant</h2>
//           <p className="text-slate-400 text-sm mb-8">Create an account or sign in to your dashboard.</p>

//           <form className="space-y-6">
//             {/* Email Field */}
//             <div>
//               <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-2">
//                 EMAIL ADDRESS
//               </label>
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="you@example.com"
//                 className="w-full bg-[#05080f] border border-slate-800 rounded-lg px-4 py-3.5 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
//               />
//             </div>

//             {/* Password Field */}
//             <div>
//               <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-2">
//                 PASSWORD
//               </label>
//               <input
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder="12+ characters"
//                 className="w-full bg-[#05080f] border border-slate-800 rounded-lg px-4 py-3.5 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
//               />
//             </div>

//             {/* Action Buttons */}
//             <div className="flex flex-wrap items-center gap-4 pt-2">
//               <button
//                 type="button"
//                 onClick={handleCreateAccount}
//                 className="bg-slate-800 hover:bg-slate-700 text-white font-medium text-sm px-6 py-3 rounded-lg border border-slate-700/60 transition-all shadow-sm cursor-pointer"
//               >
//                 Create account
//               </button>
//               <button
//                 type="button"
//                 onClick={handleSignIn}
//                 className="text-cyan-400 hover:text-cyan-300 font-medium text-sm px-6 py-3 flex items-center gap-2 transition-all cursor-pointer"
//               >
//                 Sign in &rarr;
//               </button>
//             </div>
//           </form>
//         </div>

//       </div>
//     </section>
//   );
// }



import React from 'react';

export default function CommandCenterAuth() {
  return (
    <section className="bg-[#070b12] text-white h-screen w-screen overflow-hidden flex flex-col items-center justify-center px-4 py-2 font-sans box-border">
      
      {/* Top Header Section */}
      <div className="text-center max-w-2xl mb-4">
        <p className="text-[10px] sm:text-xs tracking-[0.2em] uppercase text-emerald-400 font-semibold mb-1">
          YOUR COMMAND CENTER
        </p>
        <h1 className="text-xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-2">
          Take control of <span className="text-emerald-400">your</span> <span className="text-cyan-400">workspace.</span>
        </h1>
        <p className="text-slate-400 text-xs">
          Sign in to explore strategy eligibility and your broker-specific paper trading setup.
        </p>
      </div>

      {/* Main Split Box */}
      <div className="w-full max-w-4xl rounded-xl overflow-hidden border border-slate-800/80 bg-[#0b101b] grid grid-cols-1 lg:grid-cols-2 shadow-2xl">
        
        {/* Left Side: Info & Stats */}
        <div className="relative p-5 sm:p-6 flex flex-col justify-between bg-gradient-to-br from-[#0a2324] via-[#07131a] to-[#070b12] border-r border-slate-800/50">
          <div>
            <p className="text-[10px] tracking-[0.2em] uppercase text-emerald-400 font-semibold mb-1">
              ORBIQUANT / ACCESS
            </p>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-2 leading-snug">
              Trade on your terms.
            </h2>
            <p className="text-slate-300 text-xs leading-relaxed max-w-sm">
              One secure space for your paper trading strategy configurations.
            </p>
          </div>

          {/* Stats Footer */}
          <div className="flex items-center gap-6 mt-4 pt-4 border-t border-slate-800/40">
            <div>
              <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">07</div>
              <div className="text-[9px] tracking-[0.15em] text-slate-400 uppercase mt-0.5">DAY TRIAL</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">04</div>
              <div className="text-[9px] tracking-[0.15em] text-slate-400 uppercase mt-0.5">BROKERS</div>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="p-5 sm:p-6 flex flex-col justify-center bg-[#0b101b]">
          <h2 className="text-lg sm:text-xl font-bold text-white mb-1">Welcome to Orbiquant</h2>
          <p className="text-slate-400 text-xs mb-4">Create an account or sign in to your dashboard.</p>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
            {/* Email Field */}
            <div>
              <label className="block text-[10px] font-semibold uppercase tracking-wider text-slate-400 mb-1">
                EMAIL ADDRESS
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full bg-[#070b12] border border-slate-800 rounded-lg px-3 py-2 text-white placeholder-slate-600 text-xs focus:outline-none focus:border-cyan-500 transition-colors"
              />
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-[10px] font-semibold uppercase tracking-wider text-slate-400 mb-1">
                PASSWORD
              </label>
              <input
                type="password"
                placeholder="12+ characters"
                className="w-full bg-[#070b12] border border-slate-800 rounded-lg px-3 py-2 text-white placeholder-slate-600 text-xs focus:outline-none focus:border-cyan-500 transition-colors"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                type="button"
                className="bg-slate-800 hover:bg-slate-700 text-white font-medium text-xs px-4 py-2 rounded-lg border border-slate-700/60 transition-all shadow-sm"
              >
                Create account
              </button>
              <button
                type="submit"
                className="text-cyan-400 hover:text-cyan-300 font-medium text-xs px-3 py-2 flex items-center gap-1.5 transition-all"
              >
                Sign in &rarr;
              </button>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
}