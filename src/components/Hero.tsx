import React from 'react';

const Hero = () => {
  return (
    <div className="relative w-full h-[500px]">
      {/* Background Image */}
      <img
        src="./girlboy.png"
        alt="A stylish boy and girl showcasing fashion"
        className="w-full h-full object-cover"
      />

      {/* Overlay Content on Left */}
      <div>
      <div className="absolute top-1/2 left-10 transform -translate-y-1/2 text-black p-5 font-extrabold">
        <h1 className="text-5xl font-bold mb-3">Find Clothes</h1>
        <h1 className="text-5xl font-bold mb-3">That Match</h1>
        <h1 className="text-5xl font-bold mb-3">Your Style</h1>
        
        <p className="text-xs mb-4 max-w-[300px] font-sarief font-light text-gray-700 leading-relaxed">
          Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
        </p>
        
        <button className="bg-black text-white px-9 py-3 rounded-3xl hover:bg-gray-500">
          Shop Now
        </button>
      </div>
      </div>


 {/*  */}
 <div className="relative w-full bg-black h-12">
  {/* Horizontally aligned list */}
  <ul className="absolute top-[-10px] left-0 w-full flex justify-evenly text-white space-x-6 z-10 pt-5">
    <li>VEASACE</li>
    <li>ZARA</li>
    <li>GUCCI</li>
    <li>PRADA</li>
    <li>CALVIN CLEIN</li>
  </ul>
</div>




  







     
     </div>   
    
  );
};

export default Hero;







