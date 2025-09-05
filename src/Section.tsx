import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { FaReact, FaCss3Alt, FaNodeJs, FaBootstrap } from "react-icons/fa";
import { SiDjango, SiMongodb, SiRender } from "react-icons/si";

function Section() {
  return (
    <div className="w-full py-20 flex flex-col items-center justify-center gap-8">
      <h4 className="font-instrument text-center italic text-white text-4xl">
        Project Gallery
      </h4>
      <div className="section-cards w-8/10 grid grid-cols-3 gap-4 items-stretch">
        <a
          href="https://manan-vala.github.io/react-plex-movies/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.025 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="card h-full text-white bg-[#222] border-1 border-gray-500 px-3 pt-5 pb-3 rounded-lg flex flex-col gap-2"
          >
            <p className="text-2xl font-inter-tight">Plex-Movies</p>
            <div className="text-lg font-inter-tight flex items-center justify-start gap-2">
              <span className="text-black rounded-sm p-1 px-2 bg-white flex items-center justify-center gap-1">
                <FaReact /> ReactJS
              </span>{" "}
              <span className="text-black rounded-sm p-1 px-2 bg-white flex items-center justify-center gap-1">
                <FaCss3Alt /> Vanilla CSS
              </span>{" "}
            </div>
            <div className="card-img bg-[url(./assets/img.png)] bg-cover bg-top rounded-md min-h-50 mt-4"></div>
          </motion.div>
        </a>

        <a
          href="https://manan-vala.github.io/react-plex-movies/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.025 }}
            transition={{ duration: 0.1, ease: "easeInOut" }}
            className="card h-full text-white bg-[#222] border-1 border-gray-500 px-3 pt-5 pb-3 rounded-lg flex flex-col gap-2"
          >
            <p className="text-2xl font-inter-tight">
              Plex-Movies with Backend
            </p>
            <div className="text-lg font-inter-tight flex items-center justify-start gap-2">
              <span className="text-black rounded-sm p-1 px-2 bg-white flex items-center justify-center gap-1">
                <SiDjango /> Django
              </span>{" "}
              <span className="text-black rounded-sm p-1 px-2 bg-white flex items-center justify-center gap-1">
                EJS templates
              </span>{" "}
              <span className="text-black rounded-sm p-1 px-2 bg-white flex items-center justify-center gap-1">
                <FaCss3Alt /> Vanilla CSS
              </span>{" "}
            </div>
            <div className="card-img bg-[url(./assets/img.png)] bg-cover bg-top rounded-md min-h-50 mt-4"></div>
          </motion.div>
        </a>

        <a
          href="https://backend-project-wanderlust.onrender.com/listings"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.025 }}
            transition={{ duration: 0.1, ease: "easeInOut" }}
            className="card h-full text-white bg-[#222] border-1 border-gray-500 px-3 pt-5 pb-3 rounded-lg flex flex-col gap-2"
          >
            <p className="text-2xl font-inter-tight">WanderLust</p>
            <div className="text-lg font-inter-tight flex items-center justify-start gap-2 flex-wrap">
              <span className="text-black rounded-sm p-1 px-2 bg-white flex items-center justify-center gap-1">
                <FaNodeJs /> NodeJS
              </span>{" "}
              <span className="text-black rounded-sm p-1 px-2 bg-white flex items-center justify-center gap-1">
                ExpressJS
              </span>{" "}
              <span className="text-black rounded-sm p-1 px-2 bg-white flex items-center justify-center gap-1">
                <SiMongodb /> MongoDB
              </span>{" "}
              <span className="text-black rounded-sm p-1 px-2 bg-white flex items-center justify-center gap-1">
                <FaBootstrap /> Bootstrap
              </span>{" "}
              <span className="text-black rounded-sm p-1 px-2 bg-white flex items-center justify-center gap-1">
                <SiRender /> Render
              </span>{" "}
            </div>
            <div className="card-img bg-[url(./assets/img2.png)] bg-cover bg-top rounded-md min-h-50 mt-4"></div>
          </motion.div>
        </a>
      </div>

      <button className="flex px-4 py-3 gap-2 items-center justify-between text-2xl text-center text-white font-montserrat font-medium bg-purple-600  shadow-lg shadow-purple-600/70 p-2 rounded-full ">
        Explore More
        <motion.div
          initial={{ rotate: 45 }}
          whileHover={{ rotate: 0 }}
          transition={{ duration: 0.1, ease: "easeInOut" }}
          className="p-1 bg-white rounded-full"
        >
          <ArrowRight color="#000" />
        </motion.div>
      </button>
    </div>
  );
}

export default Section;
