// "use client";
// import { useState, useRef, useEffect } from "react";
// import { motion, useAnimation, useInView } from "framer-motion";

// const ContactSection = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     topic: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//   };

//   // framer-motion setup
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true });
//   const controls = useAnimation();

//   useEffect(() => {
//     if (isInView) controls.start("visible");
//   }, [isInView, controls]);

//   const containerVariants = {
//     hidden: {},
//     visible: { transition: { staggerChildren: 0.2 } },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 40 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6, ease: "easeOut" },
//     },
//   };

//   return (
//     <div
//       ref={ref}
//       className="min-h-screen bg-black py-16 px-4 flex items-center justify-center"
//     >
//       <motion.div
//         className="max-w-3xl w-full"
//         variants={containerVariants}
//         initial="hidden"
//         animate={controls}
//       >
//         <motion.h2
//           className="text-white text-3xl lg:text-4xl font-light text-center mb-12"
//           variants={itemVariants}
//         >
//           Get In Touch
//         </motion.h2>

//         <motion.div
//           className="my-gradient-background rounded-3xl p-8"
//           variants={itemVariants}
//         >
//           <motion.div
//             className="bg-white rounded-2xl p-6"
//             variants={itemVariants}
//           >
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <motion.div variants={itemVariants}>
//                 <label className="block text-gray-700 text-sm font-medium mb-2">
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Enter name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 bg-gray-100 rounded-lg border-none outline-none text-gray-700 placeholder-gray-500"
//                 />
//               </motion.div>

//               <motion.div variants={itemVariants}>
//                 <label className="block text-gray-700 text-sm font-medium mb-2">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Enter email address"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 bg-gray-100 rounded-lg border-none outline-none text-gray-700 placeholder-gray-500"
//                 />
//               </motion.div>

//               <motion.div variants={itemVariants}>
//                 <label className="block text-gray-700 text-sm font-medium mb-2">
//                   Topic
//                 </label>
//                 <input
//                   type="text"
//                   name="topic"
//                   placeholder="Plan"
//                   value={formData.topic}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 bg-gray-100 rounded-lg border-none outline-none text-gray-700 placeholder-gray-500"
//                 />
//               </motion.div>

//               <motion.div variants={itemVariants}>
//                 <label className="block text-gray-700 text-sm font-medium mb-2">
//                   Message
//                 </label>
//                 <textarea
//                   name="message"
//                   placeholder="Enter your message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   rows={4}
//                   className="w-full px-4 py-3 bg-gray-100 rounded-lg border-none outline-none text-gray-700 placeholder-gray-500 resize-none"
//                 />
//               </motion.div>

//               <motion.button
//                 type="submit"
//                 className="w-full bg-black text-white py-3 rounded-full font-medium hover:bg-gray-800 transition-colors"
//                 variants={itemVariants}
//               >
//                 Submit
//               </motion.button>
//             </form>
//           </motion.div>
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// };

// export default ContactSection;


"use client";
import { useState, useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import emailjs from "emailjs-com"; // ✅ import emailjs

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    topic: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // ✅ for success/error messages

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Replace with your actual IDs from EmailJS dashboard
    const serviceID = "your_service_id";
    const templateID = "your_template_id";
    const publicKey = "your_public_key";

    emailjs.send(serviceID, templateID, formData, publicKey).then(
      (result) => {
        console.log("Email sent:", result.text);
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", topic: "", message: "" });
      },
      (error) => {
        console.error("Error sending email:", error.text);
        setStatus("❌ Failed to send message. Please try again.");
      }
    );
  };

  // framer-motion setup
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView, controls]);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div
      ref={ref}
      className="min-h-screen bg-black py-16 px-4 flex items-center justify-center"
    >
      <motion.div
        className="max-w-3xl w-full"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <motion.h2
          className="text-white text-3xl lg:text-4xl font-light text-center mb-12"
          variants={itemVariants}
        >
          Get In Touch
        </motion.h2>

        <motion.div
          className="my-gradient-background rounded-3xl p-8"
          variants={itemVariants}
        >
          <motion.div
            className="bg-white rounded-2xl p-6"
            variants={itemVariants}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div variants={itemVariants}>
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-100 rounded-lg border-none outline-none text-gray-700 placeholder-gray-500"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter email address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-100 rounded-lg border-none outline-none text-gray-700 placeholder-gray-500"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Topic
                </label>
                <input
                  type="text"
                  name="topic"
                  placeholder="Plan"
                  value={formData.topic}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-100 rounded-lg border-none outline-none text-gray-700 placeholder-gray-500"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  placeholder="Enter your message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  required
                  className="w-full px-4 py-3 bg-gray-100 rounded-lg border-none outline-none text-gray-700 placeholder-gray-500 resize-none"
                />
              </motion.div>

              <motion.button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-full font-medium hover:bg-gray-800 transition-colors"
                variants={itemVariants}
              >
                Submit
              </motion.button>
            </form>

            {/* ✅ Status message */}
            {status && (
              <p className="text-center mt-4 text-sm font-medium text-gray-700">
                {status}
              </p>
            )}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ContactSection;
