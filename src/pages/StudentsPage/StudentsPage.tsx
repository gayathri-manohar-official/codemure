import './StudentsHub.scss';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import { Link } from 'react-router-dom';
import studentVisual from '../../assets/images/students-bg.webp';
import internshipVisual from '../../assets/images/business-bg.webp';

const features = [
    { icon: SchoolOutlinedIcon, title: 'Built for students', description: 'Clear, friendly guidance at every stage.' },
    { icon: Groups2OutlinedIcon, title: 'Mentor-led support', description: 'Learn with help from people who build.' },
    { icon: WorkspacePremiumOutlinedIcon, title: 'Career-ready outcomes', description: 'Create work you can confidently show.' }
];

export default function StudentsPage() {
    return <main className="student-hub-page">
        <section className="student-hub-hero" aria-labelledby="student-hub-title">
            <p className="student-hub-eyebrow"><span />FOR STUDENTS</p>
            <h1 id="student-hub-title">Your next step <span>starts here.</span></h1>
            <p>Whether you want to build an impressive academic project or get real-world experience through an internship, Codemure gives you a focused path forward.</p>
            <a className="student-hub-scroll" href="#student-paths">Explore your options <ArrowForwardIcon /></a>
        </section>

        <section className="student-hub-paths" id="student-paths" aria-labelledby="student-paths-title">
            <div className="student-hub-heading"><div><p className="student-hub-eyebrow"><span />CHOOSE YOUR PATH</p><h2 id="student-paths-title">Support that moves you forward.</h2></div><p>Choose the experience that matches your goals right now. You can always come back for the other one later.</p></div>
            <div className="student-path-cards">
                <article className="student-path-card student-path-projects"><img src={studentVisual} alt="" /><div className="student-path-content"><span className="student-path-icon"><AutoStoriesOutlinedIcon /></span><p className="student-path-label">PROJECT SUPPORT</p><h3>Build a project<br />you’re proud of.</h3><p>From the first idea to your final presentation, get practical project support, mentorship, documentation help and viva preparation.</p><Link to="/services/students/projects">Explore Project Support <ArrowForwardIcon /></Link></div></article>
                <article className="student-path-card student-path-internship"><img src={internshipVisual} alt="" /><div className="student-path-content"><span className="student-path-icon"><RocketLaunchOutlinedIcon /></span><p className="student-path-label">ONLINE INTERNSHIPS</p><h3>Learn by building<br />for the real world.</h3><p>Develop in-demand skills through guided online internship experiences, practical tasks and work that grows your confidence.</p><Link to="/services/students/internship">Explore Internships <ArrowForwardIcon /></Link></div></article>
            </div>
        </section>

        <section className="student-hub-features" aria-label="How Codemure supports students">{features.map(feature => { const Icon = feature.icon; return <article key={feature.title}><span><Icon /></span><div><h3>{feature.title}</h3><p>{feature.description}</p></div></article>; })}</section>
        <section className="student-hub-cta"><BoltOutlinedIcon /><div><p>NOT SURE WHICH PATH TO TAKE?</p><h2>Let’s figure it out together.</h2></div><Link to="/contact">Talk to us <ArrowForwardIcon /></Link></section>
    </main>;
}
