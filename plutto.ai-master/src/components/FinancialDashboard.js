// "use client";
// import { motion } from "framer-motion";
// import { useRef } from "react";
// import { useInView } from "framer-motion";

// const FinancialDashboard = () => {
//   const ref = useRef(null);

//   // Jab section viewport mai aa jaye
//   const isInView = useInView(ref, { once: true, margin: "-100px" });

//   const card1 = {
//     title: "Real-Time Analytics",
//     image1: "./realtime.png",
//     image2: "./Group21.png",
//     image3: "./Group24.png",
//     image4: "./Group27.png",
//     image5: "./Group26.png",
//   };

//   return (
//     <motion.div
//       ref={ref}
//       className="min-h-screen bg-black flex flex-col items-center justify-center p-2 sm:p-4 md:p-6 lg:p-8 relative z-50"
//     >
//       {/* Header Text */}
//       <motion.h2
//         className="text-white text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light text-center mb-6 sm:mb-8 lg:mb-12 xl:mb-16 px-2 sm:px-4"
//         initial={{ opacity: 0, y: 100 }}
//         animate={isInView ? { opacity: 1, y: 0 } : {}}
//         transition={{ duration: 1, ease: "easeOut" }}
//       >
//         AI Solutions that Enhance Efficiency and Decision-Making
//       </motion.h2>

//       {/* Dashboard Grid */}
//       <motion.div
//         className="max-w-7xl w-full grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 px-2 sm:px-4"
//         initial={{ opacity: 0, y: 100 }}
//         animate={isInView ? { opacity: 1, y: 0 } : {}}
//         transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
//       >
//         {/* Real-Time Analytics */}
//         <div className="bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl p-3 sm:p-4 lg:p-6">
//           <h3 className="text-lg sm:text-base lg:text-[25px] font-semibold text-gray-900 mb-1.5 sm:mb-2">Intelligent Business Analytics
//           </h3>
//           <p className="text-[10px] xs:text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 lg:mb-6 leading-relaxed">
//             Track your data in real time with smart, intuitive dashboards powered by AI.
//           </p>
//           <img
//             src={card1.image1}
//             alt={card1.title}
//             className="w-full h-45 rounded-md"
//           />
//         </div>

//         {/* Automated Reports */}
//         <div className="bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl p-3 sm:p-4 lg:p-6">
//           <h3 className="text-sm sm:text-base lg:text-[25px] font-semibold text-gray-900 mb-1.5 sm:mb-2">
//             Smart Data Reports
//           </h3>
//           <p className="text-[10px] xs:text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 lg:mb-6 leading-relaxed">
//            Create instant AI-powered summaries — no manual work required.
//           </p>
//           <img
//             src={card1.image2}
//             alt={card1.title}
//             className="w-full h-45 rounded-md"
//           />
//         </div>

//         {/* Smart Budgeting */}
//         <div className="bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl p-3 sm:p-4 lg:p-6">
//           <h3 className="text-sm sm:text-base lg:text-[25px] font-semibold text-gray-900 mb-1.5 sm:mb-2">
//            Efficient Project management
//           </h3>
//           <p className="text-[10px] xs:text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 lg:mb-6 leading-relaxed">
//             Plan and optimize your projects with AI-powered resource and workflow suggestions.
//           </p>
//           <img
//             src={card1.image3}
//             alt={card1.title}
//             className="w-full h-45 rounded-md"
//           />
//         </div>
//       </motion.div>

//       {/* Second Grid */}
//       <motion.div
//         className="max-w-7xl w-full grid grid-cols-1 mt-10 xs:grid-cols-2 lg:grid-cols-2 gap-3 sm:gap-4 lg:gap-6 px-2 sm:px-4"
//         initial={{ opacity: 0, y: 100 }}
//         animate={isInView ? { opacity: 1, y: 0 } : {}}
//         transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
//       >
//         {/* Secure syncing */}
//         <div className="bg-white flex justify-between rounded-xl sm:rounded-2xl lg:rounded-3xl p-3 sm:p-4 lg:p-6">
//           <div className="content-center">
//             <h3 className="text-sm sm:text-base lg:text-[25px] font-semibold text-gray-900 mb-1.5 sm:mb-2">
//               Safe & Reliable Data Sync
//             </h3>
//             <p className="text-[10px] xs:text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 lg:mb-6 leading-relaxed">
//               Keep your data secure and up-to-date across all platforms with reliable AI-powered syncing.
//             </p>
//           </div>
//           <img
//             src={card1.image4}
//             alt={card1.title}
//             className="w-80 h-40 rounded-md"
//           />
//         </div>

//         {/* Growth Score */}
//         <div className="bg-white flex justify-between relative rounded-xl sm:rounded-2xl lg:rounded-3xl p-3 sm:p-4 lg:p-6">
//           <div className="content-center">
//             <h3 className="text-sm sm:text-base lg:text-[25px] font-semibold text-gray-900 mb-1.5 sm:mb-2">
//               Business Health Index
//             </h3>
//             <p className="text-[10px] xs:text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 lg:mb-6 leading-relaxed">
//               Get instant AI-powered insights into your business performance.
//             </p>
//           </div>
//           <div>
//             <img
//               src={card1.image5}
//               alt={card1.title}
//               className="w-60 h-50 rounded-md"
//             />
//             <h2 className="absolute md:text-[31px] right-27 bottom-25 ">82%</h2>
//           </div>
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default FinancialDashboard;


"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion, useInView, useMotionValue, animate, useSpring } from "framer-motion";

export default function FinancialDashboard() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  const reportsPathRef = useRef(null);
  const reportsProgress = useMotionValue(0);
  const [reportsDot, setReportsDot] = useState({ x: 60, y: 72 });

  const donutR1 = 36;
  const donutCirc1 = Math.PI * 2 * donutR1;
  const donutR2 = 26;
  const donutCirc2 = Math.PI * 2 * donutR2;

  const gaugeR = 48;
  const gaugeCirc = Math.PI * 2 * gaugeR;
  const gaugeOffset = useMotionValue(gaugeCirc);
  const growthMv = useMotionValue(0);
  const growthSpring = useSpring(growthMv, { stiffness: 120, damping: 18 });
  const [growthNum, setGrowthNum] = useState(0);

  const syncTicks = 28;

  useEffect(() => {
    const pathEl = reportsPathRef.current;
    let reportsControl;
    if (pathEl) {
      const len = pathEl.getTotalLength();
      const setAt = (t) => {
        const pt = pathEl.getPointAtLength(Math.max(0, Math.min(len, len * t)));
        setReportsDot({ x: pt.x, y: pt.y });
      };

      if (isInView) {
        reportsControl = animate(reportsProgress, 1, {
          duration: 1.6,
          ease: [0.22, 0.9, 0.28, 1],
          onUpdate(v) {
            setAt(v);
          },
        });
      } else {
        reportsControl = animate(reportsProgress, 0, {
          duration: 0.18,
          onUpdate(v) {
            setAt(v);
          },
        });
      }
    }

    if (isInView) {
      animate(gaugeOffset, gaugeCirc * (1 - 0.58), {
        duration: 1.05,
        ease: [0.22, 0.9, 0.28, 1],
        delay: 0.12,
      });
      growthMv.set(0);
      animate(growthMv, 82, { duration: 1.05, ease: [0.22, 0.9, 0.28, 1], delay: 0.3 });
    } else {
      animate(gaugeOffset, gaugeCirc, { duration: 0.28 });
      animate(growthMv, 0, { duration: 0.22 });
    }

    const unsub = growthSpring.on("change", (v) => setGrowthNum(Math.round(v)));

    return () => {
      reportsControl && typeof reportsControl.stop === "function" && reportsControl.stop();
      unsub();
    };
  }, [isInView]);

  useEffect(() => {
    const path = reportsPathRef.current;
    if (path) {
      const pt = path.getPointAtLength(0);
      setReportsDot({ x: pt.x, y: pt.y });
    }
  }, []);

  return (
    <motion.div
      ref={ref}
      className="min-h-screen bg-black flex flex-col items-center justify-center p-2 sm:p-4 md:p-6 lg:p-8 relative z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
    >
      {/* Header Text */}
      <motion.h2
        className="text-white text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light text-center mb-6 sm:mb-8 lg:mb-12 xl:mb-16 px-2 sm:px-4"
        initial={{ opacity: 0, y: 100 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        AI Solutions that Enhance Efficiency and Decision-Making
      </motion.h2>

      {/* Dashboard Grid */}
      <motion.div
        className="max-w-7xl w-full grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 px-2 sm:px-4"
        initial={{ opacity: 0, y: 100 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
      >
        {/* Real-Time Analytics (BACK TO IMAGE) */}
        <div className="bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl p-3 sm:p-4 lg:p-6">
          <h3 className="text-lg sm:text-base lg:text-[25px] font-semibold text-gray-900 mb-1.5 sm:mb-2">
            Intelligent Business Analytics
          </h3>
          <p className="text-[10px] xs:text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 lg:mb-6 leading-relaxed">
            Track your data in real time with smart, intuitive dashboards powered by AI.
          </p>
          <img
            src="./realtime.png"
            alt="Real-Time Analytics"
            className="w-full h-45 rounded-md"
          />
        </div>

        {/* Smart Data Reports */}
        <div className="bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl p-3 sm:p-4 lg:p-6">
          <h3 className="text-sm sm:text-base lg:text-[25px] font-semibold text-gray-900 mb-1.5 sm:mb-2">
            Smart Data Reports
          </h3>
          <p className="text-[10px] xs:text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 lg:mb-6 leading-relaxed">
            Create instant AI-powered summaries — no manual work required.
          </p>

          <svg viewBox="0 0 360 120" className="w-full h-45 rounded-md">
            <defs>
              <linearGradient id="gArea" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#e6f7ff" stopOpacity="0.95" />
                <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="gLine" x1="0" x2="1">
                <stop offset="0" stopColor="#60a5fa" />
                <stop offset="1" stopColor="#0ea5e9" />
              </linearGradient>
            </defs>

            <line x1="22" x2="338" y1="28" y2="28" stroke="#eef2f7" strokeDasharray="4 6" />

            <motion.path
              d="M22 84 C72 84, 96 60, 140 58 C182 56, 220 42, 260 48 C300 54, 338 40 L338 110 L22 110 Z"
              fill="url(#gArea)"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.9, delay: 0.08 }}
            />

            <motion.path
              ref={reportsPathRef}
              d="M22 84 C72 84, 96 60, 140 58 C182 56, 220 42, 260 48 C300 54, 338 40"
              fill="none"
              stroke="url(#gLine)"
              strokeWidth="3.6"
              strokeLinecap="round"
              strokeDasharray="1000"
              strokeDashoffset={isInView ? 0 : 1000}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.12 }}
            />

            <circle cx={reportsDot.x} cy={reportsDot.y} r="7" fill="#fff" stroke="#0ea5e9" strokeWidth="2.4" />
          </svg>
        </div>

        {/* Smart Budgeting */}
        <div className="bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl p-3 sm:p-4 lg:p-6">
          <h3 className="text-sm sm:text-base lg:text-[25px] font-semibold text-gray-900 mb-1.5 sm:mb-2">
            Smart Budgeting
          </h3>
          <p className="text-[10px] xs:text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 lg:mb-6 leading-relaxed">
            Plan and adjust with AI-powered budget suggestions.
          </p>

          <svg viewBox="0 0 360 120" className="w-full h-45 rounded-md">
            <rect x="18" y="14" rx="10" width="142" height="88" fill="#fbfdff" stroke="#eef6ff" />
            <rect x="92" y="22" rx="10" width="142" height="88" fill="#fbfdff" stroke="#eef6ff" transform="rotate(-6 162 66)" />

            <g transform="translate(138,64)">
              <circle r={donutR1} fill="#fff" stroke="#eef6ff" strokeWidth="10" />
              <motion.circle
                key={isInView ? "budget-blue-in" : "budget-blue-out"}
                r={donutR1}
                fill="none"
                stroke="#60a5fa"
                strokeWidth="10"
                strokeLinecap="round"
                strokeDasharray={donutCirc1}
                initial={{ strokeDashoffset: donutCirc1 }}
                animate={{ strokeDashoffset: isInView ? donutCirc1 * (1 - 0.45) : donutCirc1 }}
                transition={{ duration: 1.0, ease: [0.22, 0.9, 0.28, 1], delay: 0.18 }}
              />
              <text x="0" y="8" textAnchor="middle" fontSize="14" fontWeight="700" fill="#0b1220">
                45%
              </text>
            </g>

            <g transform="translate(208,52) rotate(-8)">
              <circle r={donutR2} fill="#fff" stroke="#fbf6f5" strokeWidth="8" />
              <motion.circle
                key={isInView ? "budget-orange-in" : "budget-orange-out"}
                r={donutR2}
                fill="none"
                stroke="#fb923c"
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray={donutCirc2}
                initial={{ strokeDashoffset: donutCirc2 }}
                animate={{ strokeDashoffset: isInView ? donutCirc2 * (1 - 0.5) : donutCirc2 }}
                transition={{ duration: 0.95, ease: [0.22, 0.9, 0.28, 1], delay: 0.36 }}
              />
              <text x="0" y="6" textAnchor="middle" fontSize="11" fontWeight="700" fill="#0b1220">
                50%
              </text>
            </g>
          </svg>
        </div>
      </motion.div>

      {/* Second Grid */}
      <motion.div
        className="max-w-7xl w-full grid grid-cols-1 mt-10 xs:grid-cols-2 lg:grid-cols-2 gap-3 sm:gap-4 lg:gap-6 px-2 sm:px-4"
        initial={{ opacity: 0, y: 100 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
      >
        {/* Safe & Reliable Data Sync */}
        <div className="bg-white flex justify-between rounded-xl sm:rounded-2xl lg:rounded-3xl p-3 sm:p-4 lg:p-6">
          <div className="content-center">
            <h3 className="text-sm sm:text-base lg:text-[25px] font-semibold text-gray-900 mb-1.5 sm:mb-2">
              Safe & Reliable Data Sync
            </h3>
            <p className="text-[10px] xs:text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 lg:mb-6 leading-relaxed">
              Keep your data secure and up-to-date across all platforms with reliable AI-powered syncing.
            </p>
          </div>

          <svg viewBox="0 0 200 120" className="w-80 h-40 rounded-md">
            <path d="M10 80 A90 90 0 0 1 190 80" fill="none" stroke="#eef2ff" strokeWidth="14" strokeLinecap="round" />
            {Array.from({ length: syncTicks }).map((_, i) => {
              const t = i / (syncTicks - 1);
              const angle = Math.PI * t;
              const rInner = 56;
              const cx = 100;
              const cy = 80;
              const x1 = cx + Math.cos(Math.PI - angle) * (rInner - 6);
              const y1 = cy - Math.sin(Math.PI - angle) * (rInner - 6);
              const x2 = cx + Math.cos(Math.PI - angle) * (rInner + 6);
              const y2 = cy - Math.sin(Math.PI - angle) * (rInner + 6);
              const delay = 0.08 + t * 0.6;

              return (
                <motion.line
                  key={isInView ? `tick-${i}-in` : `tick-${i}-out`}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="#60a5fa"
                  strokeWidth={i % 4 === 0 ? 3 : 1.6}
                  initial={{ opacity: 0, y: 6 }}
                  animate={isInView ? { opacity: [0, 1], y: 0 } : { opacity: 0, y: 6 }}
                  transition={{ duration: 0.45, delay }}
                />
              );
            })}
          </svg>
        </div>

        {/* Growth Score */}
        <div className="bg-white flex justify-between relative rounded-xl sm:rounded-2xl lg:rounded-3xl p-3 sm:p-4 lg:p-6">
          <div className="content-center">
            <h3 className="text-sm sm:text-base lg:text-[25px] font-semibold text-gray-900 mb-1.5 sm:mb-2">
              Business Health Index
            </h3>
            <p className="text-[10px] xs:text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 lg:mb-6 leading-relaxed">
              Get instant AI-powered insights into your business performance.
            </p>
          </div>

          <div>
            <svg viewBox="0 0 220 120" className="w-60 h-50 rounded-md">
              <path d="M20 80 A100 100 0 0 1 200 80" fill="none" stroke="#eef2ff" strokeWidth="18" strokeLinecap="round" />
              <motion.path
                key={isInView ? "growth-arc-in" : "growth-arc-out"}
                d="M20 80 A100 100 0 0 1 200 80"
                fill="none"
                stroke="#60a5fa"
                strokeWidth="18"
                strokeLinecap="round"
                strokeDasharray={gaugeCirc}
                style={{ strokeDashoffset: gaugeOffset }}
                initial={false}
              />
              <text x="110" y="78" textAnchor="middle" fontSize="24" fontWeight="700" fill="#0b1220">
                {growthNum}%
              </text>
            </svg>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
