import React from 'react'
import { Helmet } from "react-helmet";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fetchProjectData } from '../FetchData/fetchProjectData';
import Filter from '../Components/Filters/Filter'
import ProjectCard from '../Components/Project/ProjectCard';
import { filters } from '../Globals/Variables';

const Work = () => {

  const [ projectsData, setProjectsData ] = useState(null);
  const [ filter, setFilter ]= useState('All');

  useEffect(() => {
    const getProjectsData = async () => {
      let data = await fetchProjectData( 'project_categories', true );
      filterProjects(data);
    }
    getProjectsData();
    const filterProjects = ( data ) => {
      switch (filter) {
        case 'Featured':
          setProjectsData( data.filter(( project ) =>  project.categories.includes(9) ) );
          break;
        case 'WordPress':
          setProjectsData( data.filter(( project ) =>  project.categories.includes(10) ) );
          break;
        case 'JavaScript':
          setProjectsData( data.filter(( project ) =>  project.categories.includes(11) ) );
          break;
        case 'Fun':
          setProjectsData( data.filter(( project ) =>  project.categories.includes(12) ) );
          break;
        default:
          setProjectsData(data);
      }
    }
  }, [filter])
  // console.log(projectsData);

  const renderProjects = () => {
    return (
      projectsData.map(( project, i ) => <ProjectCard project={project} key={i}/>)
    )
  }

  const renderFilters = () => {
    return ( 
      filters.map(( filter, i ) => <Filter name={filter} setFilter={setFilter} key={i} index={i}/>)
    )
  }

  if ( !projectsData ) {
    return;
  }

  return (
    <div className='work'>
      <Helmet>
        <title>Dennis Kim | Projects</title>
        <meta name="description" content="The projects page for Dennis Kim's Portfolio."/>
        <meta name="keywords" content="Projects, Works, Web Developer, Front-End, Development, Web Development, Jr. Developer, HTML, CSS, JavaScript, WordPress, Portfolio" />
      </Helmet>
      <div className="intro">
        <h1 className="heading">
          Projects
        </h1>
        <p className="text">
          An assortment of projects categorized into various topics. The list is updated throughout the year, so stay tuned for more!
        </p>
      </div>
      <div className="filters">
        {
          renderFilters()
        }
      </div>
      <div 
        className="works-wrapper">
        {
          renderProjects()
        }
      </div>
    </div>
  )
}

export default Work