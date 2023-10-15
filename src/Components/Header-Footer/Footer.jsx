import React from 'react'
import { motion } from "framer-motion";
import { getYear } from '../../Utilities/getDates';
import { HiOutlineMail } from "react-icons/hi";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer-wrapper">
        <div className="social-media-wrapper">
          <motion.a
            whileHover={{ scale: 1.15, rotate: 20, transition: { duration: .2 }} }
            href="mailto:denniskim.dev@outlook.com" target='_blank' rel="noreferrer">
            <HiOutlineMail className='email'/>
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.15, rotate: 20, transition: { duration: .2 }} }
            href="https://github.com/dennisk94" target='_blank' rel="noreferrer">
            <BsGithub />
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.15, rotate: 20, transition: { duration: .2 }} }
            href="https://www.linkedin.com/in/dennis-kim-bk/" target='_blank' rel="noreferrer">
            <BsLinkedin />
          </motion.a>
        </div>
        <div className="copyright">
          <p className="copyright-text">
            &copy; { getYear() } || Dennis Kim
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer