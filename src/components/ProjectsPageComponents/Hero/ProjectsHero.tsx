import './ProjectsHero.scss';
import CircleIcon from '@mui/icons-material/Circle';
import MouseOutlinedIcon from '@mui/icons-material/MouseOutlined';
import mobileImage from '../../../assets/images/projects-hero-mobile.webp'

export default function ProjectsHero() {
    return (
        <section className="projects-hero-section">
            <div className="section-content">
                <p className='section-heading'><CircleIcon className='bullet-point' />OUR PROJECTS</p>
                <h1 className="main-text">Products that solve <br /> <span>real problems.</span></h1>
                <img src={mobileImage} alt="" className='mobile-image' />
                <p className="sub-text">A growing collection of digital products we've designed, developed and launched.</p>
                <p className="scroll-to-explore"><MouseOutlinedIcon /> SCROLL TO EXPLORE </p>
            </div>
        </section>
    )
}