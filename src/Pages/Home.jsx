import React from 'react'
import { Helmet } from "react-helmet";
import { useState, useEffect } from 'react';
import { fetchPageData } from '../FetchData/fetchPageData';
import Banner from '../Components/Banner/Banner'
import FeaturedProjects from '../Components/FeaturedProjects/FeaturedProjects'
import HomeIntro from '../Components/HomeIntro/HomeIntro'

const Home = () => {

  const [ homePageData, setHomePageData ] = useState(null);
  useEffect(() => {
    const getPageData = async () => {
      let data = await fetchPageData(9);
      setHomePageData(data.acf);
    }
    getPageData();
  }, []);
  // console.log(homePageData);
  if ( !homePageData ) {
    return;
  }
  
  return (
    <div className='home'>
      <Helmet>
        <title>Dennis Kim | Web Developer</title>
        <meta name="description" content="The home page for Dennis Kim's Portfolio, a Front End Web Developer based out of Vancouver, BC. He enjoys development as well as design."/>
        <meta name="keywords" content="Home Page, Front End Web Developer, Web Developer, Front-End, Development, Web Development, Jr. Developer, HTML, CSS, JavaScript, WordPress, Portfolio" />
      </Helmet>
      <Banner homePageData={homePageData}/>
      <HomeIntro homePageData={homePageData}/>
      <FeaturedProjects />
    </div>
  )
}

export default Home