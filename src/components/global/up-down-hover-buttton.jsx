'use client'
import { useState } from "react";

function UpDownHoverButton({ text, link }) {
    const [hover, setHover] = useState(false);

    return (
        <a href={link} target="_blank" className=" bg-red-500 z-[100]"> 
            <button 
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                className={`Up relative z-50 overflow-hidden md:w-36 md:h-12 w-32 h-10 rounded-lg  `}
            >
                <p className={`transform ease-in-out duration-700 w-32 h-10 md:w-36 md:h-12 flex items-center justify-center text-reverse-bright text-lg ${hover ? "top-[-100%]" : "top-[0]"}`}>
                    {text}
                </p>
                <p className={`transform ease-in-out duration-700 absolute left-0 md:w-36 md:h-12 w-32 h-10 flex items-center justify-center text-reverse-bright text-lg ${hover ? "top-[0]" : "top-[100%]"}`}>
                    {text}
                </p>
            </button>
            <div id="overlay" className="w-[100%] h-[100%] absolute top-0 left-0  z-40"></div>
        </a>
    );
}


export default UpDownHoverButton;