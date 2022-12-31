
import { useState, useEffect } from 'react';


export default function DynamicText() {
    const [text, setText] = useState("")
    const [index, setIndex] = useState(0)
    const [write, setWrite] = useState(true)


    const description = [
        "Knowledge seeker and geek.",
        "An aspiring software engineer.",
        "An engineering student at Chalmers.",
        "and bussiness student at SSE."
    ]
    
    function delay(time) {
        return new Promise(resolve => setTimeout(resolve, time));
      }
      
      


    function type(text) {
        delay(300).then(() => setText(description[index].slice(0, text.length + 1)));
        
    }

    function erease(text) {
        delay(300).then(() => setText(description[index].slice(0, text.length - 1)));
        
    }


    if (write) {
        type(text)
    } else {
        erease(text)
    }
   
    

    useEffect(() => {
        if (text.length < 1) {
            setIndex(() => (index + 1) % 4)
            setWrite(() => true)
        }
        else if (text.length > description[index].length - 1) {
            setWrite(() => false)
        }
    }, [text])


    

    return (
        <div>
            <h3 id="dynamic__text" className='hero__text--large'>{text}|</h3>
        </div>
    )
}