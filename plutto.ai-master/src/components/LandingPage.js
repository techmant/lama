// "use client";
// import { motion } from "framer-motion";
// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import Header from "./Header";

// const LandingPage = ({ showContent }) => {
//   const paraRef = useRef(null);
//   const menuRef = useRef(null);
//   const bigTextRef = useRef(null);

//   useEffect(() => {
//     if (showContent) {
//       const words = paraRef.current.querySelectorAll(".word-inner");
//       gsap.fromTo(
//         words,
//         { yPercent: 120, skewY: 8, filter: "blur(4px)", opacity: 0 },
//         {
//           yPercent: 0,
//           skewY: 0,
//           filter: "blur(0px)",
//           opacity: 1,
//           duration: 0.8,
//           ease: "power4.out",
//           stagger: 0.06,
//         }
//       );

//       const menuWords = menuRef.current.querySelectorAll(".word-inner");
//       gsap.fromTo(
//         menuWords,
//         { yPercent: 120, skewY: 8, filter: "blur(4px)", opacity: 0 },
//         {
//           yPercent: 0,
//           skewY: 0,
//           filter: "blur(0px)",
//           opacity: 1,
//           duration: 0.8,
//           ease: "power4.out",
//           stagger: 0.15,
//           delay: 0.5,
//         }
//       );

//       const letters = bigTextRef.current.querySelectorAll(".letter");
//       gsap.fromTo(
//         letters,
//         { yPercent: 120, skewY: 12, scale: 1.2, opacity: 0 },
//         {
//           yPercent: 0,
//           skewY: 0,
//           scale: 1,
//           opacity: 1,
//           duration: 1,
//           ease: "power4.out",
//           stagger: 0.08,
//           delay: 0.8,
//         }
//       );
//     }
//   }, [showContent]);

//   return (
//     <div className="h-screen bg-white overflow-hidden -z-20 relative sticky top-[-30%] bg-white overflow-hidden relative bg-fixed">
//       {showContent && (
//         <>
//           <div className="flex relative h-full px-12">
//             <motion.div
//               className="flex-1 flex items-start md:pt-48 mt-10"
//               initial={{ y: 50, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ duration: 0.8, delay: 0.4 }}
//             >
//               <div className="max-w-md" ref={paraRef}>
//                 {"Plutto.ai crafts websites, apps, brands, and AI-powered solutions — delivering everything from design to development to help businesses innovate, grow, and stand out online."
//                   .split(" ")
//                   .map((word, i) => (
//                     <span
//                       key={i}
//                       className="inline-block overflow-hidden mr-1"
//                     >
//                       <span className="word-inner inline-block text-black">
//                         {word}
//                       </span>
//                     </span>
//                   ))}
//               </div>
//             </motion.div>

//             <motion.div
//               className="w-52 flex justify-end md:pt-48 mt-10"
//               initial={{ y: 50, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ duration: 0.8, delay: 0.6 }}
//             >
//               <div className="space-y-1 text-right" ref={menuRef}>
//                 {["Documentation", "Tools", "References", "Tutorials"].map((item, i) => (
//     <div
//       key={i}
//       className={`overflow-hidden ${item === "Tutorials" ? "mb-6" : ""}`}
//     >
//       <span className="word-inner inline-block text-black">
//         {item}
//       </span>
//     </div>
//   ))}
//               </div>
//             </motion.div>
//           </div>

//           <motion.div
//             className="absolute bottom-16 left-0 right-0 flex items-center justify-center pointer-events-none"
//             initial={{ y: 100, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 1, delay: 0.8 }}
//           >
//             <div
//               ref={bigTextRef}
//               className="text-black font-bold overflow-hidden flex"
//               style={{
//                 fontSize: "14rem",
//                 lineHeight: "0.85",
//                 letterSpacing: "0.02em",
//               }}
//             >
//               {"PLUTTO.AI".split("").map((letter, i) => (
//                 <span
//                   key={i}
//                   className="letter inline-block overflow-hidden"
//                 >
//                   {letter}
//                 </span>
//               ))}
//             </div>
//           </motion.div>

//           <motion.div
//             className="absolute bottom-0 left-0 right-0 h-16 bg-black"
//             initial={{ y: 50, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.8, delay: 1 }}
//           />
//         </>
//       )}
//     </div>
//   );
// };

// export default LandingPage;

"use client";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Header from "./Header";

const LandingPage = ({ showContent }) => {
  const paraRef = useRef(null);
  const menuRef = useRef(null);
  const bigTextRef = useRef(null);

  useEffect(() => {
    if (showContent) {
      const words = paraRef.current?.querySelectorAll(".word-inner");
      if (words) {
        gsap.fromTo(
          words,
          { yPercent: 120, skewY: 8, filter: "blur(4px)", opacity: 0 },
          {
            yPercent: 0,
            skewY: 0,
            filter: "blur(0px)",
            opacity: 1,
            duration: 0.8,
            ease: "power4.out",
            stagger: 0.06,
          }
        );
      }

      const menuWords = menuRef.current?.querySelectorAll(".word-inner");
      if (menuWords) {
        gsap.fromTo(
          menuWords,
          { yPercent: 120, skewY: 8, filter: "blur(4px)", opacity: 0 },
          {
            yPercent: 0,
            skewY: 0,
            filter: "blur(0px)",
            opacity: 1,
            duration: 0.8,
            ease: "power4.out",
            stagger: 0.15,
            delay: 0.5,
          }
        );
      }

      const letters = bigTextRef.current?.querySelectorAll(".letter");
      if (letters) {
        gsap.fromTo(
          letters,
          { yPercent: 120, skewY: 12, scale: 1.2, opacity: 0 },
          {
            yPercent: 0,
            skewY: 0,
            scale: 1,
            opacity: 1,
            duration: 1,
            ease: "power4.out",
            stagger: 0.08,
            delay: 0.8,
          }
        );
      }
    }
  }, [showContent]);

  return (
    <div className="h-screen bg-white overflow-hidden -z-20 relative sticky top-[-30%] bg-fixed">
      {showContent && (
        <>
          {/* ✅ Desktop Layout */}
          <div className="hidden md:flex relative h-full px-12">
            <motion.div
              className="flex-1 flex items-start md:pt-48 mt-10"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="max-w-md" ref={paraRef}>
                {"Proto delivers websites, apps, and AI-powered solutions — from design to development — helping businesses build smarter, scale faster, and stand out online."
                  .split(" ")
                  .map((word, i) => (
                    <span
                      key={i}
                      className="inline-block overflow-hidden mr-1"
                    >
                      <span className="word-inner inline-block text-black">
                        {word}
                      </span>
                    </span>
                  ))}
              </div>
            </motion.div>

            <motion.div
              className="w-52 flex justify-end md:pt-48 mt-10"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="space-y-1 text-right" ref={menuRef}>
                {["Documentation", "Tools", "References", "Tutorials"].map(
                  (item, i) => (
                    <div
                      key={i}
                      className={`overflow-hidden ${
                        item === "Tutorials" ? "mb-6" : ""
                      }`}
                    >
                      <span className="word-inner inline-block text-black">
                        {item}
                      </span>
                    </div>
                  )
                )}
              </div>
            </motion.div>
          </div>

          {/* ✅ Mobile Layout */}
         {/* ✅ Mobile Layout */}
<div className="block md:hidden relative h-full px-6 flex flex-col justify-center items-center text-center">
  {/* Paragraph */}
  <motion.div
    className="mb-8"
    initial={{ y: 50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, delay: 0.4 }}
  >
    <p className="text-base leading-relaxed text-black">
      Proto delivers websites, apps, and AI-powered solutions — from design to development — helping businesses build smarter, scale faster, and stand out online.
    </p>
  </motion.div>

  {/* Menu Items */}
  <motion.div
    className="space-y-2 mb-12"
    initial={{ y: 50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, delay: 0.6 }}
  >
    {["Documentation", "Tools", "References", "Tutorials"].map((item, i) => (
      <div key={i} className="text-black font-medium">
        {item}
      </div>
    ))}
  </motion.div>

  {/* Big Text at Bottom */}
  {/* Big Text at Bottom */}
<motion.div
  className="absolute bottom-20 left-0 right-0 flex items-center justify-center px-4"
  initial={{ y: 100, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 1, delay: 0.8 }}
>
  <div
    className="text-black font-bold text-center max-w-full leading-none break-words"
    style={{
      fontSize: "clamp(2.5rem, 12vw, 6rem)", // 👈 responsive font size
      letterSpacing: "0.02em",
    }}
  >
     PROTO.AI
  </div>
</motion.div>
</div>

          {/* ✅ Common Big Text (Desktop only) */}
          <motion.div
            className="hidden md:flex absolute bottom-16 left-0 right-0 items-center justify-center pointer-events-none"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <div
              ref={bigTextRef}
              className="text-black font-bold overflow-hidden flex"
              style={{
                fontSize: "14rem",
                lineHeight: "0.85",
                letterSpacing: "0.02em",
              }}
            >
              {"PROTO.AI".split("").map((letter, i) => (
                <span
                  key={i}
                  className="letter inline-block overflow-hidden"
                >
                  {letter}
                </span>
              ))}
            </div>
          </motion.div>

          {/* ✅ Bottom Black Bar (Common) */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-16 bg-black"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          />
        </>
      )}
    </div>
  );
};

export default LandingPage;
