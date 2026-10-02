import './BusinessPage.scss';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import DesignServicesOutlinedIcon from '@mui/icons-material/DesignServicesOutlined';
import DevicesOutlinedIcon from '@mui/icons-material/DevicesOutlined';
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import ViewQuiltOutlinedIcon from '@mui/icons-material/ViewQuiltOutlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import { Link } from 'react-router-dom';
import businessVisual from '../../assets/images/business-bg.webp';
import ntrlImage from '../../assets/images/product-ntrl.webp';
import amaraImage from '../../assets/images/product-amara.webp';
import zelorahImage from '../../assets/images/product-zelorah.webp';
import type { ElementType } from 'react';

type IconComponent = ElementType<{ className?: string }>;
type Service = { icon: IconComponent; title: string; description: string };

const services: Service[] = [
    { icon: LanguageOutlinedIcon, title: 'Websites', description: 'Modern, responsive websites that represent your brand and convert visitors into customers.' },
    { icon: DashboardCustomizeIcon, title: 'Web Applications', description: 'Scalable web apps and dashboards for businesses of all sizes.' },
    { icon: PhoneIphoneOutlinedIcon, title: 'Mobile Applications', description: 'Cross-platform mobile apps for iOS & Android using React Native.' },
    { icon: DesignServicesOutlinedIcon, title: 'UI/UX Design', description: 'User-focused designs that are beautiful, intuitive and effective.' },
    { icon: ViewQuiltOutlinedIcon, title: 'MVP Development', description: 'Validate your idea with a fast, scalable MVP.' },
    { icon: AutoAwesomeIcon, title: 'Existing Product Improvements', description: 'Redesign, optimize or add new features to your current product.' }
];

const projects = [
    { id: 'ntrl', image: ntrlImage, title: 'Fitness Platform', tags: ['Web', 'Mobile', 'UI/UX'], description: 'A fitness platform with web, mobile and admin portal to help users track workouts, progress and wellness goals.' },
    { id: 'zelorah', image: zelorahImage, title: 'Healthcare Platform', tags: ['Web', 'Enterprise', 'UI Engineering'], description: 'Contributed to a production-grade healthcare web application used in real-world clinical and operational workflows.' },
    { id: 'amara', image: amaraImage, title: 'Amara', tags: ['Mobile', 'UI/UX'], description: 'A lifestyle mobile application with a focus on elegant UI/UX and seamless user experience.' }
];

const reasons: Service[] = [
    { icon: WorkspacePremiumOutlinedIcon, title: 'End-to-End Capability', description: 'From idea to launch, we handle design, development and deployment.' },
    { icon: Groups2OutlinedIcon, title: 'Modern Technologies', description: 'We use the latest tools and best practices to build scalable solutions.' },
    { icon: SecurityOutlinedIcon, title: 'Clear Communication', description: 'Regular updates and transparent collaboration throughout the project.' },
    { icon: RocketLaunchOutlinedIcon, title: 'Long-Term Support', description: "We're here even after launch to help you grow and improve." }
];

function Eyebrow({ children }: { children: string }) {
    return <p className="business-eyebrow"><span aria-hidden="true" />{children}</p>;
}

function ServiceCard({ service }: { service: Service }) {
    const Icon = service.icon;
    return <article className="business-service-card"><span className="business-icon"><Icon /></span><h2>{service.title}</h2><p>{service.description}</p></article>;
}

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
    return <article className="business-project-card">
        <img src={project.image} alt={`${project.title} project preview`} />
        <div className="business-project-content">
            <h3>{project.title}</h3>
            <div className="business-project-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
            <p>{project.description}</p>
            <Link to={`/projects/${project.id}`}>View Case Study <ArrowForwardIcon aria-hidden="true" /></Link>
        </div>
    </article>;
}

export default function BusinessPage() {
    return <main className="business-page">
        <section className="business-hero" aria-labelledby="business-hero-title">
            <div className="business-hero-copy">
                <Eyebrow>FOR BUSINESSES</Eyebrow>
                <h1 id="business-hero-title">Digital solutions <span>for real business growth</span></h1>
                <p>We design and build high-performance websites, web applications and mobile experiences that help businesses strengthen their brand, attract customers and achieve their goals.</p>
                <div className="business-actions">
                    <Link className="business-button business-button-primary" to="/contact">Start a Project <ArrowForwardIcon /></Link>
                    <Link className="business-button business-button-secondary" to="/projects">View Our Work <ArrowForwardIcon /></Link>
                </div>
            </div>
            <div className="business-hero-art" aria-label="A modern business dashboard on a laptop">
                <img src={businessVisual} alt="" />
                <span className="idea-pill"><LightbulbOutlinedIcon /> Ideas to Impact <ArrowForwardIcon /></span>
                <span className="users-pill"><Groups2OutlinedIcon /><strong>10K+</strong><small>Happy Users</small></span>
            </div>
        </section>

        <section className="business-services" aria-label="Business services">
            {services.map(service => <ServiceCard key={service.title} service={service} />)}
        </section>

        <section className="business-work" aria-labelledby="selected-work-title">
            <div className="business-section-heading"><div><Eyebrow>SELECTED WORK</Eyebrow><h2 id="selected-work-title">Real projects. Real impact.</h2></div><Link to="/projects" className="business-view-all">View All Projects <ArrowForwardIcon /></Link></div>
            <div className="business-project-grid">{projects.map((project, index) => <ProjectCard key={`${project.title}-${index}`} project={project} />)}</div>
        </section>

        <section className="business-stats" aria-label="Codemure impact">
            <div><span className="business-stat-icon"><Groups2OutlinedIcon /></span><strong>10K+</strong><small>Users (in client projects)</small></div>
            <div><span className="business-stat-icon"><DevicesOutlinedIcon /></span><strong>35+</strong><small>Screens Delivered</small></div>
            <div><span className="business-stat-icon"><LightbulbOutlinedIcon /></span><strong>60+</strong><small>APIs Integrated</small></div>
            <div><span className="business-stat-icon"><WorkspacePremiumOutlinedIcon /></span><strong>High</strong><small>Client Satisfaction</small></div>
        </section>

        <section className="business-why" aria-labelledby="why-codemure-title">
            <div className="business-section-heading business-why-heading"><div><Eyebrow>WHY CODEMURE</Eyebrow><h2 id="why-codemure-title">A partner you can rely on</h2><p>We combine design, development and product thinking to deliver solutions that create real business value.</p></div><Link className="business-button business-button-primary" to="/contact">Start a Project <ArrowForwardIcon /></Link></div>
            <div className="business-reasons">{reasons.map(reason => <ServiceCard key={reason.title} service={reason} />)}</div>
        </section>

        <section className="business-cta" aria-labelledby="business-cta-title">
            <div className="business-cta-copy"><Eyebrow>READY TO BUILD?</Eyebrow><h2 id="business-cta-title">Let's bring your next project to life.</h2><p>Have a project in mind? Let's discuss how we can help you achieve your goals with the right technology and strategy.</p><Link className="business-button business-button-primary" to="/contact">Contact Us <ArrowForwardIcon /></Link><p className="business-cta-note"><span>● ● ● ●</span> Let's build something great together.</p></div>
            <div className="business-orbit" aria-hidden="true" />
        </section>
    </main>;
}
