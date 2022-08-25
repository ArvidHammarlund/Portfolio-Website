import {useState, useEffect} from "react"

export default function Nav({navOpen, setNavOpen}) {

    const [width, setWidth] = useState(window.innerWidth);
    
    // Window size
    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);
    
    const isMobile = width <= 768;


    
    if (isMobile) {
        return (
            <i onClick={() => setNavOpen(() => !navOpen)} className="fa-solid fa-bars header__nav--button"></i>
        )
    } else {
        return (
            <nav className="header__nav">
                <ul>
                    <li><a href="/#portfolio">Portfolio</a></li>
                    <li><a href="/#about">About</a></li>
                    <li><a href="/#contact">Contact</a></li>
                </ul>
            </nav>
        )
    }

   
}