import './Navbar.scss'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import logo from '../../assets/logos/white-text.svg';
import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export default function Navbar() {

    const location = useLocation();

    const isHomePage = location.pathname === "/";
    const [activeSection, setActiveSection] = useState("home");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleSectionNavigation = (sectionId: string) => {
        const currentSection = document.getElementById(sectionId);

        if (!currentSection) return;

        setActiveSection(sectionId);

        window.history.replaceState(
            null,
            "",
            `/#${sectionId}`
        );

        currentSection.scrollIntoView(
            {
                behavior: "smooth",
                block: "start"
            }
        );
    }

    useEffect(() => {

        if (!isHomePage) return;

        const sectionIds = [
            "home",
            "about",
            // "products",
            "tools",
            "services",
            "process",
        ]; //we need only these sections 

        const sections = sectionIds
            .map(id => document.getElementById(id))
            .filter((section): section is HTMLElement => section !== null); //just filtering out any null values, fail safe

        const updateActiveSection = () => {
            const navbarHeight = document.querySelector('.navbar')?.clientHeight ?? 0;
            const sectionAtTop = sections.reduce<HTMLElement | null>((currentSection, section) => {
                if (section.getBoundingClientRect().top <= navbarHeight + 1) {
                    return section;
                }

                return currentSection;
            }, null);

            const id = sectionAtTop?.id ?? sections[0]?.id;

            if (!id) return;

            setActiveSection(id);
            window.history.replaceState(null, "", `/#${id}`);
        };

        updateActiveSection();
        window.addEventListener('scroll', updateActiveSection, { passive: true });

        return () => window.removeEventListener('scroll', updateActiveSection);

    }, [isHomePage]);

    useEffect(() => {
        setIsMenuOpen(false);
    }, [location]);

    const navLinks = [
        { id: "home", label: "Home" },
        { id: "about", label: "About" },
        { id: "tools", label: "Tools"},
        // { id: "products", label: "Products" },
        { id: "services", label: "Services" },
        { id: "process", label: "Process" },
    ];

    const menuOpenScrollPosition = useRef(0);

    useEffect(() => {

    if (!isMenuOpen) return;

    const handleScroll = () => {

        const distanceScrolled =
            Math.abs(window.scrollY - menuOpenScrollPosition.current);

        if (distanceScrolled > 80) {
            setIsMenuOpen(false);
        }

    };

    window.addEventListener("scroll", handleScroll);

    return () => {
        window.removeEventListener("scroll", handleScroll);
    };

}, [isMenuOpen]);

    return (
        <div className="navbar">
            <div className="nav-left">
                <Link to="/" aria-label="Codemure home"><img src={logo} alt="Codemure logo" /></Link>
            </div>

            <div className="nav-right">
                {
                    isHomePage ? (
                        <ul className="links">
                            {navLinks.map(link => (
                                <li key={link.id} className="link">
                                    <a
                                        href={`#${link.id}`}
                                        className={activeSection === link.id ? "active" : ""}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleSectionNavigation(link.id);
                                        }}
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <ul className="links">
                            <li className="link">
                                <Link to="/" className='home'>Home</Link>
                            </li>
                        </ul>
                    )
                }
                <div className="nav-actions">
                    <Link to='/contact' className="contact-btn primary-btn" >Contact Us <ArrowForwardIcon className='arrow-icon' /></Link>
                    <Link to='/projects' className="contact-btn secondary-btn" >View Portfolio <ArrowForwardIcon className='arrow-icon' /></Link>
                </div>

            </div>

            <div className="menu-icon-container">
                <MenuIcon className='icon' onClick={() => {
                    menuOpenScrollPosition.current = window.scrollY;
                    setIsMenuOpen(true);
                }} />
            </div>

            <div className={`nav-mobile ${isMenuOpen ? "active" : "inactive"}`}>
                <div className="close-icon-container" onClick={() => setIsMenuOpen(false)}>
                    <CloseIcon className='icon' />
                </div>
                {
                    isHomePage ? (
                        <ul className="links">
                            {navLinks.map(link => (
                                <li key={link.id} className="link">
                                    <a
                                        href={`#${link.id}`}
                                        className={activeSection === link.id ? "active" : ""}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleSectionNavigation(link.id);
                                        }}
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <ul className="links">
                            <li className="link">
                                <Link to="/" className='home'>Home</Link>
                            </li>
                        </ul>
                    )
                }

                <div className="nav-actions">
                    <Link to='/contact' className="contact-btn primary-btn" >Contact Us <ArrowForwardIcon className='arrow-icon' /></Link>
                    <Link to='/projects' className="contact-btn secondary-btn" >View Portfolio <ArrowForwardIcon className='arrow-icon' /></Link>
                </div>
            </div>

        </div>
    )
}