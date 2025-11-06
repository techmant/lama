// "use client";
// import { motion } from "framer-motion";
// import ImageCard from "./ImageCard";

// const Fpage = () => {
//   const imageData = {
//     title: "Unleash Your Creativity, Paint Your Story",
//     description: "Where imagination meets inspiration",
//     image: "/we.png", // <-- your image
//   };

//   return (
//     <div className="h-screen relative bg-black">
//       <motion.div className="h-full w-full overflow-hidden">
//         <div className="px-6 py-20 flex items-center justify-center h-full">
//           <div className="w-full max-w-6xl">
//             <ImageCard image={imageData.image} />

//             <div className="mt-2 space-y-2">
//               <h3 className="text-white text-2xl font-light">{imageData.title}</h3>
//               <p className="text-gray-400 text-lg">{imageData.description}</p>
//             </div>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default Fpage;


"use client";
import { motion } from "framer-motion";
import ImageCard from "./ImageCard";

const Fpage = () => {
  const imageData = {
    title: "Unleash Your Creativity, Paint Your Story",
    description: "Where imagination meets inspiration",
    image: "/we.png",
  };

  return (
    <div className="relative bg-black">
      <motion.div className="w-full px-6 py-10 flex justify-center">
        <div className="w-full max-w-3xl">
          <ImageCard image={imageData.image} />

          <div className="mt-4 space-y-2 text-left">
            <h3 className="text-white text-2xl font-light">{imageData.title}</h3>
            <p className="text-gray-400 text-lg">{imageData.description}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Fpage;
