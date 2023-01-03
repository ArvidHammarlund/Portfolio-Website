import Header from './Header';
import Contacts from "./Contacts"
import Popup from "./Popup"

import {useState, useEffect, useRef} from "react";

const Layout = () => {

  const ref = useRef(null);
  const ref2 = useRef(null)
  const [navOpen, setNavOpen] = useState(false);

  // --- Handlers --- 

  function handleNav() {
    setNavOpen(() => !navOpen)
  }

  // --- Effects ---

  useEffect(() => {
    if (navOpen){
      ref.current.style.filter = "blur(5px)"
      ref2.current.style.transform = "translateX(-200px)"
    } else {
      ref.current.style.filter = "blur(0px)"
      ref2.current.style.transform = "translateX(0px)"
    }
  }, [navOpen])

  // --- Return ---
  
  return (
    <>
      <Header navOpen={navOpen} setNavOpen={setNavOpen} /> 
      <Popup handleNav={handleNav} ref2={ref2} />
      <div className='side_shadow__left'></div>
      <div className='side_shadow__right'></div>
      <main ref={ref}> 
        <Outlet />
      </main>
      <footer id="contact" className='contacts__area'>
        <hr />
        <Contacts />
      </footer>
    </>
  )
}

export default Layout;

