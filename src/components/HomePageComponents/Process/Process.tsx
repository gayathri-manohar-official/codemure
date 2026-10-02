import './Process.scss';
import CircleIcon from '@mui/icons-material/Circle';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import DesignServicesOutlinedIcon from '@mui/icons-material/DesignServicesOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ReactLogo from '../../../assets/logos/react-logo.svg';
import NextJsLogo from '../../../assets/logos/nextJs-logo.svg';
import TypeScriptLogo from '../../../assets/logos/TypeScript-logo.svg';
import ReactNativeLogo from '../../../assets/logos/react-native-logo.svg';
import SupabaseLogo from '../../../assets/logos/supabase-logo.svg';
import PostgreSQLLogo from '../../../assets/logos/postgreSQL-logo.svg';
import VercelLogo from '../../../assets/logos/vercel-logo.svg';
import TailwindCSSLogo from '../../../assets/logos/tailwind-css-logo.svg';
import PaperPlane from '../../../assets/icons/paper-plane.svg';
import FaqEngineeringIllustration from '../../../assets/images/faq-engineering-illustration.png';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


export default function Process() {

    const navigate = useNavigate();
    const [openFaqId, setOpenFaqId] = useState<number | null>(1);

    const processes = [
        {
            id: 1,
            icon: LightbulbOutlinedIcon,
            title: "Discover",
            description: "We understand your idea, goals and target audience."
        },
        {
            id: 2,
            icon: DesignServicesOutlinedIcon,
            title: "Design",
            description: "We design intuitive UI/UX that users love."
        },
        {
            id: 3,
            icon: CodeOutlinedIcon,
            title: "Develop",
            description: "We build scalable and efficient software."
        },
        {
            id: 4,
            icon: RocketLaunchOutlinedIcon,
            title: "Launch",
            description: "We deploy and launch your product."
        },
        {
            id: 5,
            icon: TrendingUpIcon,
            title: "Grow",
            description: "We support, maintain, and optimize your app."
        }
    ];


    const stats = [
        {
            id: 1,
            mainText: "10+",
            subText: "Products Built"
        },
        {
            id: 2,
            mainText: "5+",
            subText: "Happy Clients"
        },
        {
            id: 3,
            mainText: "100%",
            subText: "Tailored Solutions"
        },
        {
            id: 4,
            mainText: "Scalable",
            subText: "Ready to Grow"
        },
        {
            id: 5,
            mainText: "Secure",
            subText: "Privacy-Minded Builds"
        },
    ];

    const techStack = [
        {
            id: 1,
            src: ReactLogo,
            alt: "React"
        },
        {
            id: 2,
            src: NextJsLogo,
            alt: "Next.js"
        },
        {
            id: 3,
            src: TypeScriptLogo,
            alt: "TypeScript"
        },
        {
            id: 4,
            src: ReactNativeLogo,
            alt: "React Native"
        },
        {
            id: 5,
            src: SupabaseLogo,
            alt: "Supabase"
        },
        {
            id: 6,
            src: PostgreSQLLogo,
            alt: "PostgreSQL"
        },
        {
            id: 7,
            src: VercelLogo,
            alt: "Vercel"
        },
        {
            id: 8,
            src: TailwindCSSLogo,
            alt: "Tailwind CSS"
        }
    ];

    const faqs = [
        {
            id: 1,
            question: 'Why should I hire Codemure?',
            answer: 'We combine thoughtful design, reliable engineering, and clear communication to turn your idea into a product that is practical, polished, and ready to grow.'
        },
        {
            id: 2,
            question: 'What services are included in Codemure college project packages?',
            answer: 'Our college project packages can include project planning, UI/UX design, web or mobile development, database and API integration, deployment support, documentation, and a clear walkthrough of your final project.'
        },
        {
            id: 3,
            question: 'Can you build both websites and mobile applications?',
            answer: 'Yes. We build responsive websites, web applications, and cross-platform mobile apps, then recommend the right approach based on your goals, users, and budget.'
        },
        {
            id: 4,
            question: 'How do we get started with a project?',
            answer: 'Start with a conversation about your idea, requirements, and timeline. We will help define the scope, recommend a plan, and share the next steps before development begins.'
        },
        {
            id: 5,
            question: 'Will I receive support after launch?',
            answer: 'Yes. We can support your product after launch with fixes, improvements, performance monitoring, and feature updates as your needs evolve.'
        }
    ];

    return (
        <section id='process' className="process-section">
            <div className="process-header-section">
                <div className="main-text-container">
                    <p className='section-heading'><CircleIcon className='bullet-point' /> OUR PROCESS</p>
                    <p className="main-text">From idea to impact. <br />Our proven process.</p>
                </div>
                <div className="sub-text-container">
                    <p>
                        We follow a transparent and collaborative process to ensure every product we build is sucessful.
                    </p>
                </div>
            </div>
            <div className="process-flow-section">
                {
                    processes.map((process) => {
                        const Icon = process.icon;
                        return (
                            <div className="process-card" key={process.id}>
                                <div className="icon-container">
                                    <Icon className='icon' />
                                </div>
                                <p className="title">{`0${process.id}.`} <span>{`${process.title}`}</span></p>
                                <p className="description">{process.description}</p>
                            </div>
                        )
                    })
                }
            </div>
            <div className="stats-section">
                <div className="stats-container">
                    { 
                        stats.map((stat) => (
                            <div className="stat" key={stat.id}>
                                <p className="main-text">{stat.mainText}</p>
                                <p className="sub-text">{stat.subText}</p>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className="tech-stack-section">
                <p className="section-heading"><CircleIcon className='bullet-point' /> MODERN TECHNOLOGY, THOUGHTFUL ENGINEERING</p>
                <div className="tech-stack-wrapper">
                    <div className="tech-stack-container">
                        {[false, true].map((isDuplicate) => (
                            <div className="tech-stack-track" aria-hidden={isDuplicate || undefined} key={String(isDuplicate)}>
                                {techStack.map((logo) => (
                                    <img key={`${isDuplicate}-${logo.id}`} src={logo.src} alt={isDuplicate ? '' : logo.alt} />
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="contact-us-section">
                <div className="icon-container">
                    <img src={PaperPlane} alt="" />
                </div>
                <div className="text-content">
                    <p className="main-text">Have an idea?</p>
                    <p className="sub-text">Let's build something amazing together.</p>
                </div>
                <button className='primary-btn' onClick={() => navigate('/contact')}>
                    Let's talk <ArrowForwardIcon className='arrow-icon' />
                </button>
            </div>

            <div className="faq-questions">
                <div className="faq-content">
                    <div className="faq-heading">
                        <p className="section-heading"><CircleIcon className='bullet-point' /> FREQUENTLY ASKED QUESTIONS</p>
                        <p className="main-text">A few answers before we start.</p>
                    </div>
                    <div className="faq-list">
                        {faqs.map((faq) => {
                            const isOpen = openFaqId === faq.id;

                            return (
                                <div className={`faq-item${isOpen ? ' is-open' : ''}`} key={faq.id}>
                                    <button
                                        aria-controls={`faq-answer-${faq.id}`}
                                        aria-expanded={isOpen}
                                        className="faq-question"
                                        onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                                        type="button"
                                    >
                                        <span>{faq.question}</span>
                                        <ExpandMoreIcon className="faq-icon" />
                                    </button>
                                    <div className="faq-answer" id={`faq-answer-${faq.id}`} hidden={!isOpen}>
                                        <p>{faq.answer}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="faq-visual" aria-hidden="true">
                    <img src={FaqEngineeringIllustration} alt="" />
                </div>
            </div>
        </section>
    )
}
