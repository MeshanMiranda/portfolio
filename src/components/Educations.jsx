import { EDUCATIONS } from "../constants"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react";

const Educations = () => {

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
    <div className="pb-4 pt-[60px]">
      <motion.h2 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="mb-16 text-center text-4xl"
      >
        Educations
      </motion.h2>

      <div>
        {EDUCATIONS.map((education, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <p className="mb-2 text-sm text-stone-400">
                {education.year}
              </p>
            </motion.div>

            <motion.div 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h3 className="mb-2 font-semibold text-lg">
                {education.title} -{" "}
                <span className="text-sm text-stone-500">{education.university}</span>
              </h3>
              <p className="mb-2 text-stone-400">CGPA: {education.cgpa}</p>
              <ProjectDescription description={education.description} />
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Educations
