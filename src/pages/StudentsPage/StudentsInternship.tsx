import './StudentsInternship.scss';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
import LiveHelpOutlinedIcon from '@mui/icons-material/LiveHelpOutlined';
import MilitaryTechOutlinedIcon from '@mui/icons-material/MilitaryTechOutlined';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import { Link } from 'react-router-dom';
import laptopVisual from '../../assets/images/business-bg.webp';
import { internshipPrograms } from '../../data/internshipPrograms';

const quickBenefits = [
    { icon: Groups2OutlinedIcon, title: 'Live Online Sessions', description: 'Learn from industry experience.' },
    { icon: CodeOutlinedIcon, title: 'Hands-on Projects', description: 'Build real applications.' },
    { icon: LiveHelpOutlinedIcon, title: 'Doubt Support', description: 'Get help throughout.' },
    { icon: MilitaryTechOutlinedIcon, title: 'Completion Certificate', description: 'Receive a certificate on successful completion.' }
];
const learningPoints = [
    { icon: CodeOutlinedIcon, title: 'Modern Development Tools', description: 'VS Code, Git, GitHub and more.' },
    { icon: RocketLaunchOutlinedIcon, title: 'Real-world Project Development', description: 'Build from scratch to deployment.' },
    { icon: SchoolOutlinedIcon, title: 'Best Practices', description: 'Clean code and useful project structure.' },
    { icon: AutoStoriesOutlinedIcon, title: 'API Integration', description: 'Work with real or mock APIs.' },
    { icon: RocketLaunchOutlinedIcon, title: 'Deployment', description: 'Vercel, Expo and more.' },
    { icon: LiveHelpOutlinedIcon, title: 'Interview & Viva Preparation', description: 'Be ready for technical discussions.' }
];

export default function StudentsInternship() {
    return <main className="internship-page">
        <nav className="internship-breadcrumb" aria-label="Breadcrumb"><Link to="/">Home</Link><span>›</span><Link to="/services/students">Students</Link><span>›</span><strong>Internships</strong></nav>
        <section className="internship-hero" aria-labelledby="internship-title"><div><p className="internship-eyebrow"><span />SHORT-TERM INTERNSHIPS</p><h1 id="internship-title">Learn. Build. Grow.<span>With Real Projects.</span></h1><p>Hands-on, project-based internships designed for B.Tech, BCA, MCA and Diploma students. Learn modern technologies, build real applications and earn a completion certificate from Codemure.</p><div><a className="internship-primary" href="#internship-programs">Join an Internship <ArrowForwardIcon /></a><a className="internship-secondary" href="#internship-curriculum">View Curriculum</a></div></div><div className="internship-hero-art" aria-label="Modern programming workspace"><img src={laptopVisual} alt="" /><p>Learn<br />Build<br />Implement</p><div>{['React', 'React Native', 'JavaScript', 'TypeScript', 'Next.js', 'Expo'].map(item => <span key={item}>{item}</span>)}</div></div></section>
        <section className="internship-quick-benefits" aria-label="Internship benefits">{quickBenefits.map(benefit => { const Icon = benefit.icon; return <article key={benefit.title}><span><Icon /></span><div><h2>{benefit.title}</h2><p>{benefit.description}</p></div></article>; })}</section>
        <section className="internship-programs" id="internship-programs" aria-labelledby="internship-programs-title"><header><div><p className="internship-eyebrow"><span />CHOOSE YOUR PROGRAM</p><h2 id="internship-programs-title">Our Internship Programs</h2><p>Practical, focused and project-based internships to help you build real skills.</p></div><a href="#internship-curriculum">Compare Programs <ArrowForwardIcon /></a></header><div className="internship-program-grid">{internshipPrograms.map(program => <article className="internship-program-card" key={program.id}><span className={`program-badge ${program.level.toLowerCase().replace(' ', '-')}`}>{program.level}</span><span className="program-icon"><CodeOutlinedIcon /></span><h3>{program.title}</h3><p>{program.description}</p><ul><li><CheckCircleRoundedIcon />{program.duration}</li>{program.features.map(feature => <li key={feature}><CheckCircleRoundedIcon />{feature}</li>)}</ul><footer><strong>{program.price}</strong><Link to={`/services/students/internship/${program.id}`}>View Details <ArrowForwardIcon /></Link></footer></article>)}<aside><span><SchoolOutlinedIcon /></span><h3>Get Certified,<br />Showcase Your Skills</h3><p>Receive a certificate of internship completion from Codemure after successfully completing the program and project.</p><ul><li><CheckCircleRoundedIcon />Verifiable certificate</li><li><CheckCircleRoundedIcon />Add to LinkedIn & Resume</li><li><CheckCircleRoundedIcon />Showcase your project</li><li><CheckCircleRoundedIcon />Build real skills</li></ul></aside></div></section>
        <section className="internship-learning" id="internship-curriculum" aria-labelledby="internship-learning-title"><div><h2 id="internship-learning-title">What You’ll Learn</h2><p>Gain practical skills that you can apply in real-world projects.</p><div>{learningPoints.map(point => { const Icon = point.icon; return <article key={point.title}><span><Icon /></span><div><h3>{point.title}</h3><p>{point.description}</p></div></article>; })}</div></div><aside><h2>Ready to level up<br />your skills?</h2><p>Join our internship program and build something amazing.</p><a href="#internship-programs">Join Now <ArrowForwardIcon /></a></aside></section>
    </main>;
}
