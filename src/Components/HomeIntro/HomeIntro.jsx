import React from 'react'

const HomeIntro = ({ homePageData }) => {
  const { 
    text_banner_heading,
    text_banner
  } = homePageData;
  return (
    <div className='home-intro'>
        <h2 className="intro-title">
            { text_banner_heading }
        </h2>
        <p className="intro-text">
            { text_banner }
        </p>
    </div>
  )
}

export default HomeIntro