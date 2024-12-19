import Image from 'next/image';
import React from 'react';
Image

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
      



      {/* price card section */}
<div>
  <div className='flex justify-evenly  gap-6 pt-9'>
    <img  src="./Frame 55.png" alt="card" />
    <img src="./Frame 54.png" alt="card" />
    <img src="./Frame 56.png" alt="card" />
  </div>
</div>
</div>


 {/* close card sec */}
      </div>

      
{/* blck line brands */}
 <div className="relative w-full bg-black h-12">
  {/* Horizontally aligned list */}
  <ul className="absolute top-[-10px] left-0 w-full flex justify-evenly text-white  z-10 pt-4  items-center ">
   
     <Image  src="/vector.png"  alt="img" width={100} height={50}/>
    <Image  src="/zara-logo-1 1.png"  alt="img" width={100} height={200}/>
    <Image  src="/gucci-logo-1 1.png"  alt="img" width={100} height={200}/>
    <Image  src="/prada-logo-1 1.png"  alt="img" width={100} height={50}/>
    <Image  src="/Vector (1).png"  alt="img" width={100} height={200}/>
    
  </ul>
</div>

{/* price card section */}
<div>
  <div className='flex '>
    <img src="./Frame 55.png" alt="card" />
    <img src="./Frame 54.png" alt="card" />
    <img src="./Frame 56.png" alt="card" />
  </div>
</div>




  







     
     </div>   
    
  );
};

export default Hero;







