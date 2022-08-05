import React from 'react'
import cplus from "../assets/c++.png"
import java from "../assets/java.png"
import python from "../assets/python.png"
import javascript from "../assets/javascript.png"
import css from "../assets/css.png"
import html from "../assets/html.png"
import react from "../assets/react.png"

const Skills = () => {
    const lang = [
        {
            id: 1,
            src: cplus,
            title: 'C++',
            style: 'shadow-blue-400 shadow-lg bg-gradient-to-b from-blue-500 to-white text-black inline border-b-2 border-t-2 border-l-2 border-r-2 border-white'
        },
        {
            id: 2,
            src: java,
            title: 'Java',
            style: 'shadow-orange-400 shadow-lg bg-gradient-to-b from-orange-500 to-blue-500 text-black inline border-b-2 border-t-2 border-l-2 border-r-2 border-white'
        },
        {
            id: 3,
            src: python,
            title: 'Python',
            style: 'shadow-blue-400 shadow-lg bg-gradient-to-b from-blue-700 to-yellow-300 text-black inline border-b-2 border-t-2 border-l-2 border-r-2 border-white'
        },
        {
            id: 4,
            src: javascript,
            title: 'Javascript',
            style: 'shadow-yellow-500 shadow-lg bg-gradient-to-b from-yellow-500 to-black inline border-b-2 border-t-2 border-l-2 border-r-2 border-white'
        },
        {
            id: 5,
            src: css,
            title: 'CSS',
            style: 'shadow-white bg-gradient-to-b shadow-lg from-white to-blue-500 text-black inline border-b-2 border-t-2 border-l-2 border-r-2 border-white'
        },
        {
            id: 6,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-400 shadow-lg bg-gradient-to-b from-orange-700 to-white text-black inline border-b-2 border-t-2 border-l-2 border-r-2 border-white'
        },
        {
            id: 7,
            src: react,
            title: 'React',
            style: 'shadow-blue-400 shadow-lg bg-gradient-to-b from-sky-400 to-white text-black inline border-b-2 border-t-2 border-l-2 border-r-2 border-white'
        },
    ]
  return (
    <div name='skills' className="bg-gradient-to-b from-blue-800 to-black w-full
    h-screen">
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
            <div>
                <p className="text-4xl font-bold border-b-4 border-blue-500 p-2 inline">Skills</p>
                <p className="py-6">These are the programming languages I have experience with</p>
            </div>
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
                {
                    lang.map(({id,src,title,style}) => (
                        <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                            <img src={src} alt="" className="w-20 mx-auto" />
                            <p className="mt-4 font-medium">{title}</p>
                        </div>
                    ))
                }
               
            </div>
        </div>
    </div>
  )
}

export default Skills