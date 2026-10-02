import './HeroContact.scss';
import CircleIcon from '@mui/icons-material/Circle';
import MobileImg from '../../../assets/images/contact-bg-mobile.webp';

export default function Hero(){
    return(
        <section className="contact-hero-section">
            <div className="section-content">
                <p className='section-heading'><CircleIcon className='bullet-point' /> CONTACT US</p>
                <h1 className="main-text">Let's build something amazing <span>together.</span></h1>
                <img src={MobileImg} alt="" className="mobile-image" />
                <p className="sub-text">Have a project in mind, a question or just want to say hello? We'd love to hear from you.</p>

            </div>
        </section>
    )
}