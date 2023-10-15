import React from 'react'
import { useState, useEffect } from 'react';
import { fetchProjectData } from '../../FetchData/fetchProjectData';
import ProjectCard from '../Project/ProjectCard'

const FeaturedProjects = () => {

  const [ featuredProjects, setFeaturedProjects ] = useState(null);

  useEffect(() => {
    const featuredProjects = async () => {
      let data = await fetchProjectData( 'project_categories', true );
      setFeaturedProjects(data.filter(project => project.project_category[0] === 5))
    }
    featuredProjects();
  }, []);
  // console.log(featuredProjects);

  const renderFeaturedProjects = () => {
    return (
      featuredProjects.map(( featuredProject, i ) => <ProjectCard project={featuredProject} key={i}/>)
    )
  }
  if ( !featuredProjects ) {
    return;
  }

  return (
    <div className='featured-projects'>
        <h2 className="heading">
          Featured Projects
        </h2>
        {
          renderFeaturedProjects()
        }
    </div>
  )
}

export default FeaturedProjects