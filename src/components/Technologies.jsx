import { FaNodeJs, FaHtml5, FaCss3Alt, FaCode,FaBolt, FaBootstrap,FaJava  } from "react-icons/fa"
import { RiJavaFill, RiReactjsLine } from "react-icons/ri"
import { SiMongodb, SiMysql, SiPhp, SiCplusplus, SiJquery, SiExpress,SiAdobeillustrator,SiGithub } from "react-icons/si"
import { TbBrandJavascript } from "react-icons/tb"
import { SiPython, SiAndroidstudio, SiAdobephotoshop, SiTailwindcss } from "react-icons/si"
import { motion } from "framer-motion"

const iconVariants = (duration) => ({
    initial: {y: -10},
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
})

const Technologies = () => {
  return (
    <div className="pt-[60px]">

        {/* Skills - Languages */}
        <motion.h2 
            whileInView={{opacity: 1, y: 0}}
            initial={{opacity: 0, y: -100}}
            transition={{duration: 1.5}}
            className="text-center text-4xl ">Skills
            <h3 className="text-center text-2xl mt-8 pt-4 border-t border-stone-800 overflow-hidden pb-2 md:pb-0">Languages</h3>
        </motion.h2>
        <motion.div 
        whileInView={{opacity: 1, x: 0}}
        initial={{opacity: 0, x: -100}}
        transition={{duration: 1.5}}
        className="flex flex-wrap items-center justify-center gap-4">
            <motion.div
                initial="initial"
                animate="animate"
                variants={iconVariants(2)}
                className="p-2 md:p-4 flex flex-col items-center justify-center text-center"
            >
                <FaHtml5 className="text-4xl md:text-7xl text-orange-600" />
                <p>HTML</p>
            </motion.div>

             <motion.div
                initial="initial"
                animate="animate"
                variants={iconVariants(2.5)}
                className="p-2 md:p-4 flex flex-col items-center justify-center text-center"
            >
                <FaCss3Alt className="text-4xl md:text-7xl text-blue-600" />
                <p>CSS</p>
            </motion.div>

            <motion.div
                initial="initial"
                animate="animate"
                variants={iconVariants(3)}
                className="p-2 md:p-4 flex flex-col items-center justify-center text-center"
            >
                <SiCplusplus className="text-4xl md:text-7xl text-blue-400" />
                <p>C++</p>
            </motion.div>

            <motion.div
                initial="initial"
                animate="animate"
                variants={iconVariants(3.5)}
                className="p-2 md:p-4 flex flex-col items-center justify-center text-center"
            >
                <FaCode  className="text-4xl md:text-7xl text-purple-600" />
                <p>C#</p>
            </motion.div>

            <motion.div initial="initial"
            animate="animate"
            variants={iconVariants(3)} className="p-2 md:p-4 flex flex-col items-center justify-center text-center">
                <TbBrandJavascript className="text-4xl md:text-7xl text-yellow-400"/><p className="flex flex-wrap items-center justify-center">JavaScript</p>
            </motion.div>

            <motion.div initial="initial"
            animate="animate"
            variants={iconVariants(6)} className="p-2 md:p-4 flex flex-col items-center justify-center text-center">
                <RiJavaFill className="text-4xl md:text-7xl text-red-500" /><p className="flex flex-wrap items-center justify-center">Java</p>
            </motion.div>

            <motion.div initial="initial"
            animate="animate"
            variants={iconVariants(4)} className="p-2 md:p-4 flex flex-col items-center justify-center text-center">
                <SiPhp className="text-4xl md:text-7xl text-indigo-500" /><p className="flex flex-wrap items-center justify-center">PHP</p>
            </motion.div>

            <motion.div initial="initial"
            animate="animate"
            variants={iconVariants(4.5)} className="p-2 md:p-4 flex flex-col items-center justify-center text-center">
            <SiPython className="text-3xl md:text-6xl text-yellow-500" /><p className="flex flex-wrap items-center justify-center">Python</p>
            </motion.div>
        </motion.div>


        {/* Frameworks & Libraries */}
        <motion.h2 
            whileInView={{opacity: 1, y: 0}}
            initial={{opacity: 0, y: -100}}
            transition={{duration: 1.5}}
            className="text-center text-2xl mt-8 pt-4 border-t border-stone-800 overflow-hidden pb-2 md:pb-0">Frameworks & Libraries
        </motion.h2>
        <motion.div 
        whileInView={{opacity: 1, x: 0}}
        initial={{opacity: 0, x: -100}}
        transition={{duration: 1.5}}
        className="flex flex-wrap items-center justify-center gap-4">
            <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(2.5)}
            className="p-2 md:p-4 flex flex-col items-center justify-center text-center"
            >
                <RiReactjsLine className="text-4xl md:text-7xl text-cyan-400"/><p className="flex flex-wrap items-center justify-center">React</p>
            </motion.div>

            <motion.div
                initial="initial"
                animate="animate"
                variants={iconVariants(3.4)}
                className="p-2 md:p-4 flex flex-col items-center justify-center text-center"
            >
                <FaBootstrap className="text-4xl md:text-7xl text-indigo-600" />
                <p>Bootstrap</p>
            </motion.div>

            <motion.div
                initial="initial"
                animate="animate"
                variants={iconVariants(2.8)}
                className="p-2 md:p-4 flex flex-col items-center justify-center text-center"
            >
                <FaBolt className="text-4xl md:text-7xl text-yellow-500" />
                <p>Ajax</p>
            </motion.div>

             <motion.div
                initial="initial"
                animate="animate"
                variants={iconVariants(3)}
                className="p-2 md:p-4 flex flex-col items-center justify-center text-center"
            >
                <SiJquery className="text-4xl md:text-7xl text-blue-500" />
                <p>jQuery</p>
            </motion.div>

            <motion.div
                initial="initial"
                animate="animate"
                variants={iconVariants(3.2)}
                className="p-2 md:p-4 flex flex-col items-center justify-center text-center"
            >
                <SiExpress className="text-4xl md:text-7xl text-gray-300" />
                <p>Express.js</p>
            </motion.div>

            <motion.div
                initial="initial"
                animate="animate"
                variants={iconVariants(3)}
                className="p-2 md:p-4 flex flex-col items-center justify-center text-center"
            >
                <FaNodeJs className="text-4xl md:text-7xl text-green-600" /><p className="flex flex-wrap items-center justify-center">Node.Js</p>
            </motion.div>

            <motion.div
                initial="initial"
                animate="animate"
                variants={iconVariants(3.5)}
                className="p-2 md:p-4 flex flex-col items-center justify-center text-center"
            >
                <SiTailwindcss className="text-4xl md:text-7xl text-cyan-500" /><p className="flex flex-wrap items-center justify-center">Tailwind</p>
            </motion.div>

            <motion.div
                initial="initial"
                animate="animate"
                variants={iconVariants(3.6)}
                className="p-2 md:p-4 hidden md:flex flex flex-col items-center justify-center text-center"
            >
                <FaJava className="text-4xl md:text-7xl text-orange-600" />
                <p>Java Swing</p>
            </motion.div>
        </motion.div>  

        {/* Tools */}
        <motion.h2 
            whileInView={{opacity: 1, y: 0}}
            initial={{opacity: 0, y: -100}}
            transition={{duration: 1.5}}
            className="text-center text-2xl mt-8 pt-4 border-t border-stone-800 overflow-hidden ">Tools
        </motion.h2>
        <motion.div 
        whileInView={{opacity: 1, x: 0}}
        initial={{opacity: 0, x: -100}}
        transition={{duration: 1.5}}
        className="flex flex-wrap items-center justify-center gap-4">

            <motion.div initial="initial"
            animate="animate"
            variants={iconVariants(5)} className="p-2 md:p-4 flex flex-col items-center justify-center text-center">
                <SiMongodb className="text-4xl md:text-7xl text-green-500 "/><p className="flex flex-wrap items-center justify-center">MongoDB</p>
            </motion.div>

            <motion.div initial="initial"
            animate="animate"
            variants={iconVariants(2)} className="p-2 md:p-4 flex flex-col items-center justify-center text-center">
                <SiMysql className="text-4xl md:text-7xl text-blue-500" /><p className="flex flex-wrap items-center justify-center">MySQL</p>
            </motion.div>
    
            <motion.div initial="initial"
            animate="animate"
            variants={iconVariants(3.5)} className="p-2 md:p-4 flex flex-col items-center justify-center text-center">
            <SiAndroidstudio className="text-4xl md:text-7xl text-green-600" /><p className="flex flex-wrap items-center justify-center">Android Studio</p>
            </motion.div>

            <motion.div initial="initial"
            animate="animate"
            variants={iconVariants(2.5)} className="p-2 md:p-4 flex flex-col items-center justify-center text-center">
            <SiAdobephotoshop className="text-4xl md:text-6xl text-blue-700" /><p className="flex flex-wrap items-center justify-center">Photoshop</p>
            </motion.div>

             <motion.div
                initial="initial"
                animate="animate"
                variants={iconVariants(3)}
                className="p-2 md:p-4 flex flex-col items-center justify-center text-center"
            >
                <SiAdobeillustrator className="text-4xl md:text-6xl text-orange-500" />
                <p>Illustrator</p>
            </motion.div>

            <motion.div
                initial="initial"
                animate="animate"
                variants={iconVariants(3.2)}
                className="p-2 md:p-4 flex flex-col items-center justify-center text-center"
            >
                <SiGithub className="text-4xl md:text-6xl text-gray-800 dark:text-white" />
                <p>GitHub</p>
            </motion.div>

            <motion.div
                initial="initial"
                animate="animate"
                variants={iconVariants(3.4)}
                className="p-4 hidden md:flex flex flex-col items-center justify-center text-center"
                >
                <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
                    alt="VS Code"
                    className="w-14 h-14"
                />
                <p>VS Code</p>
                </motion.div>
        </motion.div>
    </div>
  )
}

export default Technologies
