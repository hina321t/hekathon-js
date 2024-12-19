
import React from 'react'

const Formen = () => (
  <div className="flex justify-center items-center py-10 bg-gray-200 min-h-screen">
    {/* Main Container */}
    <div className="w-[72%] bg-gray-100 p-8 rounded-lg shadow-lg">
      {/* Heading */}
      <h1 className="text-3xl font-extrabold text-center mb-8">
        BROWSE BY DRESS STYLE
      </h1>

      {/* Grid for Images */}
      <div className="grid grid-cols-2 gap-6">
        {/* Image 1 */}
        <div>
          <img
            src="./Frame 61.png"
            alt="Style 1"
            className="w-[75%] h-48 object-cover rounded-lg shadow-md " />
        </div>

        {/* Image 2 */}
        <div>
          <img
            src="./Frame 62.png"
            alt="Style 2"
            className="w-full h-48 object-cover rounded-lg shadow-md" />
        </div>

        {/* Image 3 */}
        <div>
          <img
            src="./Frame 64.png"
            alt="Style 3"
            className="w-full h-48 object-cover rounded-lg shadow-md" />
        </div>

        {/* Image 4 */}
        <div>
          <img
            src="./Frame 63.png"
            alt="Style 4"
            className="w-[75%] h-48 object-cover rounded-lg shadow-md" />
        </div>
      </div>
    </div>
  </div>
)

export default Formen
