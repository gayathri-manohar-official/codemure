import './Advertisement.scss';
import adImg from '../../../assets/images/contact-page-ad.webp';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';

export default function Advertisement() {
    return (
        <section className="contact-ad-section">
            <div className="section-content">
                <h2 className="section-title">Let's create impact together</h2>
                <p className="section-subtitle">Whether you have a clear roadmap or just an idea, we can help you turn it into a high quality digital product.</p>

                <div className="feature-container">
                    <div className="feature">
                        <CheckCircleOutlinedIcon className='icon'/>
                        <p className="feature-name">Product strategy & consulting</p>
                    </div>
                    <div className="feature">
                        <CheckCircleOutlinedIcon className='icon'/>
                        <p className="feature-name">End-to-end product development</p>
                    </div>
                    <div className="feature">
                        <CheckCircleOutlinedIcon className='icon'/>
                        <p className="feature-name">Long-term support & maintenance</p>
                    </div>
                    
                </div>
            </div>
        <div className="section-image">
            <img src={adImg} alt="Illustration of digital product development services" />
        </div>
        </section>
    )
}