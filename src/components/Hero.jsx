import profilePic from "../assets/myphoto.png"
import { HERO_CONTENT } from "../constants"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react";

const containerVariants = {
  hidden: {opacity: 0, x: -100},
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
    }
  }
}

const childVariants = {
  hidden: {opacity: 0, x: -100},
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5
    }
  }
}

const Hero = () => {

  const ProjectDescription = ({ description }) => {
    const [expanded, setExpanded] = useState(false);

    const toggleReadMore = () => setExpanded(!expanded);

    return (
      <div className="mb-4 text-stone-400">
        <AnimatePresence initial={false}>
          <motion.p
            key={expanded ? 'expanded' : 'collapsed'}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={`${expanded ? '' : 'line-clamp-3 md:line-clamp-none'}`}
          >
            {description}
          </motion.p>
        </AnimatePresence>

        <motion.button
          onClick={toggleReadMore}
          className="mt-2 text-blue-500 font-medium md:hidden"
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {expanded ? 'Show less' : 'Read more'}
        </motion.button>
      </div>
    );
  };

  return (
    <div className="pt-[80px] md:pt-[60px]">
      <div className="flex flex-wrap lg:flex-row-reverse">
        <div className="w-full lg:w-1/2">
            <div className="flex justify-center lg:p-8">
                <motion.img src={profilePic} alt="Meshan Miranda" 
                className="border border-stone-900 rounded-3xl" 
                width={650}
                height={650}
                initial={{x: 100, opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{duration: 1, delay: 1.5}}
                />
            </div>
        </div>
        <div className="w-full lg:w-1/2">
            <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex flex-col items-center lg:items-start mt-10">
                <motion.h2 variants={childVariants}className="pb-2 text-4xl tracking-tighter font-semibold lg:text-8xl">Meshan Miranda</motion.h2>
                <motion.span variants={childVariants} className="bg-gradient-to-r from-stone-300 
                to-stone-600 bg-clip-text text-3xl tracking-tighter text-transparent">Software Engineer</motion.span>
                <motion.p variants={childVariants} className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter"><ProjectDescription description={HERO_CONTENT} /></motion.p>
                <motion.a variants={childVariants} href="https://drive.google.com/file/d/1oQ2NSDHumm8GV7ThWraTQNUGFmcovxIz/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                    className="bg-white rounded-full p-4 text-sm
                    text-stone-800 mb-10">Download Resume </motion.a> 
                
            </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Hero