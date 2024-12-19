import React from 'react'


const CardsRows = () => {
  return (
    // <div className="flex justify-between items-start w-full gap-6">
    <div className="w-[90%] mx-auto flex justify-between items-start gap-6 ">
  {/* Card 1 */}
  <div className="bg-white shadow-lg rounded-lg p-4 w-1/3  hover:bg-slate-300">
    {/* Image */}
    <img
      src="./five.png"
      alt="Card 1"
      className="object-contain"

    />

    {/* Name and Icon */}
    <div className="flex items-center mt-4 ">
      <h3 className="font-bold text-lg">Sarah M.</h3>
      <img
        src="./right.png"
        alt="Icon"
     
      />
    </div>

    {/* Description */}
    <p className="text-gray-600 text-left mt-2">
    "I&apos;m blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”


    </p>
  </div>

  {/* Card 2 */}
  <div className="bg-white shadow-lg rounded-lg p-4 w-1/3  hover:bg-slate-300">
    {/* Image */}
    <img
      src="./five.png"
      alt="Card 2"
      className="object-contain"
     
    />

    {/* Name and Icon */}
    <div className="flex items-center mt-4">
      <h3 className="font-bold text-lg">Alex k.</h3>
      <img
        src="./right.png"
        alt="Icon"
     
      />
    </div>

    {/* Description */}
    <p className="text-gray-600 text-left mt-2">
    "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”
    </p>
  </div>

  {/* Card 3 */}
  <div className="bg-white shadow-lg rounded-lg p-4 w-1/3  hover:bg-slate-300">
    {/* Image */}
    <img
      src="./five.png"
      alt="Card 3"
      className="object-contain"
     
    />

    {/* Name and Icon */}
    <div className="flex items-center mt-4">
      <h3 className="font-bold text-lg">James L.</h3>
      <img
        src="./right.png"
        alt="Icon"
      
      />
    </div>

    {/* Description */}
    <p className="text-gray-600 text-left mt-2">
    "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”
    </p>
  </div>
</div>

    
  
  );
};



export default CardsRows
