import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-blue-800 to-black text-white">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-4">
                <p className="text-4xl font-bold inline border-b-4 border-blue-500">About</p>
            </div>
            <p className="text-xl mt-20">
                My name is Sricharan Kathika and I am from Mountain House, California.  
            </p>

            <br />

            <p className="text-xl">
                Currently I am a sophomore at the University of California, Riverside studying Computer Science. I have experience using multiple programming languages. Some include C++, Java, and React.JS. Feel free to download my resume on the Home page to see more of my skills. I am currently looking for internship opportunities in the software engineering field so feel free to contact me. 
            </p>
        </div>
    </div>
  )
}

export default About