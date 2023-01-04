import DynamicText from './dynamic_text';
import cv from "./Cv.pdf"

const Hero = () => {
  return (
    <section className="hero">
      <h2 className="hero__text--green">Hello! My name is...</h2>
      <h1 className='hero__text--large'>Arvid Hammarlund.</h1>
      <DynamicText />
      <p className="hero__text">And this is my <span>portfolio website</span></p>
      <div>
        <a className="hero__button" href={cv} download="arvidHammarlundCV.pdf">Check out my resume!</a>
      </div>
      </section>
  )
}

export default Hero;
