import './App.css';
import '../styles/utilites.css';
import Header from '../componants/header';
import Portfolio from '../componants/portfolio';
import DynamicText from '../componants/dynamic_text';
import {useState, useEffect, useRef} from "react";

function App() {
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
      {/*--===== Nav Meny =====--*/} 
      <div ref={ref2} className='popup__area'>
        <nav>
          <button onClick={handleNav}>Exit</button>
          <button onClick={handleNav}><a href="/#portfolio">Portfolio</a></button>
          <button onClick={handleNav}><a href="/#about">About</a></button>
          <button onClick={handleNav}><a href="/#contact">Contact</a></button>
        </nav>
      </div>
      {/* Side Shadow */}
      <div className='side_shadow__left'></div>
      <div className='side_shadow__right'></div>
      <main ref={ref}>
        {/*--===== Hero =====--*/} 
        <section className="hero">
          <h2 className="hero__text--green">Hello! My name is...</h2>
          <h1 className='hero__text--large'>Arvid Hammarlund.</h1>
          <DynamicText />
          <p className="hero__text">And this is my <span>portfolio website</span></p>
          <div>
            <button className="hero__button" href="">Check out my resume!</button>
          </div>
        </section>
        {/*--===== About =====--*/} 
        <section className='about' id="about">
          <h2>About</h2>
          <p className='about__text'>In 2020, I began to study at Stockholm School of Economics, which until then had been a dream of mine since young. Once enrolled however, it wasn't the bussiness or economics courses that entertained me, those that I previously would have expected for me to find interest in, rather it was the very first encounter with programming that did so - which was an element of the statitstic course at the school. </p>
          <p className='about__text'>Programming had until then seemed a very nische endevour - only suited for a specific kind of mind, and to be begun studied at young age with great fervour - which I deemed myself not to match with. This thought of mine was, I now realise, a very regretable disillusion, as it served as hindrence for me come to experiance the joy of programming earlier.</p>
          <p className='about__text'>Indeed, no other subject that I until then had spent time on, would in such a immediate way display its practical benefit, and at the moment on practice come to concrete embodiement (in a screen). It was such a refreshment from all those other subjects who's evident benefit remained obscure beyond the scope of examinations. Each hour spent truly felt that new abilities was created, new competitivess, and new ability - a craft as opposed to a mean to prove oneself. </p>
          <p className='about__text'>It is my wish that this website will come to serve as a stepping stone for the recovery of time lost, as well as a manifestetion for my newly discovered passion. Welcome to my website!</p>
          
          
        </section>
        {/*--===== Projects =====--*/} 
        <Portfolio /> 
      </main>
      {/*--===== Contact =====--*/} 
      <footer id="contact" className='contacts__area'>
        <hr />
        <div>
          <h2>Contacts</h2>
          <div>
            <h4>Email: arvid.hammarlund@gmail.com</h4>
            <h4>Github: </h4>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
