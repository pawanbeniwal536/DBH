// import React, { useState, useEffect } from 'react';
// import { Music } from 'lucide-react';
// import Icon from '../../Icons/whatsapp-logo.png'
// // import { Link } from './Navbar.styles';
// import { WhatsAppLogo } from '../whatsappLOGO/wp';
// import { Link as ScrollLink } from 'react-scroll'; // Import react-scroll's Link

// export function Navbar() {
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 0);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <nav style={{marginTop:"-15px"}} className={`fixed  w-full z-50 transition-all duration-300 ${
//       isScrolled ?  'bg-navy-950/80 backdrop-blur-lg' : 'bg-transparent'
//     }`}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-2">
//         <div className="flex items-center justify-between h-20">
//           <div className="flex items-center space-x-2">
//             {/* <Music className="w-8 h-8 text-purple-500" /> */}
//             <img src='/logoNav.png' className="w-15 h-20 text-purple-500"/>
//             <span className="text-white text-xl font-bold pl-4">Decoding <br /> Bollywood Hits</span>
//           </div>

//           <div className="hidden md:flex items-center space-x-8">
//           <ScrollLink to="home" smooth={true} duration={500} className="text-white cursor-pointer">
//               Home
//             </ScrollLink>
//             <ScrollLink to="courses" smooth={true} duration={500} className="text-white cursor-pointer">
//               Courses
//             </ScrollLink>
//             <ScrollLink to="about" smooth={true} duration={500} className="text-white cursor-pointer">
//               About
//             </ScrollLink>
//             <ScrollLink to="blog" smooth={true} duration={500} className="text-white cursor-pointer">
//               Blog
//             </ScrollLink>

//           </div>
//           <div className='flex'>
//                      {/* <img src={Icon} className='w-10 rounded-md ' alt="whatsapp-icon" /> */}
//             <p  
//             style={{}}
//             className="mt-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-3 rounded-full text-lg font-m1`edium hover:opacity-90 transition-opacity">Login</p>
//           </div>

//                      </div>
//       </div>
//     </nav>
//   );
// }





// import React, { useState, useEffect } from 'react';
// import { Link as ScrollLink } from 'react-scroll'; // Import react-scroll's Link

// export function Navbar() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMenuOpen, setMenuOpen] = useState(false); // State to handle menu toggle

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 0);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <nav
//       style={{ marginTop: '-15px' }}
//       className={`fixed w-full z-50 transition-all duration-300 ${
//         isScrolled ? 'bg-navy-950/80 backdrop-blur-lg' : 'bg-transparent'
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-2">
//         <div className="flex items-center justify-between h-20">
//           {/* Logo */}
//           <div className="flex items-center space-x-2">
//             <img src="/logoNav.png" className="w-15 h-20" alt="Logo" />
//             <span className="text-white text-xl font-bold pl-4">
//               Decoding <br /> Bollywood Hits
//             </span>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-8">
//             <ScrollLink to="home" smooth={true} duration={500} className="text-white cursor-pointer">
//               Home
//             </ScrollLink>
//             <ScrollLink to="courses" smooth={true} duration={500} className="text-white cursor-pointer">
//               Courses
//             </ScrollLink>
//             <ScrollLink to="about" smooth={true} duration={500} className="text-white cursor-pointer">
//               About
//             </ScrollLink>
//             <ScrollLink to="blog" smooth={true} duration={500} className="text-white cursor-pointer">
//               Blog
//             </ScrollLink>
//           </div>

//           {/* Desktop Login Button */}
//           <div className="hidden md:block">
//             <p
//               className="mt-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-3 rounded-full text-lg font-medium hover:opacity-90 transition-opacity"
//             >
//               Login
//             </p>
//           </div>

//           {/* Hamburger Menu */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setMenuOpen(!isMenuOpen)}
//               className="text-white focus:outline-none"
//             >
//               {isMenuOpen ? (
//                 <span className="text-2xl">&times;</span> // Close Icon
//               ) : (
//                 <span className="text-2xl">&#9776;</span> // Hamburger Icon
//               )}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {isMenuOpen && (
//           <div className="md:hidden bg-navy-950/95 backdrop-blur-lg fixed inset-0 z-50 flex flex-col items-center justify-center space-y-6 text-center">
//             <ScrollLink
//               to="home"
//               smooth={true}
//               duration={500}
//               className="text-white text-xl cursor-pointer"
//               onClick={() => setMenuOpen(false)}
//             >
//               Home
//             </ScrollLink>
//             <ScrollLink
//               to="courses"
//               smooth={true}
//               duration={500}
//               className="text-white text-xl cursor-pointer"
//               onClick={() => setMenuOpen(false)}
//             >
//               Courses
//             </ScrollLink>
//             <ScrollLink
//               to="about"
//               smooth={true}
//               duration={500}
//               className="text-white text-xl cursor-pointer"
//               onClick={() => setMenuOpen(false)}
//             >
//               About
//             </ScrollLink>
//             <ScrollLink
//               to="blog"
//               smooth={true}
//               duration={500}
//               className="text-white text-xl cursor-pointer"
//               onClick={() => setMenuOpen(false)}
//             >
//               Blog
//             </ScrollLink>
//             <button
//               onClick={() => setMenuOpen(false)}
//               className="mt-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-3 rounded-full text-lg font-medium hover:opacity-90 transition-opacity"
//             >
//               Login
//             </button>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// }

import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  // Add scroll effect to change background on scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-navy-950/80 backdrop-blur-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2 ">
            <img src="/logoNav.png" className="w-14 h-16" alt="Logo" />
            <span className="text-white text-xl font-bold">
              Decoding <br /> Bollywood Hits
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              className="text-white cursor-pointer hover:text-purple-400"
            >
              Home
            </ScrollLink>
            <ScrollLink
              to="courses"
              smooth={true}
              duration={500}
              className="text-white cursor-pointer hover:text-purple-400"
            >
              Courses
            </ScrollLink>
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              className="text-white cursor-pointer hover:text-purple-400"
            >
              About
            </ScrollLink>
            <ScrollLink
              to="blog"
              smooth={true}
              duration={500}
              className="text-white cursor-pointer hover:text-purple-400"
            >
              Blog
            </ScrollLink>
          </div>

          {/* Desktop Login Button */}
          <div className="hidden md:block">
            <button className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-3 rounded-full text-lg font-medium hover:opacity-90 transition-opacity">
              Login
            </button>
          </div>

          {/* Hamburger Menu */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!isMenuOpen)}
              className="text-white text-3xl focus:outline-none"
            >
              {isMenuOpen ? "" : "\u2630"} {/* Close (×) or Hamburger (☰) */}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      
      <div
        className={`absolute top-0 left-0 w-full h-screen bg-navy-950/95 backdrop-blur-lg z-40 transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
          <div className="flex items-center space-x-2 mt-3 ml-2">
            <img src="/logoNav.png" className="w-14 h-16" alt="Logo" />
            <span className="text-white text-xl font-bold">
              Decoding <br /> Bollywood Hits
            </span>
          </div>

        <div className="flex flex-col items-center justify-center h-full space-y-6">
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            className="text-white text-2xl cursor-pointer"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </ScrollLink>
          <ScrollLink
            to="courses"
            smooth={true}
            duration={500}
            className="text-white text-2xl cursor-pointer"
            onClick={() => setMenuOpen(false)}
          >
            Courses
          </ScrollLink>
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            className="text-white text-2xl cursor-pointer"
            onClick={() => setMenuOpen(false)}
          >
            About
          </ScrollLink>
          <ScrollLink
            to="blog"
            smooth={true}
            duration={500}
            className="text-white text-2xl cursor-pointer"
            onClick={() => setMenuOpen(false)}
          >
            Blog
          </ScrollLink>
          <button
            onClick={() => setMenuOpen(false)}
            className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-3 rounded-full text-lg font-medium hover:opacity-90 transition-opacity"
          >
            Login
          </button>
          <div className="md:hidden "style={{position:"absolute",top:"0",right:"28px"}}>
            <button
              onClick={() => setMenuOpen(!isMenuOpen)}
              className="text-white text-3xl focus:outline-none"
            >
              {isMenuOpen ? "\u2715" : ""} {/* Close (×) or Hamburger (☰) */}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

