"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const ImageCard = ({ image }) => {
  return (
    <motion.div
      className="w-full h-[500px] flex items-center justify-center bg-black rounded-2xl overflow-hidden"
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <Image
        src={image}
        alt="Creative work"
        width={1200}
        height={800}
        className="w-full h-full object-cover"
        priority
      />
    </motion.div>
  );
};

export default ImageCard;
