import React from 'react'
import PropTypes from 'prop-types'
import NavItem from './NavItem'

const Nav = ({ menu, setMenu, Switch, theme, toggleTheme, checked }) => {
  Nav.propTypes = {
    menu: PropTypes.bool,
  }
  return (
    <div className={`nav ${ menu ? 'menu-opened' : '' }`}>
      <NavItem name='Home' slug='' setMenu={setMenu}/>
      <NavItem name='About' slug='about'/>
      <NavItem name='Work' slug='work'/>
      <NavItem name='Contact' slug='contact'/>
      <Switch 
        onChange={ toggleTheme }
        checked={ checked }
        offColor='#dcdbd6'
        onColor='#194a50'
        offHandleColor='#121212'
        onHandleColor='#ffffff'
        uncheckedIcon={
          <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
          width="64.000000pt" height="64.000000pt" viewBox="0 0 64.000000 64.000000"
          preserveAspectRatio="xMidYMid meet"
          className='dark-mode-icon'
          >
          <g transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
          fill="#000000" stroke="none">
          <path d="M223 622 c-109 -39 -178 -112 -210 -221 -41 -144 35 -303 176 -370
          75 -35 192 -37 263 -4 60 27 134 101 161 161 33 71 31 188 -4 263 -69 146
          -241 223 -386 171z m26 -106 c-11 -19 -22 -56 -25 -82 -5 -41 -1 -58 23 -104
          23 -44 39 -60 83 -83 64 -33 113 -33 179 2 23 11 41 18 41 15 0 -2 -9 -21 -19
          -42 -40 -78 -118 -125 -207 -124 -156 1 -264 146 -220 294 18 61 44 95 100
          132 55 37 70 34 45 -8z m150 -46 l26 -12 -27 -14 c-15 -8 -30 -24 -34 -36 -6
          -21 -7 -21 -20 4 -8 15 -23 29 -34 33 -18 6 -17 8 13 39 28 29 33 31 41 16 4
          -10 20 -23 35 -30z m112 -131 c-24 -25 -27 -25 -35 -9 -4 10 -18 22 -30 27
          l-21 10 22 7 c12 4 25 16 28 26 6 19 8 18 34 -7 l28 -28 -26 -26z"/>
          </g>
          </svg>
        }
        checkedIcon={
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className='light-mode-icon'><path d="M22.088 13.126l1.912-1.126-1.912-1.126c-1.021-.602-1.372-1.91-.788-2.942l1.093-1.932-2.22-.02c-1.185-.01-2.143-.968-2.153-2.153l-.02-2.219-1.932 1.093c-1.031.583-2.34.233-2.941-.788l-1.127-1.913-1.127 1.913c-.602 1.021-1.91 1.372-2.941.788l-1.932-1.093-.02 2.219c-.01 1.185-.968 2.143-2.153 2.153l-2.22.02 1.093 1.932c.584 1.032.233 2.34-.788 2.942l-1.912 1.126 1.912 1.126c1.021.602 1.372 1.91.788 2.942l-1.093 1.932 2.22.02c1.185.01 2.143.968 2.153 2.153l.02 2.219 1.932-1.093c1.031-.583 2.34-.233 2.941.788l1.127 1.913 1.127-1.913c.602-1.021 1.91-1.372 2.941-.788l1.932 1.093.02-2.219c.011-1.185.969-2.143 2.153-2.153l2.22-.02-1.093-1.932c-.584-1.031-.234-2.34.788-2.942zm-10.117 6.874c-4.411 0-8-3.589-8-8s3.588-8 8-8 8 3.589 8 8-3.589 8-8 8zm6.029-8c0 3.313-2.687 6-6 6s-6-2.687-6-6 2.687-6 6-6 6 2.687 6 6z"/></svg>
        }
      />
    </div>
  )
}

export default Nav