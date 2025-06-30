import { FaNodeJs, FaHtml5, FaCss3Alt } from "react-icons/fa"
import { RiJavaFill, RiReactjsLine } from "react-icons/ri"
import { SiMongodb, SiMysql, SiPhp, SiCplusplus, SiCsharp  } from "react-icons/si"
import { TbBrandJavascript } from "react-icons/tb"
import { SiPython, SiAndroidstudio, SiAdobephotoshop, SiTailwindcss  } from "react-icons/si"
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
    <div className="pt-[5px]">
        <motion.h2 
            whileInView={{opacity: 1, y: 0}}
            initial={{opacity: 0, y: -100}}
            transition={{duration: 1.5}}
            className="text-center text-4xl ">Skills
            <h3 className="text-center text-2xl mt-4 pt-4 border-t border-stone-800 overflow-hidden">Languages</h3>
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
                className="p-4 text-center"
            >
                <FaHtml5 className="text-7xl text-orange-600" />
                <p>HTML</p>
            </motion.div>

             <motion.div
                initial="initial"
                animate="animate"
                variants={iconVariants(2.5)}
                className="p-4 text-center"
            >
                <FaCss3Alt className="text-7xl text-blue-600" />
                <p>CSS</p>
            </motion.div>

            <motion.div
                initial="initial"
                animate="animate"
                variants={iconVariants(3)}
                className="p-4 text-center"
            >
                <SiCplusplus className="text-7xl text-blue-400" />
                <p>C++</p>
            </motion.div>

            <motion.div
                initial="initial"
                animate="animate"
                variants={iconVariants(3.5)}
                className="p-4 text-center"
                >
                <SiCsharp className="text-6xl text-purple-600" />
                <p>C#</p>
            </motion.div>

            <motion.div initial="initial"
            animate="animate"
            variants={iconVariants(3)} className="p-4">
                <TbBrandJavascript className="text-7xl text-yellow-400"/><p className="flex flex-wrap items-center justify-center">JavaScript</p>
            </motion.div>

            <motion.div initial="initial"
            animate="animate"
            variants={iconVariants(6)} className="p-4">
                <RiJavaFill className="text-7xl text-red-500" /><p className="flex flex-wrap items-center justify-center">Java</p>
            </motion.div>

            <motion.div initial="initial"
            animate="animate"
            variants={iconVariants(4)} className="p-4">
                <SiPhp className="text-7xl text-indigo-500" /><p className="flex flex-wrap items-center justify-center">PHP</p>
            </motion.div>

            <motion.div initial="initial"
            animate="animate"
            variants={iconVariants(4.5)} className="p-4">
            <SiPython className="text-6xl text-yellow-500" /><p className="flex flex-wrap items-center justify-center">Python</p>
            </motion.div>
        </motion.div>
        <motion.h2 
            whileInView={{opacity: 1, y: 0}}
            initial={{opacity: 0, y: -100}}
            transition={{duration: 1.5}}
            className="text-center text-2xl mt-4 pt-4 border-t border-stone-800 overflow-hidden">Frameworks & Libraries
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
            >
                <RiReactjsLine className="text-7xl text-cyan-400"/><p className="flex flex-wrap items-center justify-center">React</p>
            </motion.div>
            <motion.div initial="initial"
            animate="animate"
            variants={iconVariants(3)} className="p-4">
                <TbBrandJavascript className="text-7xl text-yellow-400"/><p className="flex flex-wrap items-center justify-center">JavaScript</p>
            </motion.div>
            <motion.div initial="initial"
            animate="animate"
            variants={iconVariants(5)} className="p-4">
                <SiMongodb className="text-7xl text-green-500 "/><p className="flex flex-wrap items-center justify-center">MongoDB</p>
            </motion.div>
            <motion.div initial="initial"
            animate="animate"
            variants={iconVariants(2)} className="p-4">
                <SiMysql className="text-7xl text-blue-500" /><p className="flex flex-wrap items-center justify-center">MySQL</p>
            </motion.div>

            <motion.div initial="initial"
            animate="animate"
            variants={iconVariants(6)} className="p-4">
                <RiJavaFill className="text-7xl text-red-500" /><p className="flex flex-wrap items-center justify-center">Java</p>
            </motion.div>

            <motion.div initial="initial"
            animate="animate"
            variants={iconVariants(4)} className="p-4">
                <SiPhp className="text-7xl text-indigo-500" /><p className="flex flex-wrap items-center justify-center">PHP</p>
            </motion.div>

            <motion.div initial="initial"
            animate="animate"
            variants={iconVariants(4.5)} className="p-4">
            <SiPython className="text-6xl text-yellow-500" /><p className="flex flex-wrap items-center justify-center">Python</p>
            </motion.div>

            <motion.div initial="initial"
            animate="animate"
            variants={iconVariants(3.5)} className="p-4">
            <SiAndroidstudio className="text-6xl text-green-600" /><p className="flex flex-wrap items-center justify-center">Android</p>
            </motion.div>

            <motion.div initial="initial"
            animate="animate"
            variants={iconVariants(2.5)} className="p-4">
            <SiAdobephotoshop className="text-6xl text-blue-700" /><p className="flex flex-wrap items-center justify-center">Photoshop</p>
            </motion.div>

            <motion.div
                initial="initial"
                animate="animate"
                variants={iconVariants(3)}
                className="p-4"
            >
                <FaNodeJs className="text-6xl text-green-600" /><p className="flex flex-wrap items-center justify-center">Node.Js</p>
            </motion.div>

            <motion.div
                initial="initial"
                animate="animate"
                variants={iconVariants(3.5)}
                className="p-4"
            >
                <SiTailwindcss className="text-6xl text-cyan-500" /><p className="flex flex-wrap items-center justify-center">Tailwind</p>
            </motion.div>
        </motion.div>    
    </div>
  )
}

export default Technologies
