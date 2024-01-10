import React from 'react'
import face from "../assets/myFace.png"
import ReactTypingEffect from 'react-typing-effect';
import { AiOutlineDownload} from "react-icons/ai"

const Home = () => {
  return (
    <div name="home" className = "h-screen w-full bg-gradient-to-b from-black to-blue-800">
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
            <div className= "flex flex-col justify-center h-full">
                <h2 className ="text-4xl sm:text-4xl font-bold text-white">
                    <ReactTypingEffect
                        text={["Software Developer"]}
                    />

                </h2>
                <p className="text-gray-400 py-4 max-w-md">
                    I am a Junior student studying Computer Science at the University of California, Riverside. I am currently looking for Internships in the software engineering field. Feel free to contact me using my contact page.
                </p>
                <div>
                    <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-red-300 to-red-600 cursor-pointer">
                        <a href = "Resume (9).pdf" target = '_blank' download={true} rel="noreferrer">
                            Resume
                        </a>
                        <span className="group-hover:scale-150 duration-300">
                            <AiOutlineDownload size={20} className="ml-1"/>
                        </span>
                    </button>
                </div>
            </div>
                <div>
                    <img src={face} alt="my profile" className="rounded-2xl mx-auto w-2/3 md:w-full" />
                </div>
        </div>
    </div>
  )
}

export default Home