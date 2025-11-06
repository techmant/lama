// import React, { useEffect, useRef } from "react";
// import { motion, useInView, useAnimation } from "framer-motion";

// const NewContent = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true });
//   const mainControls = useAnimation();

//   useEffect(() => {
//     if (isInView) {
//       const timer = setTimeout(() => {
//         mainControls.start("visible");
//       }, 300); // 🔥 thoda kam delay rakha smooth effect ke liye
//       return () => clearTimeout(timer);
//     }
//   }, [isInView, mainControls]);

//   // Left Column (andar se niche → upar niklega)
//   const leftVariants = {
//     hidden: { opacity: 0, y: 80, filter: "blur(8px)" },
//     visible: {
//       opacity: 1,
//       y: 0,
//       filter: "blur(0px)",
//       transition: { duration: 0.9, ease: "easeOut" },
//     },
//   };

//   // Right Column (andar se upar → niche niklega)
//   const rightVariants = {
//     hidden: { opacity: 0, y: -80, filter: "blur(8px)" },
//     visible: {
//       opacity: 1,
//       y: 0,
//       filter: "blur(0px)",
//       transition: { duration: 0.9, ease: "easeOut" },
//     },
//   };

//   // Staggered children (left text)
//   const creativeTextContainerVariants = {
//     visible: {
//       transition: {
//         delayChildren: 0.3,
//         staggerChildren: 0.2,
//       },
//     },
//   };

//   const creativeTextChildVariants = {
//     hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
//     visible: {
//       opacity: 1,
//       y: 0,
//       filter: "blur(0px)",
//       transition: { duration: 0.7, ease: "easeOut" },
//     },
//   };

//   return (
//     <section
//       ref={ref}
//       className="bg-black text-white flex items-center justify-center p-8 lg:p-16"
//     >
//       <div className="container mx-auto max-w-7xl">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Left Column (1/3) */}
//           <motion.div
//             className="relative w-full text-lg md:text-[22px] lg:col-span-1"
//             initial="hidden"
//             animate={mainControls}
//             variants={leftVariants}
//           >
//             <motion.div variants={creativeTextContainerVariants}>
//               <motion.p
//                 variants={creativeTextChildVariants}
//                 className="absolute text-lg md:text-xl left-0 top-0"
//               >
//                 Designs
//               </motion.p>
//               <motion.p
//                 variants={creativeTextChildVariants}
//                 className="absolute text-lg md:text-xl left-46 top-8 sm:top-17"
//               >
//                 don&apos;t just
//               </motion.p>
//               <motion.p
//                 variants={creativeTextChildVariants}
//                 className="absolute text-lg md:text-xl left-24 top-16 sm:top-34"
//               >
//                 look good—
//               </motion.p>
//             </motion.div>
//           </motion.div>

//           {/* Right Column (2/3) */}
//           <motion.div
//             className="flex flex-col justify-end lg:col-span-2"
//             initial="hidden"
//             animate={mainControls}
//             variants={rightVariants}
//           >
//             <p className="text-lg md:text-[26px]">
//               In a crowded and fast-changing digital world, it&apos;s not enough
//               to have ideas — you need websites, apps, and AI-powered solutions
//               that cut through, connect, and drive action.
//             </p>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// // export default NewContent;
// import React, { useEffect, useRef } from "react";
// import { motion, useInView, useAnimation } from "framer-motion";

// const NewContent = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, amount: 0.45 }); // 👈 kam se kam 45% dikhna zaroori
//   const mainControls = useAnimation();

//   useEffect(() => {
//     if (isInView) {
//       const timer = setTimeout(() => {
//         mainControls.start("visible");
//       }, 200); // thoda delay (200ms) rakha smooth effect ke liye
//       return () => clearTimeout(timer);
//     }
//   }, [isInView, mainControls]);

//   // Left Column
//   const leftVariants = {
//     hidden: { opacity: 0, y: 80, filter: "blur(8px)" },
//     visible: {
//       opacity: 1,
//       y: 0,
//       filter: "blur(0px)",
//       transition: { duration: 1.2, ease: "easeOut" }, // 👈 thoda slow
//     },
//   };

//   // Right Column
//   const rightVariants = {
//     hidden: { opacity: 0, y: -80, filter: "blur(8px)" },
//     visible: {
//       opacity: 1,
//       y: 0,
//       filter: "blur(0px)",
//       transition: { duration: 1.2, ease: "easeOut" }, // 👈 slow
//     },
//   };

//   // Staggered children
//   const creativeTextContainerVariants = {
//     visible: {
//       transition: {
//         delayChildren: 0.4, // pehle parent, phir children slight delay
//         staggerChildren: 0.25, // har child ke beech 0.25s
//       },
//     },
//   };

//   const creativeTextChildVariants = {
//     hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
//     visible: {
//       opacity: 1,
//       y: 0,
//       filter: "blur(0px)",
//       transition: { duration: 0.9, ease: "easeOut" },
//     },
//   };

//   return (
//     <section
//       ref={ref}
//       className="bg-black text-white flex items-center justify-center p-8 lg:p-16"
//     >
//       <div className="container mx-auto max-w-7xl">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Left Column */}
//           <motion.div
//             className="relative w-full text-lg md:text-[22px] lg:col-span-1"
//             initial="hidden"
//             animate={mainControls}
//             variants={leftVariants}
//           >
//             <motion.div variants={creativeTextContainerVariants}>
//               <motion.p
//                 variants={creativeTextChildVariants}
//                 className="absolute text-lg md:text-xl left-0 top-0"
//               >
//                 Designs
//               </motion.p>
//               <motion.p
//                 variants={creativeTextChildVariants}
//                 className="absolute text-lg md:text-xl left-46 top-8 sm:top-17"
//               >
//                 don&apos;t just
//               </motion.p>
//               <motion.p
//                 variants={creativeTextChildVariants}
//                 className="absolute text-lg md:text-xl left-24 top-16 sm:top-34"
//               >
//                 look good—
//               </motion.p>
//             </motion.div>
//           </motion.div>

//           {/* Right Column */}
//           <motion.div
//             className="flex flex-col justify-end lg:col-span-2"
//             initial="hidden"
//             animate={mainControls}
//             variants={rightVariants}
//           >
//             <p className="text-lg md:text-[26px]">
//               In a crowded and fast-changing digital world, it&apos;s not enough
//               to have ideas — you need websites, apps, and AI-powered solutions
//               that cut through, connect, and drive action.
//             </p>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default NewContent;
// "use client";

// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const NewContent = () => {
//   const sectionRef = useRef(null);
//   const leftRef = useRef(null);
//   const rightRef = useRef(null);
//   const textRefs = useRef([]);

//   useEffect(() => {
//     if (typeof window === "undefined") return;

//     const ctx = gsap.context(() => {
//       // Left Column Animation
//       gsap.from(leftRef.current, {
//         opacity: 0,
//         y: 80,
//         filter: "blur(8px)",
//         duration: 1.2,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 70%",
//         },
//       });

//       // Staggered child animations
//       gsap.from(textRefs.current, {
//         opacity: 0,
//         y: 40,
//         filter: "blur(6px)",
//         duration: 0.9,
//         ease: "power3.out",
//         stagger: 0.25,
//         delay: 0.4,
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 70%",
//         },
//       });

//       // Right Column Animation
//       gsap.from(rightRef.current, {
//         opacity: 0,
//         y: -80,
//         filter: "blur(8px)",
//         duration: 1.2,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 70%",
//         },
//       });
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="bg-black text-white flex items-center justify-center p-8 lg:p-16"
//     >
//       <div className="container mx-auto max-w-7xl">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Left Column */}
//           <div
//             ref={leftRef}
//             className="relative w-full text-lg md:text-[22px] lg:col-span-1"
//           >
//             <p
//               ref={(el) => (textRefs.current[0] = el)}
//               className="absolute text-lg md:text-xl left-0 top-0"
//             >
//               Designs
//             </p>
//             <p
//               ref={(el) => (textRefs.current[1] = el)}
//               className="absolute text-lg md:text-xl left-46 top-8 sm:top-17"
//             >
//               don&apos;t just
//             </p>
//             <p
//               ref={(el) => (textRefs.current[2] = el)}
//               className="absolute text-lg md:text-xl left-24 top-16 sm:top-34"
//             >
//               look good—
//             </p>
//           </div>

//           {/* Right Column */}
//           <div
//             ref={rightRef}
//             className="flex flex-col justify-end lg:col-span-2"
//           >
//             <p className="text-lg md:text-[26px]">
//               In a crowded and fast-changing digital world, it&apos;s not enough
//               to have ideas — you need websites, apps, and AI-powered solutions
//               that cut through, connect, and drive action.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default NewContent;


// "use client";

// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const NewContent = () => {
//   const sectionRef = useRef(null);
//   const topTextRef = useRef(null);
//   const leftRef = useRef(null);
//   const rightRef = useRef(null);
//   const textRefs = useRef([]);

//   useEffect(() => {
//     if (typeof window === "undefined") return;

//     const ctx = gsap.context(() => {
//       // Top Center Text Animation
//       gsap.from(topTextRef.current, {
//         opacity: 0,
//         y: 60,
//         filter: "blur(6px)",
//         duration: 1.2,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 80%",
//         },
//       });

//       // Left Column Animation
//       gsap.from(leftRef.current, {
//         opacity: 0,
//         y: 80,
//         filter: "blur(8px)",
//         duration: 1.2,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 70%",
//         },
//       });

//       // Staggered child animations
//       gsap.from(textRefs.current, {
//         opacity: 0,
//         y: 40,
//         filter: "blur(6px)",
//         duration: 0.9,
//         ease: "power3.out",
//         stagger: 0.25,
//         delay: 0.4,
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 70%",
//         },
//       });

//       // Right Column Animation
//       gsap.from(rightRef.current, {
//         opacity: 0,
//         y: -80,
//         filter: "blur(8px)",
//         duration: 1.2,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 70%",
//         },
//       });
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="bg-black text-white flex items-center justify-center p-8 lg:p-16"
//     >
//       <div className="container mx-auto max-w-7xl">
//         {/* ✅ Top Center Text (like screenshot) */}
       
// <div
//   ref={topTextRef}
//   className="max-w-4xl mx-auto mb-16 px-4"
// >
//   <p
//     className="text-2xl md:text-3xl lg:text-4xl font-medium leading-snug text-left"
//     style={{ textIndent: "6rem" }} // <-- yahan spacing adjust kar sakte ho
//   >
//     We design and launch innovative digital solutions that help
//     businesses grow — through strategy, web and app development,
//     AI-powered tools, and seamless user experiences.
//   </p>
// </div>

//         {/* ✅ Main Grid Content */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Left Column */}
//           <div
//             ref={leftRef}
//             className="relative w-full text-lg md:text-[22px] lg:col-span-1"
//           >
//             <p
//               ref={(el) => (textRefs.current[0] = el)}
//               className="absolute text-lg md:text-xl left-0 top-0"
//             >
//               Designs
//             </p>
//             <p
//               ref={(el) => (textRefs.current[1] = el)}
//               className="absolute text-lg md:text-xl left-46 top-8 sm:top-17"
//             >
//               don&apos;t just
//             </p>

//             {/* Horizontal Line "look good— makes impact" */}
//             <p
//               ref={(el) => (textRefs.current[2] = el)}
//               className="absolute text-lg md:text-xl left-24 top-16 sm:top-34 whitespace-nowrap"
//             >
//               look good— &nbsp;&nbsp;&nbsp; makes impact
//             </p>
//           </div>

//           {/* Right Column */}
//           <div
//             ref={rightRef}
//             className="flex flex-col justify-end lg:col-span-2"
//           >
//             <p className="text-lg md:text-[26px] leading-relaxed">
//               In a crowded and fast-changing digital world, it&apos;s not enough
//               to have ideas — you need websites, apps, and AI-powered solutions
//               that cut through, connect, and drive action.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default NewContent;

// "use client";

// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const NewContent = () => {
//   const sectionRef = useRef(null);
//   const topTextRef = useRef(null);
//   const leftRef = useRef(null);
//   const rightRef = useRef(null);
//   const textRefs = useRef([]);
//   const rightParaRef = useRef(null); // ✅ new ref for crowded paragraph

//   useEffect(() => {
//     if (typeof window === "undefined") return;

//     const ctx = gsap.context(() => {
//       // Top Center Text Animation
//       gsap.from(topTextRef.current, {
//         opacity: 0,
//         y: 60,
//         filter: "blur(6px)",
//         duration: 1.2,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 80%",
//         },
//       });

//       // Left Column Animation
//       gsap.from(leftRef.current, {
//         opacity: 0,
//         y: 80,
//         filter: "blur(8px)",
//         duration: 1.2,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 70%",
//         },
//       });

//       // Staggered child animations
//       gsap.from(textRefs.current, {
//         opacity: 0,
//         y: 40,
//         filter: "blur(6px)",
//         duration: 0.9,
//         ease: "power3.out",
//         stagger: 0.25,
//         delay: 0.4,
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 70%",
//         },
//       });

//       // ✅ Fix: animate only the crowded paragraph
//       gsap.from(rightParaRef.current, {
//         opacity: 0,
//         y: 60,
//         filter: "blur(6px)",
//         duration: 1.2,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: rightParaRef.current,
//           start: "top 85%",
//         },
//       });
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="bg-black text-white flex items-center justify-center p-8 lg:p-16"
//     >
//       <div className="container mx-auto max-w-7xl">
//         {/* ✅ Top Center Text (like screenshot) */}
//         <div ref={topTextRef} className="max-w-4xl mx-auto mb-16 px-4">
//           <p
//             className="text-2xl md:text-3xl lg:text-4xl font-medium leading-snug text-left"
//             style={{ textIndent: "6rem" }}
//           >
//             We design and launch innovative digital solutions that help
//             businesses grow — through strategy, web and app development,
//             AI-powered tools, and seamless user experiences.
//           </p>
//         </div>

//         {/* ✅ Main Grid Content */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Left Column */}
//           <div
//             ref={leftRef}
//             className="relative w-full text-lg md:text-[22px] lg:col-span-1"
//           >
//             <p
//               ref={(el) => (textRefs.current[0] = el)}
//               className="absolute text-lg md:text-xl left-0 top-0"
//             >
//               Designs
//             </p>
//             <p
//               ref={(el) => (textRefs.current[1] = el)}
//               className="absolute text-lg md:text-xl left-46 top-8 sm:top-17"
//             >
//               don&apos;t just
//             </p>

//             {/* Horizontal Line "look good— makes impact" */}
//             <p
//               ref={(el) => (textRefs.current[2] = el)}
//               className="absolute text-lg md:text-xl left-24 top-16 sm:top-34 whitespace-nowrap"
//             >
//               look good— &nbsp;&nbsp;&nbsp; makes impact
//             </p>
//           </div>

//           {/* Right Column */}
//           <div
//             ref={rightRef}
//             className="flex flex-col justify-end lg:col-span-2"
//           >
//             <p
//               ref={rightParaRef} // ✅ attach new ref
//               className="text-lg md:text-[26px] leading-relaxed"
//             >
//               In a crowded and fast-changing digital world, it&apos;s not enough
//               to have ideas — you need websites, apps, and AI-powered solutions
//               that cut through, connect, and drive action.
//             </p>
//           </div>
//         </div>
//       </div>
      
//     </section>
//   );
// };

// export default NewContent;


"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const NewContent = () => {
  const sectionRef = useRef(null);
  const topTextRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const textRefs = useRef([]);
  const rightParaRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      gsap.from(topTextRef.current, {
        opacity: 0,
        y: 60,
        filter: "blur(6px)",
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(leftRef.current, {
        opacity: 0,
        y: 80,
        filter: "blur(8px)",
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });

      gsap.from(textRefs.current, {
        opacity: 0,
        y: 40,
        filter: "blur(6px)",
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.25,
        delay: 0.4,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });

      gsap.from(rightParaRef.current, {
        opacity: 0,
        y: 60,
        filter: "blur(6px)",
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: rightParaRef.current,
          start: "top 85%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-black text-white flex items-center justify-center p-6 md:p-12 lg:p-16"
    >
      <div className="container mx-auto max-w-7xl">
        {/* ✅ Top Center Text */}
        <div ref={topTextRef} className="max-w-4xl mx-auto mb-10 md:mb-16 px-4">
          <p
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium leading-snug text-left"
            style={{ textIndent: "2rem" }}
          >
            We design and launch innovative digital solutions that help
            businesses grow — through strategy, web and app development,
            AI-powered tools, and seamless user experiences.
          </p>
        </div>

        {/* ✅ Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Left Column */}
          <div
            ref={leftRef}
            className="text-lg md:text-[22px] lg:col-span-1 flex flex-col gap-2 lg:relative"
          >
            {/* On mobile/tablet -> normal flow */}
            {/* On desktop -> absolute fancy positioning */}
            <p
              ref={(el) => (textRefs.current[0] = el)}
              className="text-base sm:text-lg md:text-xl lg:absolute lg:left-0 lg:top-0"
            >
              Designs
            </p>
            <p
              ref={(el) => (textRefs.current[1] = el)}
              className="text-base sm:text-lg md:text-xl lg:absolute lg:left-40 lg:top-8"
            >
              don&apos;t just
            </p>
            <p
              ref={(el) => (textRefs.current[2] = el)}
              className="text-base sm:text-lg md:text-xl lg:absolute lg:left-24 lg:top-16 whitespace-nowrap"
            >
              look good — makes impact
            </p>
          </div>

          {/* Right Column */}
          <div
            ref={rightRef}
            className="lg:col-span-2 flex flex-col justify-start"
          >
            <p
              ref={rightParaRef}
              className="text-base sm:text-lg md:text-[22px] lg:text-[26px] leading-relaxed"
            >
              In a crowded and fast-changing digital world, it&apos;s not enough
              to have ideas — you need websites, apps, and AI-powered solutions
              that cut through, connect, and drive action.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewContent;
