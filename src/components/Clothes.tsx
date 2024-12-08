import React from 'react'



const Clothes = () => {
  return (
    <div>
      <div className="py-10 bg-gray-100 pt-16">
        {/* Container for the first section */}
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">New Arrivals</h2>

          {/* First Grid for 4 cards */}
          <div className="grid grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="./image 7.png" 
                alt="Product Image 1"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">T-SHIRT WITH TAPE DETAILS</h3>
                <img src="Frame 35.png" alt="Rating Stars"/>
                <p className="text-black font-bold mt-2">$120</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="./image 8.png" //
                alt="Product Image 2"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">SKINNY FIT JEANS</h3>
                <img src="./stars.png" alt="Rating Stars" />
                <p className="text-black font-bold mt-2">$240</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="./image 9.png" // Replace with actual image URL
                alt="Product Image 3"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">CHECKERED SHIRT</h3>
                <img src="./stars.png" alt="Rating Stars" />
                <p className="text-black font-bold mt-2">$130.4</p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="./Frame 38.png" // Replace with actual image URL
                alt="Product Image 4"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">SLEEVE STRIPED T-SHIRT</h3>
                <img src="./stars.png" alt="Rating Stars" />
                <p className="text-black font-bold mt-2">$180</p>
              </div>
            </div>
          </div>
        </div>

        {/* Section Heading */}
        <div className="text-center my-12">
          <h1 className="text-3xl font-bold">TOP SELLING</h1>
        </div>

        {/* Container for the second section */}
        <div className="max-w-7xl mx-auto px-4">
          {/* Second Grid for 4 cards */}
          <div className="grid grid-cols-4 gap-6">
            {/* Card 5 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="./Frame 32.png" // Replace with actual image URL
                alt="Product Image 5"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">VERTICAL STRIPED SHIRT</h3>
                <img src="./stars.png" alt="Rating Stars" />
                <p className="text-black font-bold mt-2">$149.99</p>
              </div>
            </div>

            {/* Card 6 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="./orange.png" // Replace with actual image URL
                alt="Product Image 6"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">COURAGE GRAPHIC T-SHIRT</h3>
                <img src="./stars.png" alt="Rating Stars" />
                <p className="text-black font-bold mt-2">$169.99</p>
              </div>
            </div>

            {/* Card 7 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="./short.png" // Replace with actual image URL
                alt="Product Image 7"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">LOOSE FIT BERMUDA SHORTS</h3>
                <img src="./stars.png" alt="Rating Stars" />
                <p className="text-black font-bold mt-2">$159.99</p>
              </div>
            </div>

            {/* Card 8 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="./jens.png" // Replace with actual image URL
                alt="Product Image 8"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">FADED SKINNY JEANS</h3>
                <img src="./stars.png" alt="Rating Stars" />
                <p className="text-black font-bold mt-2">$179.99</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    



  )}

export default Clothes

