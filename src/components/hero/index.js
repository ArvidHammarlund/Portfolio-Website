import DynamicText from '../dynamic_text';

export default function Hero() {

  return (
    <section className="hero">
      <h2 className="hero__text--green">Hello! My name is...</h2>
      <h1 className='hero__text--large'>Arvid Hammarlund.</h1>
      <DynamicText />
      <p className="hero__text">And this is my <span>portfolio website</span></p>
      <div>
        <button className="hero__button" href="">Check out my resume!</button>
      </div>
      </section>
  )

}
