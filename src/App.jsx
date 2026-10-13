// import React from 'react';
// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import HowItWorks from './components/HowItWorks';
// import Strategies from './components/Strategies';
// import WhyOrbiquant from './components/WhyOrbiquant';
// import Pricing from './components/Pricing';
// import BrokerWorkflow from './components/brokersection';
// import Login from './components/login';

// // import FAQ from './components/FAQ';

// function App() {
//   return (
//     <div className="min-h-screen bg-[#0B0C0E] text-white font-sans antialiased selection:bg-orange-500 selection:text-black">
//       <Navbar />
//       <main>
//         <Hero />
//         <BrokerWorkflow />
//         <HowItWorks />
//         <Strategies />
//         <WhyOrbiquant />
//         <Pricing />
//         <Login/>
//         {/* <FAQ /> */}
//       </main>
//       <footer className="bg-[#0B0C0E] border-t border-gray-900 py-8 text-center text-xs text-gray-600">
//         © {new Date().getFullYear()} Orbiquant. All rights reserved.
//       </footer>
//     </div>
//   );
// }

// export default App;
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Strategies from './components/Strategies';
import WhyOrbiquant from './components/WhyOrbiquant';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Login from './components/Login';
import BrokerWorkflow from './components/brokersection';

function Home() {
  return (
    <div className="min-h-screen bg-[#0B0C0E] text-white font-sans antialiased selection:bg-orange-500 selection:text-black">
      <Navbar />

      <main>
        <Hero />
        <BrokerWorkflow/>
        <HowItWorks />
        <Strategies />
        <WhyOrbiquant />
        <Pricing />
        <FAQ />
      </main>

      <footer className="bg-[#0B0C0E] border-t border-gray-900 py-8 text-center text-xs text-gray-600">
        © {new Date().getFullYear()} Orbiquant. All rights reserved.
      </footer>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<Home />} />

        {/* Separate Login Page */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;