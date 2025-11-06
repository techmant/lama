// "use client";
// import Image from "next/image";
// import { useState, useRef, useEffect } from "react";
// import { motion, useAnimation, useInView } from "framer-motion";

// const images = [
//   { src: "/3D.png", glowColor: "#5d9d9d", finalX: -320, finalY: -80, rotation: -30, delay: 0.2 },
//   { src: "/3d1.png", glowColor: "#e56d3b", finalX: -160, finalY: -160, rotation: -10, delay: 0.4 },
//   { src: "/3d2.png", glowColor: "#f770f7", finalX: 0, finalY: -220, rotation: 0, delay: 0.6 },
//   { src: "/3d3.png", glowColor: "#000", finalX: 160, finalY: -160, rotation: 10, delay: 0.8 },
//   { src: "/3d4.png", glowColor: "#5d9d9d", finalX: 320, finalY: -80, rotation: 30, delay: 1 },
// ];



// const AnimatedImages = () => {
//   const [hoveredImage, setHoveredImage] = useState(null);
//   const ref = useRef(null);

//   const isInView = useInView(ref, { once: true, margin: "-100px" });
//   const controls = useAnimation();

//   useEffect(() => {
//     if (isInView) controls.start("visible");
//   }, [isInView, controls]);

//   const itemVariants = {
//     hidden: {
//       opacity: 0,
//       scale: 0.8, // 🔥 no forced 50% center jump
//     },
//     visible: (img) => ({
//       opacity: 1,
//       x: img.finalX,
//       y: img.finalY,
//       rotate: img.rotation,
//       scale: 1,
//       transition: {
//         duration: 1,
//         delay: img.delay,
//         ease: "easeOut",
//       },
//     }),
//   };

//   return (
//     <div className="bg-black py-20" ref={ref}>
//       {/* Headings */}
//       <motion.h2
//         className="text-white text-lg sm:text-3xl lg:text-5xl font-light text-center px-2"
//         initial={{ opacity: 0, y: 100 }}
//         animate={isInView ? { opacity: 1, y: 0 } : {}}
//         transition={{ duration: 1, ease: "easeOut" }}
//       >
//         Powerful AI Automation
//       </motion.h2>

//       <motion.h2
//         className="text-white text-lg sm:text-3xl lg:text-5xl font-light text-center mb-12 px-2"
//         initial={{ opacity: 0, y: 100 }}
//         animate={isInView ? { opacity: 1, y: 0 } : {}}
//         transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
//       >
//         Effortless Setup
//       </motion.h2>

//       {/* Images Animation */}
//       <div className="flex bg-black bg-image justify-center items-center w-screen h-screen relative overflow-hidden">
//         <div className="relative w-[600px] h-[300px] flex justify-center items-end">
//           {images.map((img, index) => (
//             <motion.div
//               key={index}
//               className={`absolute w-[100px] h-[100px] bg-white rounded-[20px] backdrop-blur-sm
//                 flex justify-center items-center transition-all duration-500
//                 ${hoveredImage === index ? "scale-110 z-10" : ""}`}
//               style={{
//                 boxShadow:
//                   hoveredImage === index
//                     ? `0 0 25px 5px ${img.glowColor}`
//                     : "none",
//               }}
//               initial="hidden"
//               animate={controls}
//               variants={itemVariants}
//               custom={img}
//               whileHover={{ scale: 1.1 }}
//               onMouseEnter={() => setHoveredImage(index)}
//               onMouseLeave={() => setHoveredImage(null)}
//             >
//               <Image
//                 src={img.src}
//                 alt={`Animated image ${index + 1}`}
//                 width={60}
//                 height={60}
//                 className="object-contain"
//               />
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AnimatedImages;


"use client";
import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const images = [
  { src: "/3D.png", glowColor: "#5d9d9d", finalX: -360, finalY: -40, rotation: -30, delay: 0.2 },
  { src: "/3d1.png", glowColor: "#e56d3b", finalX: -200, finalY: -140, rotation: -12, delay: 0.4 },
  { src: "/3d2.png", glowColor: "#f770f7", finalX: 0, finalY: -200, rotation: 0, delay: 0.6 },
  { src: "/3d3.png", glowColor: "#000", finalX: 200, finalY: -140, rotation: 12, delay: 0.8 },
  { src: "/3d4.png", glowColor: "#5d9d9d", finalX: 360, finalY: -40, rotation: 30, delay: 1 },
];

export default function AnimatedImages() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-black relative min-h-screen flex flex-col">
      {/* Headings */}
      <div className="text-center pt-16">
        <h2 className="text-white text-3xl lg:text-5xl font-light">
          Powerful AI Automation
        </h2>
        <h3 className="text-white text-xl lg:text-3xl font-light mt-4">
          Effortless Setup
        </h3>
      </div>

      {/* Image Cluster */}
      <div className="flex-1 flex items-end justify-center relative overflow-hidden bg-image">
        {/* ⬇️ Slightly more downward */}
        <div className="relative w-[900px] h-[550px] flex justify-center items-center mt-40">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              className="absolute w-[120px] h-[120px] bg-white rounded-[20px] flex justify-center items-center"
              style={{
                boxShadow: `0 0 25px ${img.glowColor}`,
              }}
              initial={{
                opacity: 0,
                scale: 0.5,
                x: 0,
                y: 0,
                rotate: 0,
              }}
              animate={
                isInView
                  ? {
                      opacity: 1,
                      scale: 1,
                      x: img.finalX,
                      y: img.finalY,
                      rotate: img.rotation,
                    }
                  : {}
              }
              transition={{
                duration: 1.5,
                delay: img.delay,
                ease: "easeOut",
              }}
            >
              <Image
                src={img.src}
                alt={`img-${idx}`}
                width={70}
                height={70}
                className="object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
