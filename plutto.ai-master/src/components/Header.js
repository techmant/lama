// "use client";
// import { useEffect, useLayoutEffect, useRef, useState } from "react";
// import { motion } from "framer-motion";
// import { gsap } from "gsap";

// const Header = () => {
//   const [dark, setDark] = useState(false);

//   const logoRef = useRef(null);
//   const homeRef = useRef(null);
//   const contactRef = useRef(null);

//   // 🟢 Word splitting helper
//   const splitText = (el) => {
//     if (!el) return;
//     const words = el.innerText.split(" ");
//     el.innerHTML = words
//       .map(
//         (word) =>
//           `<span class="word-wrapper overflow-hidden inline-block mr-1">
//              <span class="word inline-block translate-y-full">${word}</span>
//            </span>`
//       )
//       .join(" ");
//   };

//   // GSAP Word Reveal Animation
//   useEffect(() => {
//     [logoRef.current, homeRef.current, contactRef.current].forEach(splitText);

//     const tl = gsap.timeline({ delay: 0.2, defaults: { ease: "power3.out" } });
//     tl.to(".word", {
//       y: 0,
//       duration: 0.8,
//       stagger: 0.08,
//     });
//   }, []);

//   // Background color detection
//   const checkBackground = () => {
//     const headerHeight = 58;
//     const el = document.elementFromPoint(window.innerWidth / 2, headerHeight + 1);

//     if (!el) return;
//     const bg = window.getComputedStyle(el).backgroundColor;
//     const match = bg.match(/\d+/g);
//     if (!match) return;

//     const [r, g, b] = match.map(Number);
//     const brightness = (r * 299 + g * 587 + b * 114) / 1000;
//     setDark(brightness < 128);
//   };

// //   useLayoutEffect(() => {
// //   // Run once after mount (after paint)
// //   requestAnimationFrame(() => {
// //     checkBackground();
// //   });

// //   window.addEventListener("scroll", checkBackground);
// //   window.addEventListener("resize", checkBackground);

// //   return () => {
// //     window.removeEventListener("scroll", checkBackground);
// //     window.removeEventListener("resize", checkBackground);
// //   };
// // }, []);

// // Background color detection
// useLayoutEffect(() => {
//   // run checkBackground after slight delay so initial is black
//   const timer = setTimeout(() => {
//     checkBackground();
//   }, 300);

//   window.addEventListener("scroll", checkBackground);
//   window.addEventListener("resize", checkBackground);

//   return () => {
//     clearTimeout(timer);
//     window.removeEventListener("scroll", checkBackground);
//     window.removeEventListener("resize", checkBackground);
//   };
// }, []);



//   return (
//     <motion.header
//       className="fixed top-0 left-0 right-0 flex justify-between items-center px-[38px] h-[58px] z-50 border-none shadow-none bg-transparent"
//     >
//       <div className="flex items-center gap-[40px]">
//         <div
//           ref={logoRef}
//           className={`font-medium text-lg transition-colors duration-300 ${
//             dark ? "text-white" : "text-black"
//           }`}
//         >
//           PROTO.AI
//         </div>
//         <div
//           ref={homeRef}
//           className={`text-base transition-colors duration-300 ${
//             dark ? "text-white" : "text-black"
//           }`}
//         >
//           Home~
//         </div>
//       </div>

//       <div className="flex items-center justify-center h-[32px] w-[32px]">
//         <svg
//           width="28"
//           height="20"
//           viewBox="0 0 28 20"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <line
//             x1="3"
//             y1="5"
//             x2="14"
//             y2="5"
//             strokeWidth="2"
//             strokeLinecap="round"
//             stroke={dark ? "white" : "black"}
//           />
//           <line
//             x1="3"
//             y1="10"
//             x2="25"
//             y2="10"
//             strokeWidth="2"
//             strokeLinecap="round"
//             stroke={dark ? "white" : "black"}
//           />
//           <line
//             x1="14"
//             y1="15"
//             x2="25"
//             y2="15"
//             strokeWidth="2"
//             strokeLinecap="round"
//             stroke={dark ? "white" : "black"}
//           />
//         </svg>
//       </div>

//       <div
//         ref={contactRef}
//         className={`text-base relative cursor-pointer transition-colors duration-300 ${
//           dark ? "text-white" : "text-black"
//         }`}
//       >
//         Contact us &nbsp;&gt;
//         {/* proper underline */}
//         <span
//           className={`absolute left-0 -bottom-1 h-[1.5px] w-full ${
//             dark ? "bg-white" : "bg-black"
//           }`}
//         ></span>
//       </div>
//     </motion.header>
//   );
// };

// export default Header;
"use client";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";

const Header = () => {
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const logoRef = useRef(null);
  const homeRef = useRef(null);
  const contactRef = useRef(null);

  // 🟢 Word splitting helper
  const splitText = (el) => {
    if (!el) return;
    const words = el.innerText.split(" ");
    el.innerHTML = words
      .map(
        (word) =>
          `<span class="word-wrapper overflow-hidden inline-block mr-1">
             <span class="word inline-block translate-y-full">${word}</span>
           </span>`
      )
      .join(" ");
  };

  // GSAP Word Reveal Animation
  useEffect(() => {
    [logoRef.current, homeRef.current, contactRef.current].forEach(splitText);

    const tl = gsap.timeline({ delay: 0.2, defaults: { ease: "power3.out" } });
    tl.to(".word", {
      y: 0,
      duration: 0.8,
      stagger: 0.08,
    });
  }, []);

  // Background color detection
  const checkBackground = () => {
    const headerHeight = 58;
    const el = document.elementFromPoint(
      window.innerWidth / 2,
      headerHeight + 1
    );

    if (!el) return;
    const bg = window.getComputedStyle(el).backgroundColor;
    const match = bg.match(/\d+/g);
    if (!match) return;

    const [r, g, b] = match.map(Number);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    setDark(brightness < 128);
  };

  useLayoutEffect(() => {
    const timer = setTimeout(() => {
      checkBackground();
    }, 300);

    window.addEventListener("scroll", checkBackground);
    window.addEventListener("resize", checkBackground);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", checkBackground);
      window.removeEventListener("resize", checkBackground);
    };
  }, []);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 flex justify-between items-center px-[38px] h-[58px] z-50 border-none shadow-none bg-transparent"
    >
      {/* Left Side */}
      <div className="flex items-center gap-[40px]">
        <div
          ref={logoRef}
          className={`font-medium text-lg transition-colors duration-300 ${
            dark ? "text-white" : "text-black"
          }`}
        >
          LAMA.AI
        </div>
        {/* Desktop Home Link */}
        <div
          ref={homeRef}
          className={`hidden md:block text-base transition-colors duration-300 ${
            dark ? "text-white" : "text-black"
          }`}
        >
          Home~
        </div>
      </div>

      {/* Hamburger Menu (your original SVG) */}
      <div
        className="flex items-center justify-center h-[32px] w-[32px] cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <svg
          width="28"
          height="20"
          viewBox="0 0 28 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="3"
            y1="5"
            x2="14"
            y2="5"
            strokeWidth="2"
            strokeLinecap="round"
            stroke={dark ? "white" : "black"}
          />
          <line
            x1="3"
            y1="10"
            x2="25"
            y2="10"
            strokeWidth="2"
            strokeLinecap="round"
            stroke={dark ? "white" : "black"}
          />
          <line
            x1="14"
            y1="15"
            x2="25"
            y2="15"
            strokeWidth="2"
            strokeLinecap="round"
            stroke={dark ? "white" : "black"}
          />
        </svg>
      </div>

      {/* Desktop Contact */}
      <div
        ref={contactRef}
        className={`hidden md:block text-base relative cursor-pointer transition-colors duration-300 ${
          dark ? "text-white" : "text-black"
        }`}
      >
        Contact us &nbsp;&gt;
        <span
          className={`absolute left-0 -bottom-1 h-[1.5px] w-full ${
            dark ? "bg-white" : "bg-black"
          }`}
        ></span>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div
          className={`absolute top-[58px] left-0 w-full flex flex-col items-start px-6 py-4 space-y-4 md:hidden ${
            dark ? "bg-black text-white" : "bg-white text-black"
          }`}
        >
          <div
            className="text-base cursor-pointer"
            onClick={() => setMenuOpen(false)}
          >
            Home~
          </div>
          <div
            className="text-base cursor-pointer relative"
            onClick={() => setMenuOpen(false)}
          >
            Contact us &nbsp;&gt;
            <span
              className={`absolute left-0 -bottom-1 h-[1.5px] w-full ${
                dark ? "bg-white" : "bg-black"
              }`}
            ></span>
          </div>
        </div>
      )}
    </motion.header>
  );
};

export default Header;
