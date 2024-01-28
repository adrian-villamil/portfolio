import { useEffect, useRef, useState } from 'react';
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import styles from './header.module.css';

export const Header = () => {
  const [headerBackground, setHeaderBackground] = useState(false);
  const [openMobileNav, setOpenMobileNav] = useState(false);
  const navbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 70) {
        setHeaderBackground(true);
      } else {
        setHeaderBackground(false);
      }
    };
    
    const handleResize = () => {
      if (window.innerWidth > 500) {
        setOpenMobileNav(false);
      }
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (!navbarRef.current?.contains(event.target as Node)) {
        setOpenMobileNav(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleButtonClick = () => {
    setOpenMobileNav((prevState) => !prevState);
  };

  const closeMobileNav = () => {
    setOpenMobileNav(false);
  };

  return (
    <header className={headerBackground ? `${styles.header} ${styles['header-active']}` : styles.header}>
      <nav className={openMobileNav ? styles['nav-active'] : ''} ref={navbarRef}>
        <a href="#home" onClick={closeMobileNav}>Home</a>
        <a href="#experience" onClick={closeMobileNav}>Experience</a>
        <a href="#projects" onClick={closeMobileNav}>Projects</a>
        <a href="#contact" onClick={closeMobileNav}>Contact</a>
      </nav>
      <button onClick={handleButtonClick}>
        {openMobileNav ? <RxCross1 /> : <RxHamburgerMenu />}
      </button>
    </header>
  );
};