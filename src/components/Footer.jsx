import React from 'react'
import apple from "../assets/images/apple.png"
import google from "../assets/images/google.png"


const Footer = () => {
  return (
    <footer className="bg-green-900 text-white text-sm">
      {/* Top footer: Links */}
      <div className="max-w-7xl mx-auto py-10 px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-gray-300">
        <div>
          <ul className="space-y-2">
            <li>On the Menu</li>
            <li>Pricing</li>
            <li>Our Vision</li>
            <li>Market</li>
            <li>Gift Cards</li>
            <li>Blog</li>
            <li>Cookbook</li>
            <li>Suppliers</li>
          </ul>
        </div>
        <div>
          <ul className="space-y-2">
            <li>Affiliates</li>
            <li>Supply</li>
            <li>Chains Act</li>
            <li>Food Safety</li>
            <li>Career</li>
            <li>Press</li>
            <li>Our Team</li>
            <li>Military &</li>
          </ul>
        </div>
        <div>
          <ul className="space-y-2">
            <li>Veterans</li>
            <li>Students</li>
            <li>Graduates</li>
            <li>Teachers</li>
            <li>Seniors (+55)</li>
            <li>Medical Staff</li>
            <li>First Responders</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold mb-2 text-white">Customer Support</p>
          <p>Help Center & FAQ</p>
          <p>contact@smartmeal.com</p>
          <p>(646) 891-4349</p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mx-4" />

      {/* Bottom footer: Legal + App Links */}
      <div className="max-w-7xl mx-auto py-6 px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-400">
        <div className="text-xs space-x-4 text-center md:text-left">
          <span>© SmartMeal, LLC 2025</span>
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