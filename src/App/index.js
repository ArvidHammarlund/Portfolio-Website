import './App.css';
import Header from './Header';
import Portfolio from './Portfolio';
import About from "./About"
import Hero from "./Hero"
import Contacts from "./Contacts"
import Popup from "./Popup"
import {useState, useEffect, useRef} from "react";

export default function App() {
  const ref = useRef(null);
  const ref2 = useRef(null)
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    if (navOpen){
      ref.current.style.filter = "blur(5px)"
      ref2.current.style.transform = "translateX(-200px)"
    } else {
      ref.current.style.filter = "blur(0px)"
      ref2.current.style.transform = "translateX(0px)"
    }


  }, [navOpen])

  function handleNav() {
    setNavOpen(() => !navOpen)
  }

  return (
    <>
      <Header navOpen={navOpen} setNavOpen={setNavOpen} /> 
      <Popup navOpen={navOpen} ref2={ref2} />
      <div className='side_shadow__left'></div>
      <div className='side_shadow__right'></div>
      <main ref={ref}>
        <Hero /> 
        <About />
        <Portfolio /> 
      </main>
      <footer id="contact" className='contacts__area'>
        <hr />
        <Contacts />
      </footer>
    </>
  )

}


