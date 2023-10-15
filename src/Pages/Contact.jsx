import React from 'react';
import { Helmet } from "react-helmet";
import { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { fetchPageData } from '../FetchData/fetchPageData';
import { HiOutlineMail } from "react-icons/hi";
import { IoMail } from "react-icons/io5";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

const Contact = () => {

  const [ contactPageData, setContactPageData ] = useState(null);

  useEffect(() => {
    const getContactPageData = async () => {
        let data = await fetchPageData(65);
        setContactPageData(data.acf);
    }
    getContactPageData();
  }, [])

  const socialContainer = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.28
      }
    }
  };
  
  const socialIcon = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        x: { type: 'spring', stiffness: 100 },
        default: { duration: .7 }
      }
    },
  };

  if ( !contactPageData ) {
    return;
  }

  return (
    <div className='contact'>
      <Helmet>
        <title>Dennis Kim | Contact</title>
        <meta name="description" content="The contact page for Dennis Kim's Portfolio."/>
        <meta name="keywords" content="Contact, Linkedin, GitHub, Email, Web Developer, Front-End, Development, Web Development, Jr. Developer, HTML, CSS, JavaScript, WordPress, Portfolio" />
      </Helmet>
      <h1 className="contact-heading">
        { contactPageData.contact_heading }
      </h1>
      <motion.div
        variants={socialContainer}
        initial="hidden"
        animate="visible"
        className="social-links">
        <motion.a 
          variants={socialIcon} 
          whileHover={{ scale: 1.2, rotate: 20, transition: { duration: .2 }} }
          whileTap={{ scale: 1, transition: { duration: .05 } }}
          href={`mailto:${ contactPageData.contact_links[0].link }`} target='_blank' rel="noreferrer" title={ contactPageData.contact_links[0].name }>
            <HiOutlineMail className='email'/>
        </motion.a>
        <motion.a 
          variants={socialIcon} 
          whileHover={{ scale: 1.2, rotate: 20, transition: { duration: .2 }} }
          whileTap={{ scale: 1, transition: { duration: .05 } }}
          href={ contactPageData.contact_links[1].link } target='_blank' rel="noreferrer" title={ contactPageData.contact_links[1].name }>
            <BsGithub />
          </motion.a>
        <motion.a 
          variants={socialIcon} 
          whileHover={{ scale: 1.2, rotate: 20, transition: { duration: .2 }} }
          whileTap={{ scale: 1, transition: { duration: .05 } }}
          href={ contactPageData.contact_links[2].link } target='_blank' rel="noreferrer" title={ contactPageData.contact_links[2].name }>
          <BsLinkedin />
        </motion.a>
      </motion.div>
    </div>
  )
}

export default Contact