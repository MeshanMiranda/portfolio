import { DiRedis } from "react-icons/di"
import { FaNodeJs } from "react-icons/fa"
import { RiJavaFill, RiReactjsLine } from "react-icons/ri"
import { SiJavascript, SiMongodb, SiMysql, SiOracle, SiPhp } from "react-icons/si"
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
            className="my-20 text-center text-4xl">Technologies
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
                <RiReactjsLine className="text-7xl text-cyan-400"/>
            </motion.div>
            <motion.div initial="initial"
            animate="animate"
            variants={iconVariants(3)} className="p-4">
                <TbBrandJavascript className="text-7xl text-yellow-400"/>
            </motion.div>
            <motion.div initial="initial"
            animate="animate"
            variants={iconVariants(5)} className="p-4">
                <SiMongodb className="text-7xl text-green-500 "/>
            </motion.div>
            <motion.div initial="initial"
            animate="animate"
            variants={iconVariants(2)} className="p-4">
                <SiMysql className="text-7xl text-blue-500" />
            </motion.div>

            <motion.div initial="initial"
            animate="animate"
            variants={iconVariants(6)} className="p-4">
                <RiJavaFill className="text-7xl text-red-500" />
            </motion.div>

            <motion.div initial="initial"
            animate="animate"
            variants={iconVariants(4)} className="p-4">
                <SiPhp className="text-7xl text-indigo-500" />
            </motion.div>

            <motion.div initial="initial"
            animate="animate"
            variants={iconVariants(4.5)} className="p-4">
            <SiPython className="text-6xl text-yellow-500" />
            </motion.div>

            <motion.div initial="initial"
            animate="animate"
            variants={iconVariants(3.5)} className="p-4">
            <SiAndroidstudio className="text-6xl text-green-600" />
            </motion.div>

            <motion.div initial="initial"
            animate="animate"
            variants={iconVariants(2.5)} className="p-4">
            <SiAdobephotoshop className="text-6xl text-blue-700" />
            </motion.div>

            <motion.div
                initial="initial"
                animate="animate"
                variants={iconVariants(3)}
                className="p-4"
            >
                <FaNodeJs className="text-6xl text-green-600" />
            </motion.div>

            <motion.div
                initial="initial"
                animate="animate"
                variants={iconVariants(3.5)}
                className="p-4"
            >
                <SiTailwindcss className="text-6xl text-cyan-500" />
            </motion.div>

        </motion.div>
    </div>
  )
}

export default Technologies
