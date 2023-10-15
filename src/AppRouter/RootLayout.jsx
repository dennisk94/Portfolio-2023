import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom';
import Switch from 'react-switch';
import Header from '../Components/Header-Footer/Header';
import Footer from '../Components/Header-Footer/Footer';


const RootLayout = () => {
  const [ theme, setTheme ] = useState('light');
  const [ checked, setChecked ] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem('theme');

    if ( !theme ) {
      localStorage.setItem('theme', 'light');
    } else {
      const selectedTheme = localStorage.getItem('theme');
      setTheme(selectedTheme);
      if ( selectedTheme === 'light' ) {
        setChecked(false);
      } else {
        setChecked(true);
      }
    }
  }, [checked, theme]);

  const toggleTheme = () => {
    if ( theme === 'dark' ) {
      localStorage.setItem('theme', 'light');
      setChecked(false);
    } else if ( theme === 'light' ) {
      localStorage.setItem('theme', 'dark');
      setChecked(true);
    }
  }

  return (
    <>
      <div className="site-wrapper" id={ theme }>
        <Header Switch={Switch} theme={theme} toggleTheme={toggleTheme} checked={checked}/>
            <main className="main">
              <div className="content-wrapper">
                <Outlet />
              </div>
            </main>
        <Footer />
      </div>
    </>
  )
}

export default RootLayout