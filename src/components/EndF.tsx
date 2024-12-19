import React from 'react'

const EndF = () => {
  return (
    <div><footer className="bg-gray-100 py-8 w-[90%] mx-auto">
    <div className="flex justify-between">
      {/* Left Section: Logo and Description */}
      <div className="w-1/5">
        <h1 className="text-2xl font-bold text-black">SHOP CO</h1>
        <p className="text-gray-600 mt-2">
          We have clothes that suit your style and which you're proud to wear. From women to men.
        </p>
        {/* Social Media Icons */}
        <div className="flex space-x-3 mt-4">
          <img src="./facebook.png" alt="Facebook" className="w-6 h-6" />
          <img src="./3.png" alt="Instagram" className="w-6 h-6" />
          <img src="./logo-twitter.png" alt="Twitter" className="w-6 h-6" /> 
          <img src="./github.icon.png" alt="Twitter" className="w-6 h-6" />
        </div>
      </div>

      {/* Right Sections */}
      <div className="flex justify-between w-4/5">
        {/* Company Section */}
        <div className="w-1/5">
          <h5 className="text-lg font-bold text-black mb-4">Company</h5>
          <ul className="text-gray-600 space-y-2">
            <li>About</li>
            <li>Features</li>
            <li>Works</li>
            <li>Career</li>
          </ul>
        </div>

        {/* Help Section */}
        <div className="w-1/5">
          <h5 className="text-lg font-bold text-black mb-4">Help</h5>
          <ul className="text-gray-600 space-y-2">
            <li>Customer Support</li>
            <li>Delivery Details</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* FAQ Section */}
        <div className="w-1/5">
          <h5 className="text-lg font-bold text-black mb-4">FAQ</h5>
          <ul className="text-gray-600 space-y-2">
            <li>Account</li>
            <li>Manage Deliveries</li>
            <li>Orders</li>
            <li>Payments</li>
          </ul>
        </div>

        {/* Resources Section */}
        <div className="w-1/5">
          <h5 className="text-lg font-bold text-black mb-4">Resources</h5>
          <ul className="text-gray-600 space-y-2">
            <li>Free eBooks</li>
            <li>Development Tutorials</li>
            <li>How-to Blog</li>
            <li>YouTube Playlist</li>
          </ul>
        </div>
      </div>
    </div>

    {/* Footer Bottom Section */}
    <div className="mt-8 pt-5 text-end text-gray-500 text-sm ">
      <p>Shop co © 2000-2023, All Rights Reserved</p>
      <div className="flex justify-end   items-center pr-5 space-x-4 mt-4">
         <img src="./visa.png" alt="Visa" className="w-12 h-10" />
         <img src="./Mastercard.png" alt="PayPal" className="w-8 h-6" />
        <img src="./paypal.png" alt="Apple Pay" className="w-12 h-10" /> 
        <img src="./googl-pay.png" alt="Apple Pay" className="w-12 h-10" />
      </div>
    </div>
  </footer>
      
    </div>
  )
}

export default EndF
