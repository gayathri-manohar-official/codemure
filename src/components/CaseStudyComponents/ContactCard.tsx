import './ContactCard.scss';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';

export default function ContactCard() {
    return (
        <section className="contact-card">
            <div className="card-wrapper">
                <div className="card-content">
                    <div className="icon-container">
                        <RocketLaunchOutlinedIcon className='icon' />
                    </div>
                    <div className="card-text">
                        <h3 className="main-text">Want to build something similar ?</h3>
                        <p className="sub-text">Let's discuss how to bring your idea to life.</p>
                    </div>
                </div>
                
                    <Link className='primary-btn' to='/contact'>Contact Us <ArrowForwardIcon className='arrow-icon'/> </Link>
                
            </div>
        </section>
    )
}