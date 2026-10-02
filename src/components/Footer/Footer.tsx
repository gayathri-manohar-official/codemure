import './Footer.scss'
import BlackLogo from '../../assets/logos/black-text.svg';
import WhiteLogo from '../../assets/logos/white-text.svg';
import GitHubIcon from '@mui/icons-material/GitHub';;
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useLocation, Link, matchPath } from 'react-router-dom';

export default function Footer() {

    const location = useLocation();

    const isProjectsPage = Boolean(
        matchPath('/projects', location.pathname) || matchPath('/projects/:projectId', location.pathname)
    );

    return (
        <footer className={`footer ${isProjectsPage ? 'footer-projects' : ''}`}>
            <div className="footer-main-section">
                <div className="brand-info">
                    <Link to="/" aria-label="Codemure home"><img src={isProjectsPage ? WhiteLogo : BlackLogo} className='codemure-logo' alt="Codemure logo" /></Link>
                    <p className="description">We are a product engineering studio building modern, scalable and meaningful digital products</p>
                    <div className="footer-socials">
                        <a aria-label="Instagram" href="https://www.instagram.com/codemure.official?igsi=MTd2d2g5eXN1OW9wNQ%3D%3D&utm_source=qr" target="_blank" rel='noopener noreferrer'><InstagramIcon className='social-icon' /></a>
                        <a aria-label="WhatsApp" href="https://wa.me/8590542579" target="_blank" rel='noopener noreferrer'><WhatsAppIcon className='social-icon' /></a>
                        <a aria-label="GitHub" href="https://github.com/codemure-official" target="_blank" rel='noopener noreferrer'><GitHubIcon className='social-icon' /></a>
                        <a aria-label="LinkedIn" href="https://www.linkedin.com/company/codemure" target="_blank" rel='noopener noreferrer'><LinkedInIcon className='social-icon' /></a>
                        <a aria-label="YouTube" href="https://www.youtube.com/@codemureofficial" target="_blank" rel='noopener noreferrer'><YouTubeIcon className='social-icon' /></a>
                    </div>
                </div>
                <div className="footer-nav">
                    <div className="footer-links-container">
                        <h2 style={{
                                    color: "var(--purple)",
                                    textDecoration:"underline"
                                }}>Company</h2>
                        <ul>
                            <li><Link to="/#about" style={{
                                color: "var(--purple)"
                            }}> About Us</Link></li>
                            <li><Link to="/#process" style={{
                                color: "var(--purple)"
                            }}>Our Process</Link></li>
                            <li><Link to="/contact" style={{
                                color: "var(--purple)"
                            }}>Contact</Link></li>
                        </ul>
                    </div>
                    <div className="footer-links-container">
                        <h2 style={{
                                    color: "var(--purple)",
                                    textDecoration:"underline"
                            }}>Products</h2>
                        <ul>
                            <Link
                                to={"/projects"}
                                style={{
                                    color: "var(--purple)"
                                }}
                            >All Products</Link>
                            <Link
                                to={"/projects"}
                                style={{
                                    color: "var(--purple)"
                                }}
                            >Case Studies</Link>
                        </ul>
                    </div>
                    <div className="footer-links-container">
                        <h2>Services</h2>
                        <ul>
                            <li><Link to="/services/business">Web Development</Link></li>
                            <li><Link to="/services/business">Mobile Development</Link></li>
                            <li><Link to="/services/business">SaaS Development</Link></li>
                            <li><Link to="/services/business">AI Solutions</Link></li>
                            <li><Link to="/services/business">Product Design</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-cta">
                    <p className="eyebrow">LET'S CREATE</p>
                    <h2>Have a project in mind?</h2>
                    <p>Tell us what you want to build. We’ll help you turn the next idea into something meaningful.</p>
                    <Link className="footer-cta-button" to="/contact">
                        Start a conversation <ArrowForwardIcon />
                    </Link>
                </div>
            </div>
            <div className="footer-copyright-section">
                <p>© {new Date().getFullYear()} Codemure. All rights reserved.</p>
                <div className='copyright-section-links'>
                    <p className="copyright-section-link"><Link to='/privacy-policy' >Privacy Policy</Link></p>
                    <p className="copyright-section-link"><Link to='/terms-of-service' >Terms of Service</Link></p>
                </div>
            </div>

        </footer>
    )
}
