import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom'
import logo from '../../Assets/Img/logo-dark.png';
import logoDark from '../../Assets/Img/logo.png';
import Nav from '../Nav/Nav';
import { AiOutlineMenu } from "react-icons/ai";
import { RiMenu3Fill } from "react-icons/ri";

const Header = ({ Switch, theme, toggleTheme, checked }) => {
  const [ menu, setMenu ] = useState(false);
  const { pathname } = useLocation();
  const handleMenuClick = () => {
    setMenu(!menu);
  }

  console.log(pathname);
  useEffect(() => {
    setMenu(false);
  }, [pathname]);

  return (
    <header className='header'>
      <div className="header-wrapper">
        <NavLink to={'/'}>
          {
            theme == 'dark' ?
              <img src={ logoDark } alt="logo" className="logo" />
            :
              <img src={ logo } alt="logo" className="logo" />
          }
        </NavLink>
        <div className="nav-container">
          {
            menu ? 
            <RiMenu3Fill className='hamburger-icon' onClick={handleMenuClick}/>
            :
            <AiOutlineMenu className='hamburger-icon' onClick={handleMenuClick}/>
          }
          <Nav menu={menu} setMenu={setMenu} Switch={Switch} theme={theme} toggleTheme={toggleTheme} checked={checked}/>
        </div>
      </div>
    </header>
  )
}

export default Header