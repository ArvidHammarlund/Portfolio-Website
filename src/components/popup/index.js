
export default function Popup({handleNav, ref}) {
  
  return (
    <div ref={ref} className='popup__area'>
      <nav>
        <button onClick={handleNav}>Exit</button>
        <button onClick={handleNav}><a href="/#portfolio">Portfolio</a></button>
        <button onClick={handleNav}><a href="/#about">About</a></button>
        <button onClick={handleNav}><a href="/#contact">Contact</a></button>
      </nav>
    </div>
  ) 
  
}
