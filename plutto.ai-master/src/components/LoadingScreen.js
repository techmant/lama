// "use client";
// import { motion, AnimatePresence } from "framer-motion";

// const LoadingScreen = ({ count, isVisible, showNumber }) => (
//   <AnimatePresence>
//     {isVisible && (
//       <motion.div
//         className="fixed inset-0 bg-black flex items-center justify-center z-50"
//         initial={{ scale: 1 }}
//         exit={{ scale: 0 }}
//         transition={{ duration: 1, ease: "easeInOut" }}
//       >
//         {showNumber && (
//           <div className="text-white text-6xl font-mono tracking-wider">
//             {count.toString().padStart(3, "0")}
//           </div>
//         )}
//       </motion.div>
//     )}
//   </AnimatePresence>
// );

// export default LoadingScreen;
// "use client";
// import { useEffect, useRef } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { gsap } from "gsap";

// const LoadingScreen = ({ isVisible, showNumber }) => {
//   const counterRef = useRef(null);

//   useEffect(() => {
//     if (!isVisible) return;

//     const el = counterRef.current;
//     if (!el) return;

//     // Stack create karna → 0 se 100
//     el.innerHTML = "";
//     for (let i = 0; i <= 100; i++) {
//       const div = document.createElement("div");
//       div.className =
//         "num flex items-center justify-center h-[100px] w-full text-white";
//       div.textContent = i;
//       el.appendChild(div);
//     }

//     // Animate stack
//     const numHeight = el.querySelector(".num").clientHeight;
//     const totalDistance = (el.querySelectorAll(".num").length - 1) * numHeight;

//     gsap.to(el, {
//       y: -totalDistance,
//       duration: 6, // total animation duration
//       ease: "power2.inOut",
//     });
//   }, [isVisible]);

//   return (
//     <AnimatePresence>
//       {isVisible && (
//         <motion.div
//           className="fixed inset-0 bg-black flex items-center justify-center z-50"
//           initial={{ scale: 1 }}
//           exit={{ scale: 0 }}
//           transition={{ duration: 1, ease: "easeInOut" }}
//         >
//           {showNumber && (
//             <div
//               className="flex h-[100px] text-6xl font-mono tracking-wider overflow-hidden"
//               style={{ clipPath: "polygon(0 0, 100% 0, 100% 100px, 0 100px)" }}
//             >
//               <div ref={counterRef} className="digit relative w-[4ch]" />
//             </div>
//           )}
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };

// export default LoadingScreen;
"use client";
import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { gsap } from "gsap";

const ICONS = [
  "★","✦","✧","❖","◉","◆","✶","✹","✸","✺",
  "✪","✫","✬","✭","✮","✯","✰","✱","✲","✳",
  "✴","✵","✻","✼","✽","✾","✿","❀","❁","❂",
  "❃","❄","❅","❆","❇","⬤","◍","◎","◇","◈",
  "⬟","⬢","⬣","◊","◌","▪","▫","▲","△","▼",
  "★","✦","✧","❖","◉","◆","✶","✹","✸","✺",
  "✪","✫","✬","✭","✮","✯","✰","✱","✲","✳",
  "✴","✵","✻","✼","✽","✾","✿","❀","❁","❂",
  "❃","❄","❅","❆","❇","⬤","◍","◎","◇","◈",
  "⬟","⬢","⬣","◊","◌","▪","▫","▲","△","▼" 
];

const STACKS = 5;
const ITEMS_PER_STACK = 25;
const ITEM_HEIGHT_PX = 100;
const STACK_DURATION = 7;

function shuffle(array) {
  const a = array.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const LoadingScreen = ({ isVisible, onFinish }) => {
  const stacksRef = useRef([]);
  const textRef = useRef(null);
  const tlRef = useRef(null);

  useEffect(() => {
    if (!isVisible) return;

    // kill previous timeline if any
    if (tlRef.current) tlRef.current.kill();

    // ensure the PROTO.AI element is hidden immediately (prevents flash)
    if (textRef.current) {
      gsap.set(textRef.current, { opacity: 0, y: 40 });
    }

    const tl = gsap.timeline();

    for (let idx = 0; idx < STACKS; idx++) {
      const stackEl = stacksRef.current[idx];
      if (!stackEl) continue;
      // clear
      stackEl.innerHTML = "";

      // unique icons for this stack
      const iconsForThisStack = shuffle(ICONS).slice(0, ITEMS_PER_STACK);

      iconsForThisStack.forEach((icon) => {
        const div = document.createElement("div");
        div.className = "flex items-center justify-center text-white text-6xl select-none";
        div.style.height = `${ITEM_HEIGHT_PX}px`;
        div.style.lineHeight = `${ITEM_HEIGHT_PX}px`;
        div.textContent = icon;
        stackEl.appendChild(div);
      });

      const totalDistance = (ITEMS_PER_STACK - 1) * ITEM_HEIGHT_PX;

      // add vertical scroll for this column; slight stagger so columns don't 100% align
      tl.to(
        stackEl,
        { y: -totalDistance, duration: STACK_DURATION, ease: "power2.inOut" },
        idx * 0.12
      );
    }

    // reveal PROTO.AI only after all stacks are finished
    // (placing this at the absolute end of the timeline)
    tl.to(textRef.current, { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }, `+=0.15`);

    // call onFinish only after the full timeline (including text) completes
    tl.call(() => {
      if (typeof onFinish === "function") onFinish();
    });

    tlRef.current = tl;

    return () => {
      if (tlRef.current) tlRef.current.kill();
    };
  }, [isVisible, onFinish]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 bg-black flex items-center justify-center z-[9999]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col items-center">
            <div className="flex gap-6">
              {Array.from({ length: STACKS }).map((_, idx) => (
                <div
                  key={idx}
                  className="overflow-hidden"
                  style={{ height: `${ITEM_HEIGHT_PX}px`, width: "4ch" }}
                >
                  {/* make sure the h1 is initially hidden with inline style to avoid FOUC */}
                  <div ref={(el) => (stacksRef.current[idx] = el)} className="w-full" />
                </div>
              ))}
            </div>

            {/* IMPORTANT: inline style hides text immediately so it never flashes */}
            <h1
              ref={textRef}
              style={{ opacity: 0, transform: "translateY(40px)" }}
              className="mt-6 text-white text-5xl font-extrabold tracking-[0.3em] pointer-events-none"
            >
              PROTO.AI
            </h1>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
