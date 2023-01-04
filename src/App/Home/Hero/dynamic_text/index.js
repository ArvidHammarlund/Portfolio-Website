import Typewriter from 'typewriter-effect';


export default function DynamicText() {
  const descriptions = [
    "An aspiring software engineer.",
    "An engineering student at Chalmers.",
    "and bussiness student at SSE.",
    "Knowledge seeker and geek."
  ]
    
  return (
    <div>
      <h3 id="dynamic__text" className='hero__text--large'>
      <Typewriter 
        options={{
        strings: descriptions,
        autoStart: true,
        loop: true,
        }}
      />
      </h3>
    </div>
  )
}
