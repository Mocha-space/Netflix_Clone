
import React from 'react'
import './Footer.css'
import YoutubeIcon from '../../assets/youtube_icon.png'
import XIcon from '../../assets/twitter_icon.png'
import InstaIcon from '../../assets/instagram_icon.png'
import FacebookIcon from '../../assets/facebook_icon.png'

function Footer() {

  return (
    <div className='footer'>
      <div className='footer-icons'>
        <img src={FacebookIcon} alt="" />
        <img src={InstaIcon} alt="" />
        <img src={XIcon} alt="" />
        <img src={YoutubeIcon} alt="" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Center</li>
        <li>Gift Cards</li>
        <li>Media Center</li>
        <li>Investors Relations</li>
        <li>Carrers</li>
        <li>Terms Of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Preferences</li>
        <li>Corparate Information</li>
        <li>Contact Us</li>
      </ul>
      <p className='copyright-text'></p>
    </div>
  )
}

export default Footer
