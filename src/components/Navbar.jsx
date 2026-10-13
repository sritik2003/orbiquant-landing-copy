// import React, { useState, useEffect } from 'react';

// const Navbar = () => {
//   const [activeSection, setActiveSection] = useState('home');

//   const navLinks = [
//     { name: 'Home', href: '#home', id: 'home' },
//     { name: 'How It Works', href: '#how-it-works', id: 'how-it-works' },
//     { name: 'Strategies', href: '#strategies', id: 'strategies' },
//     { name: 'Why Orbiquant', href: '#why-orbiquant', id: 'why-orbiquant' },
//     { name: 'Pricing', href: '#pricing', id: 'pricing' },
//     { name: 'FAQ', href: '#faq', id: 'faq' },
//   ];

//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = navLinks.map((link) => document.getElementById(link.id));
//       const scrollPosition = window.scrollY + 200; // Offset for fixed navbar header

//       sections.forEach((section) => {
//         if (section) {
//           const top = section.offsetTop;
//           const height = section.offsetHeight;
//           if (scrollPosition >= top && scrollPosition < top + height) {
//             setActiveSection(section.id);
//           }
//         }
//       });
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <header className="sticky top-0 z-50 bg-[#0B0C0E]/90 backdrop-blur-md border-b border-gray-800/50 px-6 py-4">
//       <div className="max-w-7xl mx-auto flex items-center justify-between">
//         {/* Logo */}
//         <div className="flex items-center space-x-2">
//           <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center font-bold text-xs text-black">
//             O
//           </div>
//           <span className="font-bold text-xl text-white tracking-wide">orbiquant</span>
//         </div>

//         {/* Dynamic Navigation Links */}
//         <nav className="hidden md:flex items-center space-x-8 text-sm">
//           {navLinks.map((link) => {
//             const isActive = activeSection === link.id;
//             return (
//               <a
//                 key={link.id}
//                 href={link.href}
//                 onClick={() => setActiveSection(link.id)}
//                 className={`transition-colors py-1 ${
//                   isActive
//                     ? 'text-white font-medium underline underline-offset-8 decoration-orange-500'
//                     : 'text-gray-300 hover:text-white'
//                 }`}
//               >
//                 {link.name}
//               </a>
//             );
//           })}
//         </nav>

//         {/* CTA Buttons */}
//         <div className="flex items-center space-x-4 text-sm">
//           <a href="#login" className="text-gray-300 hover:text-white font-medium hidden sm:inline-block">
//             Login
//           </a>
//           <a
//             href="#signup"
//             className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-4 py-2 rounded-lg transition-all shadow-lg shadow-orange-500/20 flex items-center gap-1"
//           >
//             Start Free Trial &rarr;
//           </a>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;




import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'How It Works', href: '#how-it-works', id: 'how-it-works' },
    { name: 'Strategies', href: '#strategies', id: 'strategies' },
    { name: 'Why Orbiquant', href: '#why-orbiquant', id: 'why-orbiquant' },
    { name: 'Pricing', href: '#pricing', id: 'pricing' },
    { name: 'FAQ', href: '#faq', id: 'faq' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 200; // Offset for fixed navbar header

      sections.forEach((section) => {
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-[#0B0C0E]/90 backdrop-blur-md border-b border-gray-800/50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center font-bold text-xs text-black">
            O
          </div>
          <span className="font-bold text-xl text-white tracking-wide">orbiquant</span>
        </div>

        {/* Dynamic Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8 text-sm">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setActiveSection(link.id)}
                className={`transition-colors py-1 ${
                  isActive
                    ? 'text-white font-medium underline underline-offset-8 decoration-orange-500'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* CTA Buttons */}
        <div className="flex items-center space-x-4 text-sm">
          <Link
  to="/login"
  className="text-gray-300 hover:text-white font-medium hidden sm:inline-block"
>
  Login
</Link>
          <a
            href="#signup"
            className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-4 py-2 rounded-lg transition-all shadow-lg shadow-orange-500/20 flex items-center gap-1"
          >
            Start Free Trial &rarr;
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;