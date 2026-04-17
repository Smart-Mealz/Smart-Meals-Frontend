import React from 'react'
import apple from "../assets/images/apple.png"
import google from "../assets/images/google.png"


const Footer = () => {
  return (
    <footer className="bg-green-900 text-white text-sm">
      {/* Top footer: Links */}
      <div className="max-w-7xl mx-auto py-10 px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-gray-300">
        <div>
          <p className="font-semibold mb-2 text-white">Explore</p>
          <ul className="space-y-2">
            <li>Menu</li>
            <li>Pricing</li>
            <li>Market</li>
            <li>Gift Cards</li>
            <li>Blog</li>
            <li>Cookbook</li>
            <li>Recipes</li>
            <li>Weekly Plans</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold mb-2 text-white">Company</p>
          <ul className="space-y-2">
            <li>About Us</li>
            <li>Our Vision</li>
            <li>Our Team</li>
            <li>Careers</li>
            <li>Press</li>
            <li>Affiliates</li>
            <li>Suppliers</li>
            <li>Food Safety</li>
          </ul>
        </div>
        <div>
        <p className="font-semibold mb-2 text-white">Offers & Savings</p>
        <ul className="space-y-2">
          <li>Student Discounts</li>
          <li>Family Deals</li>
          <li>Referral Program</li>
          <li>Gift Cards</li>
          <li>Seasonal Offers</li>
          <li>Bundle Savings</li>
          <li>Loyalty Rewards</li>
        </ul>
        </div>
        <div>
          <p className="font-semibold mb-2 text-white">Customer Support</p>
          <p>Help Center & FAQ</p>
          <p>contact@smartmeals.com</p>
          <p>(+233) 30-3897365</p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mx-4" />

      {/* Bottom footer: Legal + App Links */}
      <div className="max-w-7xl mx-auto py-6 px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-400">
        <div className="text-xs space-x-4 text-center md:text-left">
          <span>© Smartmeals, LLC 2026</span>
          <span>Do Not Sell or Share</span>
          <span>My Info</span>
          <span>Privacy</span>
          <span>Terms</span>
        </div>
        <div className="flex items-center gap-4">
          <img
            src={apple}
            alt="App Store"
            className="w-32 h-auto"
          />
          <img
            src={google}
            alt="Google Play"
            className="w-32 h-auto"
          />
        </div>
      </div>

      
    </footer>
  )
}

export default Footer