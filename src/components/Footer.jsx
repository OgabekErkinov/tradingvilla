import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className='w-full h-[100px] flex justify-center bg-black'>
      <div className='w-[90%] h-full flex justify-center items-center'>
        <motion.span
          style={{
            background: "linear-gradient(270deg, #ff0000, #00ff00, #0000ff, #ff0000)",
            backgroundSize: "600% 600%",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: "bold"
          }}
          animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          Copyright © {new Date().getFullYear()} Ogabek Erkinov Co., Ltd. All rights reserved. Design: TemplateMo
        </motion.span>
      </div>
    </div>
  );
};

export default Footer;
