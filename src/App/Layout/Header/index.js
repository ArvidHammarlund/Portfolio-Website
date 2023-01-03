import { useEffect, useState, useCallback, useRef } from "react";
import logo from "./apple-touch-icon copy.png"
import Nav from "./Nav"

const Header = ({navOpen, setNavOpen}) => {
  
  const ref = useRef(null);
  const [y, setY] = useState(window.scrollY);

  const handleNavigation = useCallback(
    e => {
      const window = e.currentTarget;
      if (y > window.scrollY) {
        ref.current.style.transform = 'translateY(0)';
      } else if (y < window.scrollY) {
        ref.current.style.transform = 'translateY(-100px)';
      }
      setY(window.scrollY);
    }, [y]
  );
  
  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavigation);
  
    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  return (
    <header ref={ref} className='header'>
      <a href="/" className="header__logo">
        <img src={logo}></img>
        Arvid Hammarlund
      </a>
      <Nav navOpen={navOpen} setNavOpen={setNavOpen} />
    </header>
  )
}

export default Header;
