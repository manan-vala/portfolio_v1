import { useState } from "react";
import "./Hero.css";
import { Mail, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

function Hero() {
  const [isScrolling, setIsScrolling] = useState(false);

  const handleViewWork = () => {
    // trigger the button animation; when it completes we'll scroll
    setIsScrolling(true);
  };

  const onBtnAnimationComplete = () => {
    if (!isScrolling) return;
    const target = document.getElementById("projects");
    if (target) {
      // native smooth scroll
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    // reset state so button can be clicked again later
    setIsScrolling(false);
  };

  return (
    <div className="hero w-full min-h-screen flex flex-col items-center justify-center">
      <div className="navbar w-9/10 max-md:hidden mt-5 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          viewport={{ once: true }}
          className="navbar-item-1 px-4 py-2 flex items-center justify-between gap-3 font-manrope text-white bg-gray-600 rounded-full"
        >
          <div className="light w-2 h-2 rounded-full bg-green-400 shadow-[0_0_8px_2px_rgba(74,222,128,0.6)]" />
          Slots open for May 2025
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          viewport={{ once: true }}
          className="navbar-item-2 px-4 py-2  flex items-center justify-between gap-3 font-manrope text-white bg-gray-600 rounded-full"
        >
          <Mail />
          mananvala15@gmail.com
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
        viewport={{ once: true }}
        className="hero-body w-7/10 mb-10 flex-1 flex flex-col items-center justify-center gap-7"
      >
        <div className="profile-img w-35 h-35 bg-[url(./assets/img3.jpg)] bg-cover bg-center rounded-full" />
        <h1 className="font-instrument text-4xl md:text-7xl text-gray-400 text-center">
          I'm <i className="text-white">Manan</i>, a Full-Stack{" "}
          <i className="text-white">Developer</i> crafting{" "}
          <i className="text-white">Scalable</i> and{" "}
          <i className="text-white">Modern Web</i> experiences.
        </h1>
        <h3 className="font-manrope md:text-[1.75rem] max-md:text-xl text-gray-400 text-center">
          If you are looking for transforming your ideas into reality, Lets
          Connect!
        </h3>
        <motion.button
          onClick={handleViewWork}
          // animate a quick micro-interaction when clicked, then scroll onAnimationComplete
          animate={isScrolling ? { scale: [1, 0.98, 1], y: [0, -6, 0] } : {}}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          onAnimationComplete={onBtnAnimationComplete}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="flex px-4 pl-6 py-3 gap-2 items-center justify-between text-2xl max-md:text-xl text-center text-white font-montserrat font-medium bg-purple-600  shadow-lg shadow-purple-600/70 p-2 rounded-full "
        >
          View my work
          <motion.div
            initial={{ rotate: 45 }}
            whileHover={{ rotate: 0 }}
            transition={{ duration: 0.1, ease: "easeInOut" }}
            className="p-1 bg-white rounded-full"
          >
            <ArrowRight color="#000" />
          </motion.div>
        </motion.button>
      </motion.div>
    </div>
  );
}

export default Hero;
