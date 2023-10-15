import React from 'react'
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

const Banner = ({ homePageData }) => {
  const { 
    title,
    intro,
    banner_image
  } = homePageData;

  const banner = {
    hidden: { y: '100px', opacity: 0 },
    show: { y: '0px', 
            opacity: 1, 
            transition: { 
                            delay: .15,
                            x: { type: 'spring', stiffness: 50 },
                            default: { duration: 1 }  }},
};

  return (
    <motion.div 
      variants={banner}
      initial='hidden'
      animate='show'
      className='banner'>
        <img src={ banner_image.sizes.large } alt={ banner_image.alt } className='banner-img'/>
        <div className="banner-info">
            <h1 className="banner-title">
                { title }
            </h1>
            <p className="banner-intro">
              { intro }
            </p>
            <div className="banner-cta">
              <NavLink to={'/work'} className='btn-primary'><span>View My Work</span></NavLink>
            </div>
        </div>
    </motion.div>
  )
}

export default Banner