import React from 'react'
import { Helmet } from "react-helmet";
import { useState, useEffect } from 'react';
import { Link, useParams, NavLink } from 'react-router-dom';
import { fetchProjectData } from '../FetchData/fetchProjectData';
import { formatProjectName } from '../Utilities/formatProjectName';
import CarouselContainer from '../Components/Carousel/CarouselContainer';
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";

const SingleProject = () => {

  const { slug } = useParams();
  const [ projectData, setProjectData ] = useState(null);

  useEffect(() => {
    const getProjectData = async () => {
        let data = await fetchProjectData( 'slug', slug, false );
        setProjectData(data[0]);
    }
    getProjectData();
}, [slug])
// console.log(projectData);
  const renderTools = () => {
    return (
      projectData.acf.toolkit.map(( tool, i ) => <li key={i}>{ tool.tool }</li>)
    )
  }
  const renderRoles = () => {
    return (
      projectData.acf.roles.map(( role, i ) => <li key={i}>{ role.role }</li>)
    )
  }
  const handleProjectLink = () => {
    window.scroll(0,0);
  }

  if ( !projectData ) {
    return;
  }

  return (
    <>
      <section className='single-project'>
        <Helmet>
          <title>Dennis Kim | { formatProjectName(slug) }</title>
          <meta name="description" content={`Details for ${ formatProjectName(slug) } by Dennis Kim`}/>
          <meta name="keywords" content="Single Project Page, Single Project, Project Detail, Project Overview, Web Developer, Front-End, Development, Web Development, Jr. Developer, HTML, CSS, JavaScript, WordPress, Portfolio" />
        </Helmet>
        <div className="banner-wrapper">
        <picture>
          <source srcSet={ projectData.acf.banner_image.sizes.large } media="(max-width: 600px)" />
          <img src={ projectData.acf.banner_image.url } alt={ projectData.title.rendered } className='banner-img'/>
        </picture>
        </div>

        <h1 className="project-title">
          { projectData.title.rendered }
        </h1>

        <div className="project-info">
          <div className="overview-wrapper">
            <h2 className="overview-heading">
              { projectData.acf.overview_heading }
            </h2>

            <p className="overview-text">
              { projectData.acf.overview_text }
            </p>
          </div>

          <div className="tools-role-wrapper">
            <div className="tools-wrapper">
              <h4 className="heading">
                Tools
              </h4>
              <ul >
                { renderTools() }
              </ul>
            </div>
            <div className="role-wrapper">
              <h4 className="heading">
                Role
              </h4>
              <ul>
                { renderRoles() }
              </ul>
            </div>
          </div>

          <div className="links-wrapper">
            <a href={ projectData.acf.live_site_link } className="btn-primary" target='_blank' rel='noreferrer'><span>Live Site</span></a>
            {
              projectData.acf.github_link ? 
                <a href={ projectData.acf.github_link } className="btn-primary" target='_blank' rel='noreferrer'><span>GitHub</span></a>
              :
              ''
            }
          </div>

          <div className="design-wrapper">
            <h3 className="design-heading">
              { projectData.acf.design_heading }
            </h3>
            <p className="design-text">
              { projectData.acf.design_text }
            </p>
          </div>

          <div className="development-wrapper">
            <h3 className="development-heading">
              { projectData.acf.development_heading }
            </h3>
            <p className="development-text">
              { projectData.acf.development_text }
            </p>
          </div>

          <div className="reflection-wrapper">
            <h3 className="reflection-heading">
              { projectData.acf.reflection_heading }
            </h3>
            <p className="reflection-text">
              { projectData.acf.reflection_text }
            </p>
          </div>

          <div className="project-screenshots">
            <CarouselContainer screenshots_heading={projectData.acf.screenshots_heading} screenshots={ projectData.acf.screenshots }/>
          </div>
        </div>  
      </section>
      <section className='prev-next'>
        <Link to={ `/work/${ projectData.acf.other_projects[0].post_name }` } className="navigation-link">
          <GrFormPrevious />
          <p>
              Previous
          </p>
        </Link>
        <Link to={ `/work/${ projectData.acf.other_projects[1].post_name }` } className="navigation-link" onClick={handleProjectLink()}>
          <p>
              Next
          </p>
          <GrFormNext />
        </Link>
      </section>
    </>
  )
}

export default SingleProject