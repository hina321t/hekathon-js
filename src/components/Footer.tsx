import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-black w-[90%] mx-auto p-5 flex justify-between items-center rounded-2xl">
      {/* Left Section */}
      <div>
        <h1 className="text-white font-extrabold text-3xl  pl-20 ">STAY UPTO DATE ABOUT </h1>
        <h1 className="text-white font-extrabold text-3xl  pl-20  font-sans">OUR LATEST OFFERS</h1>
      </div>

      {/* Right Section */}
      <div className="flex flex-col gap-4 pr-20">
        {/* Input Field */}
        <div className="flex items-center bg-white p-2 rounded-3xl">
          {/* <span className="material-icons text-gray-400 pr-2">email</span> */}
          <img src="./eml.png" alt="email" />
          <input 
            type="text"
            placeholder="Enter your email address"
            className="outline-none flex-grow text-gray-60 0 placeholder-gray-400"
          />
        </div>
        {/* Subscribe Field */}
        <div className="bg-white p-2 rounded-3xl ">
          <p className="text-black pr-20">Subscribe to Newsletters</p>
        </div>
      </div>

    </footer>
  )
}

export default Footer
