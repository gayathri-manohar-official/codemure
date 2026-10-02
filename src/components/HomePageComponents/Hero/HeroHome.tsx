import './HeroHome.scss'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import MouseOutlinedIcon from '@mui/icons-material/MouseOutlined';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import phoneImage from '../../../assets/images/mobile-bg.webp';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {

    const [isActive, setIsActive] = useState(false);
    return (
        <section id='home' className="home-hero-section">
            <div className="hero-content">
                <p className={`tagline ${isActive ? "white-tagline" : ""}`}>
                    {
                        isActive ? (
                            <ToggleOnIcon className="toggle-on" onClick={() => setIsActive(false)} />
                        ) : (
                            <ToggleOffIcon className="toggle-off" onClick={() => setIsActive(true)} />
                        )
                    }
                    DESIGN, BUILD, SCALE.
                </p>

                <h1 className="main-text">We build digital products <span>that make an impact.</span></h1>
                <p className="sub-text">Codemure is a product engineering studio crafting modern, scalable and beautifully designed softwares for the future.</p>

                <div className="phone-image-container">
                    <img src={phoneImage} alt="" className='phone-img' />
                </div>
                <div className="button-container">
                    {/* <button className="explore-btn"><a href="#products">Explore Our Work <ArrowForwardIcon className='arrow-icon' /></a></button> */}
                    <button className="explore-btn"><a href="#tools">Explore Our Tools <ArrowForwardIcon className='arrow-icon' /></a></button>
                    <button className="start-project-btn"><Link to="/contact">Start a Project <ArrowForwardIcon className='arrow-icon' /></Link></button>
                </div>
                <p className="scroll-to-explore"><MouseOutlinedIcon className='icon'/> SCROLL TO EXPLORE </p>

            </div>
        </section>
    )
}