import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <h1>DESCRIPTION</h1>
            <p>Craving something delicious? QuickBite brings your favorite meals straight to your door—hot, fresh, and right on time. Whether it's lunch at work or dinner at home, we’ve got you covered with a variety of cuisines to satisfy every taste.
Order now and enjoy the bite that’s always quick!</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+355-691234567</li>
                <li>contact@quickbite.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2025 © Quickbite.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
