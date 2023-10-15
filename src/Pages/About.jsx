import React from 'react'
import { Helmet } from "react-helmet";
import { useState, useEffect } from 'react';
import parse from 'html-react-parser';
import { motion } from 'framer-motion';
import { fetchPageData } from '../FetchData/fetchPageData';
import Tool from '../Components/Toolkit/Tool';

const About = () => {
  const [ aboutPageData, setAboutPageData ] = useState(null);

  useEffect(() => {
    const getAboutPageData = async () => {
      let data = await fetchPageData(24);
      setAboutPageData(data.acf);
    }
    getAboutPageData();
  }, [])
  // console.log(aboutPageData);

  const toolkit = [ 'HTML5', 'CSS3', 'JavaScript', 'Sass', 'React' ];
  const renderToolkit = () => {
    return (
      aboutPageData.toolkit.map(( tool, i ) => <Tool tool={tool} key={i} />)
    )
  }

  const aboutBio = {
    hidden: { y: '-55px', opacity: 0 },
    show: { y: '0px', 
            opacity: 1, 
            transition: { 
                            delay: 0,
                            x: { type: 'spring', stiffness: 50 },
                            default: { duration: 1.3 }  }},
  }
  const aboutToolkit = {
    hidden: { y: '100px', opacity: 0 },
    show: { y: '0px', 
            opacity: 1, 
            transition: { 
                            delay: .5,
                            x: { type: 'spring', stiffness: 50 },
                            default: { duration: 1 }  }},
  }
  
  if ( !aboutPageData ) {
    return;
  }

  let parsedText = parse(aboutPageData.biography);

  return (
    <div className='about'>
       <Helmet>
        <title>Dennis Kim | About</title>
        <meta name="description" content="The about page for Dennis Kim's Portfolio."/>
        <meta name="keywords" content="About, Web Developer, Front-End, Development, Web Development, Jr. Developer, HTML, CSS, JavaScript, WordPress, Portfolio" />
      </Helmet>
      <motion.div 
        variants={aboutBio}
        initial='hidden'
        whileInView="show"
        viewport={{ once: true }}
        className="intro">
        <h1 className="heading">
          { aboutPageData.about_heading }
        </h1>
        { parsedText }
      </motion.div>
      <motion.div 
        variants={aboutToolkit}
        initial='hidden'
        whileInView="show"
        viewport={{ once: true }}
        className="toolkit">
        <h2 className="toolkit-heading">
          { aboutPageData.toolkit_heading }
        </h2>
        <ul className="tools">
          { renderToolkit() }
        </ul>
      </motion.div>
    </div>
  )
}

export default About