import './LegalContactCard.scss';
import ChatIcon from '../../assets/icons/chat-icon.svg';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';


interface LegalContactCardProps {
    title: string;
    description: string;
}


export default function LegalContactCard({ title, description }: LegalContactCardProps) {

    const navigate = useNavigate();

    return (
        <section className="legal-contact-card">
            <div className="contact-info">
                <div className="icon-container">
                    <img src={ChatIcon} alt="" />
                </div>
                <div className="text-container">
                    <h2 className="contact-title">{title}</h2>
                    <p className="contact-description">{description}</p>
                </div>
            </div>
            <div className="contact-action">
                <button className="contact-btn" onClick={() => navigate('/contact')}>
                    Contact Us <ArrowForwardIcon className='arrow-icon' />
                </button>
            </div>
        </section>
    )
}