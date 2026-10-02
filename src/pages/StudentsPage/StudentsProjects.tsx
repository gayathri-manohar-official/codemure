import './StudentsPage.scss';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import LiveHelpOutlinedIcon from '@mui/icons-material/LiveHelpOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import PresentToAllOutlinedIcon from '@mui/icons-material/PresentToAllOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import { Link } from 'react-router-dom';
import studentVisual from '../../assets/images/students-bg.webp';
import type { ElementType } from 'react';

type IconComponent = ElementType<{ className?: string }>;
type Benefit = { icon: IconComponent; title: string; description: string };

const quickBenefits: Benefit[] = [
    { icon: AutoStoriesOutlinedIcon, title: 'Practical Learning', description: 'Not just code, real understanding.' },
    { icon: SupportAgentOutlinedIcon, title: 'Flexible Support', description: 'Choose what you need.' },
    { icon: PresentToAllOutlinedIcon, title: 'Online Sessions', description: 'Learn from anywhere.' },
    { icon: SchoolOutlinedIcon, title: 'Completion Support', description: 'Be ready for presentations and viva.' }
];
const options: Benefit[] = [
    { icon: DescriptionOutlinedIcon, title: 'I Have My Own Project Idea', description: 'Already have a project idea? Let’s turn it into a well-structured, feasible and impressive project.' },
    { icon: LightbulbOutlinedIcon, title: 'Explore Our Project Ideas', description: 'Don’t have an idea yet? Browse our curated list of project concepts across different domains and technologies.' },
    { icon: Groups2OutlinedIcon, title: 'Let’s Brainstorm Together', description: 'Not sure what to build? Let’s discuss your interests, requirements and possibilities to find the perfect project idea.' }
];
const studentBenefits: Benefit[] = [
    { icon: SchoolOutlinedIcon, title: 'Expert Guidance', description: 'Learn from industry experience.' },
    { icon: VerifiedOutlinedIcon, title: 'Modern Technologies', description: 'Work with in-demand tools and frameworks.' },
    { icon: DescriptionOutlinedIcon, title: 'Documentation Support', description: 'Get help with reports, PPT and more.' },
    { icon: AutoStoriesOutlinedIcon, title: 'Knowledge Transfer', description: 'Understand the code and concepts.' },
    { icon: LiveHelpOutlinedIcon, title: 'Viva Preparation', description: 'Be ready for technical questions.' },
    { icon: MenuBookOutlinedIcon, title: 'Flexible Plans', description: 'Choose the support level you need.' }
];

function Eyebrow({ children }: { children: string }) { return <p className="student-eyebrow"><span aria-hidden="true" />{children}</p>; }
function IconTile({ icon: Icon }: { icon: IconComponent }) { return <span className="student-icon-tile"><Icon /></span>; }
function SmallBenefit({ benefit, headingLevel = 'h3' }: { benefit: Benefit; headingLevel?: 'h2' | 'h3' }) { const Heading = headingLevel; return <article className="student-small-benefit"><IconTile icon={benefit.icon} /><div><Heading>{benefit.title}</Heading><p>{benefit.description}</p></div></article>; }

export default function StudentsProjects() {
    return <main className="students-page">
        <section className="students-hero" aria-labelledby="students-title">
            <div className="students-hero-copy"><Eyebrow>FOR STUDENTS</Eyebrow><h1 id="students-title">Turn Your <span>Ideas Into Reality</span></h1><p>Project assistance, technical mentorship and practical learning support for B.Tech, BCA, MCA and Diploma students. Build, understand and present your project with confidence.</p><div className="student-actions"><Link className="student-button student-button-primary" to="/contact">Get Started <ArrowForwardIcon /></Link><a className="student-button student-button-secondary" href="#student-options">Explore Project Ideas <ArrowForwardIcon /></a></div></div>
            <div className="students-hero-art" aria-label="Student support and learning"><img src={studentVisual} alt="" /><p className="student-handwriting">Learn<br />Build<br />Grow</p><div className="student-support-list"><p><CheckCircleRoundedIcon /> Real Guidance</p><p><CheckCircleRoundedIcon /> Hands-on Support</p><p><CheckCircleRoundedIcon /> Documentation Help</p><p><CheckCircleRoundedIcon /> Online Sessions</p><p><CheckCircleRoundedIcon /> Viva Preparation</p></div></div>
        </section>
        <section className="student-quick-benefits" aria-label="Student support highlights">{quickBenefits.map(benefit => <SmallBenefit key={benefit.title} benefit={benefit} headingLevel="h2" />)}</section>
        <section className="student-options-section" id="student-options" aria-labelledby="student-options-title"><Eyebrow>HOW DO YOU WANT TO START?</Eyebrow><h2 id="student-options-title">Need Project Assistance?</h2><p className="student-section-intro">Choose the option that fits your current situation and let’s get started.</p><div className="student-options-grid">{options.map((option, index) => <article className="student-option-card" key={option.title}><IconTile icon={option.icon} /><h3>{option.title}</h3><p>{option.description}</p>{index === 1 ? <Link to="/services/students/projects/explore-ideas">Explore Ideas <ArrowForwardIcon /></Link> : <Link to={index === 0 ? '/services/students/projects/own-project-idea' : '/services/students/projects/brainstorm-idea'}>{index === 0 ? 'Get Started' : 'Start Brainstorming'} <ArrowForwardIcon /></Link>}</article>)}</div></section>
        <section className="student-benefits-section" id="student-benefits" aria-labelledby="student-benefits-title"><Eyebrow>WHY CHOOSE CODEMURE?</Eyebrow><h2 id="student-benefits-title">More Than Just a Project</h2><p className="student-section-intro">We don’t just help you complete a project. We help you learn, understand and present it confidently.</p><div className="student-benefits-grid">{studentBenefits.map(benefit => <SmallBenefit key={benefit.title} benefit={benefit} />)}</div></section>
        <section className="students-cta" aria-labelledby="students-cta-title"><div><Eyebrow>READY TO START?</Eyebrow><h2 id="students-cta-title">Let’s build your future together.</h2><p>Have questions? We’re here to help you at every step.</p><Link className="student-button student-button-primary" to="/contact">Contact Us <ArrowForwardIcon /></Link></div><blockquote>“A project you understand is more valuable than a project you just submit.”<cite>— Codemure</cite></blockquote><span className="student-wave" aria-hidden="true" /></section>
    </main>;
}
