import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { FaReact, FaCss3Alt, FaNodeJs, FaBootstrap } from "react-icons/fa";
import { SiDjango, SiMongodb, SiRender } from "react-icons/si";

function Section() {
  return (
    <div
      id="projects"
      className="w-full py-20 flex flex-col items-center justify-center gap-8"
    >
      <h4 className="font-instrument text-center italic text-white text-5xl max-md:text-4xl">
        Project Gallery
      </h4>
      <div className="section-cards w-8/10 grid grid-cols-3 max-md:grid-cols-1 max-lg:grid-cols-2 gap-4 max-md:gap-6 items-stretch">
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          viewport={{ once: true }}
          href="https://manan-vala.github.io/react-plex-movies/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.025 }}
            transition={{ duration: 0.1, ease: "easeInOut" }}
            className="card h-full text-white bg-[#222] rounded-lg"
          >
            <div className="card-img top-0 bg-[url(./assets/img.png)] bg-cover bg-top rounded-t-md min-h-55 max-md:min-h-45"></div>
            <div className="card-body p-4 flex flex-col gap-2">
              <p className="text-2xl max-md:text-xl font-inter-tight">
                Plex-Movies
              </p>
              <div className="text-lg max-md:text-md font-inter-tight flex flex-wrap items-center justify-start gap-2">
                <span className="text-black rounded-sm p-1 px-2 bg-white flex items-center justify-center gap-1">
                  <FaReact /> ReactJS
                </span>{" "}
                <span className="text-black rounded-sm p-1 px-2 bg-white flex items-center justify-center gap-1">
                  <FaCss3Alt /> Vanilla CSS
                </span>{" "}
              </div>
            </div>
          </motion.div>
        </motion.a>

        <motion.a
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          viewport={{ once: true }}
          href="https://manan-vala.github.io/react-plex-movies/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.025 }}
            transition={{ duration: 0.1, ease: "easeInOut" }}
            className="card h-full text-white bg-[#222] rounded-lg"
          >
            <div className="card-img top-0 bg-[url(./assets/img.png)] bg-cover bg-top rounded-t-md min-h-55 max-md:min-h-45"></div>
            <div className="card-body p-4 flex flex-col gap-2">
              <p className="text-2xl max-md:text-xl font-inter-tight">
                Plex-Movies with Backend
              </p>
              <div className="text-lg max-md:text-md font-inter-tight flex flex-wrap items-center justify-start gap-2">
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
            </div>
          </motion.div>
        </motion.a>

        <motion.a
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          viewport={{ once: true }}
          href="https://backend-project-wanderlust.onrender.com/listings"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.025 }}
            transition={{ duration: 0.1, ease: "easeInOut" }}
            className="card h-full text-white bg-[#222] rounded-lg"
          >
            <div className="card-img top-0 bg-[url(./assets/img2.png)] bg-cover bg-top rounded-t-md min-h-55 max-md:min-h-45"></div>
            <div className="card-body p-4 flex flex-col gap-2">
              <p className="text-2xl max-md:text-xl font-inter-tight">
                WanderLust
              </p>
              <div className="text-lg max-md:text-md font-inter-tight flex flex-wrap items-center justify-start gap-2">
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
            </div>
          </motion.div>
        </motion.a>
      </div>

      <motion.button
        transition={{ duration: 0.3, ease: "easeInOut" }}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        className="flex px-4 pl-6 py-3 gap-2 items-center justify-between text-2xl max-md:text-xl text-center text-white font-montserrat font-medium bg-purple-600  shadow-lg shadow-purple-600/70 p-2 rounded-full "
      >
        Explore more
        <motion.div
          initial={{ rotate: 45 }}
          whileHover={{ rotate: 0 }}
          transition={{ duration: 0.1, ease: "easeInOut" }}
          className="p-1 bg-white rounded-full"
        >
          <ArrowRight color="#000" />
        </motion.div>
      </motion.button>
    </div>
  );
}

export default Section;
