import { CONTACT } from "../constants"
import { motion } from "framer-motion"

const Contact = () => {
  return (
    <div className="border-t border-stone-900 pb-20 overflow-hidden"> {/* <== overflow hidden here */}
      <motion.h2 
  whileInView={{ opacity: 1, y: 0 }}
  initial={{ opacity: 0, y: -60 }}
  transition={{ duration: 0.5 }}
  viewport={{ once: true, amount: 0.2 }}
  className="my-10 text-center text-4xl"
>
  Get in Touch
</motion.h2>



      <div className="text-center tracking-tighter ">
        <motion.p 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          
          {CONTACT.address}
        </motion.p>

        <motion.p 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.phoneNo}
        </motion.p>

        <motion.a 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          href={`mailto:${CONTACT.email}`}
          className="border-b inline-block mt-4"
        >{CONTACT.email}</motion.a>
      </div>
    </div>
  )
}

export default Contact
