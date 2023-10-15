import React from 'react'
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { GitHubURL } from '../../Globals/Variables';
import { BiLinkExternal } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import Skill from '../Skills/Skill';

const ProjectCard = ({ project }) => {
    const { 
        title,
        slug,
        acf
    } = project;
    console.log(project);

    const renderSkills = () => {
        if ( acf.toolkit ) {
            return (
                acf.toolkit.map(( skill, i ) => <Skill skill={skill} key={i}/>)
            )
        } else {
            return '';
        }
    }

     const featuredProject = {
        hidden: { x: '50px', opacity: 0 },
        show: { x: '0px', 
                opacity: 1, 
                transition: { 
                                delay: .5,
                                x: { type: 'spring'},
                                default: { duration: 1 }  }},
    }

  return (
    <motion.div 
        variants={featuredProject}
        initial='hidden'
        whileInView="show"
        viewport={{ once: true }}
        whileHover={{ scale: 1.02 }}
        className='project-card'>
        <img src={ acf.thumbnail_image.sizes.large } alt={ title.rendered } className='project-thumbnail'/>
        <div className="project-info">
            <NavLink to={`/work/${ slug }`} className='project-link'>
                <h3 className="project-title">
                    { title.rendered }
                </h3>
            </NavLink>
           
            <ul className="skills">
                {
                    renderSkills()
                }
            </ul>
            <div className="project-details">
                <p>
                    { acf.excerpt }
                </p>
                <div className='links'>
                    <a href={ acf.live_site_link } className="live-site btn-primary normal" target='_blank' rel='noreferrer'>
                        <span>Live Site</span> <span className='link-icon'><BiLinkExternal /></span>
                    </a>
                    {
                        acf.github_link ?
                            <a href={ acf.github_link } className="github btn-primary normal" target='_blank' rel='noreferrer'>
                                <span>GitHub</span> <span className='link-icon'><BsGithub /></span>
                            </a>
                        :
                        ''
                    }
                    {
                        acf.details ?
                            <NavLink to={`/work/${ slug }`} className='view-project btn-primary normal internal'>
                                <span>View Project</span>
                            </NavLink>
                        :
                        ''
                    }
                    
                </div>
            </div>
        </div>
    </motion.div>
  )
}

export default ProjectCard