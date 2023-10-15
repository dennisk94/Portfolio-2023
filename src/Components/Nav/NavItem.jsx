import React from 'react'
import { useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

const NavItem = ({ name, slug, setMenu }) => {
  NavItem.propTypes = {
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired
  }
  const { pathname } = useLocation();
  const handleNavClick = (slug) => {
    if ( pathname == `/${ slug }` ) {
      setMenu(false);
    }
  }
  return (
    <NavLink to={`/${ slug }`} className='nav-item' onClick={() => handleNavClick(slug)}>
      { name }
    </NavLink>
  )
}

export default NavItem