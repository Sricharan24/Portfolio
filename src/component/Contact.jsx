import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className="w-full h-screen bg-gradient-to-b from-black to-blue-800 text-white">
        <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-blue-500">Contact</p>
                <p className="py-6">Submit the form to get in contact with me </p>
            </div>
            <div className="flex justify-center items-center">
                <form action="https://getform.io/f/f3e360a6-02a1-4c0b-b0ef-00c85e3c7070" method="POST" className="flex flex-col w-full md:w-1/2">
                    <input type="text" name = "name" placeholder="Enter your name" className = "p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"/>
                    <input type="text" name = "email" placeholder="Enter your email" className = "my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"/>
                    <textarea name="message" rows="10" placeholder="Enter your message" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"></textarea>
                    <button className="text-white bg-gradient-to-r from-white to-red-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300 ">Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
  
}

export default Contact