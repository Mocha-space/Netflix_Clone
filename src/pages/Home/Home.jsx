
import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar.jsx'
import Hero_banner from '../../assets/hero_banner.jpg'
import HeroTitle from '../../assets/hero_title.png'
import PlayIcon from '../../assets/play_icon.png'
import InfoIcon from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards.jsx'
import Footer from '../../components/Footer/Footer.jsx'

function Home() {
  return (
    <div className='home'>
      <Navbar/>
      <div className='hero'>
        <img src={Hero_banner} alt="" className='banner-img'/>
        <div className='hero-caption'>
          <img src={HeroTitle} alt="" className='caption-img'/>
            <p>Discovering his ties to a secret incient order, a young man living in mordern Instabul embarks on a quest to save the city from immortal enemy.</p>
              <div className='hero-btns'>
                <button className='btn'><img src={PlayIcon} alt="" />Play</button>
                <button className='btn dark-btn'><img src={InfoIcon} alt="" />More Info</button>
              </div>
                <TitleCards/>
        </div>
      </div>
        <div className='more-cards'>
        <TitleCards title={"Blockbuster Movies"} category={"top_rated"}/>
        <TitleCards title={"Only On NetFlix"} category={"popular"}/>
        <TitleCards title={"Upcoming"} category={"upcoming"}/>
        <TitleCards title={"Top Picks For You"} category={"now_playing"}/>
        </div>
        <Footer/>
    </div>
  )
}

export default Home
