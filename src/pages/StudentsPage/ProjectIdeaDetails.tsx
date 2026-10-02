import './ExploreIdeas.scss';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FitnessCenterOutlinedIcon from '@mui/icons-material/FitnessCenterOutlined';
import ForestOutlinedIcon from '@mui/icons-material/ForestOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import SwapHorizOutlinedIcon from '@mui/icons-material/SwapHorizOutlined';
import WalletOutlinedIcon from '@mui/icons-material/WalletOutlined';
import { Link, useParams } from 'react-router-dom';
import { useState, type ChangeEvent, type ElementType, type FormEvent } from 'react';
import { projectIdeas, type ProjectIdea } from '../../data/projectIdeas';

const icons: Record<ProjectIdea['icon'], ElementType> = { leaf: PublicOutlinedIcon, wallet: WalletOutlinedIcon, heart: FavoriteBorderOutlinedIcon, plant: ForestOutlinedIcon, swap: SwapHorizOutlinedIcon, cart: LocalMallOutlinedIcon, translate: LanguageOutlinedIcon, fitness: FitnessCenterOutlinedIcon, travel: PublicOutlinedIcon, shield: SecurityOutlinedIcon, study: SchoolOutlinedIcon, community: PeopleAltOutlinedIcon };
const courses = ['B.Tech / B.E. (Computer Science / IT)', 'M.Tech (Computer Science / IT)', 'BCA / BCA (Honours)', 'MCA', 'B.Sc. Computer Science / IT', 'B.Voc. Software Development', 'Diploma in Computer Engineering', 'Other software / computing course'];
const years = ['Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5', 'Final semester', 'Recently graduated'];
type Enquiry = { name: string; college: string; course: string; year: string; team: string; email: string; phone: string; message: string };
const initialEnquiry: Enquiry = { name: '', college: '', course: '', year: '', team: '', email: '', phone: '', message: '' };

export default function ProjectIdeaDetails() {
    const { ideaId } = useParams(); const idea = projectIdeas.find(item => item.id === ideaId); const [enquiry, setEnquiry] = useState(initialEnquiry); const [sent, setSent] = useState(false);
    if (!idea) return <main className="idea-not-found"><h1>Project idea not found.</h1><Link to="/services/students/projects/explore-ideas">Back to ideas <ArrowBackIcon /></Link></main>;
    const Icon = icons[idea.icon]; const update = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => setEnquiry(current => ({ ...current, [event.target.name]: event.target.value })); const submit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setSent(true); };
    return <main className="idea-detail-page">
        <nav className="ideas-breadcrumb" aria-label="Breadcrumb"><Link to="/">Home</Link><span>›</span><Link to="/services/students">Students</Link><span>›</span><Link to="/services/students/projects/explore-ideas">Project Ideas</Link><span>›</span><strong>{idea.title}</strong></nav>
        <section className="idea-detail-hero"><Link className="idea-back" to="/services/students/projects/explore-ideas"><ArrowBackIcon /> All project ideas</Link><span className="idea-detail-icon"><Icon /></span><p className="ideas-eyebrow"><span />{idea.domain}</p><h1>{idea.title}</h1><p>{idea.description}</p><div>{idea.tags.map(tag => <span key={tag}>{tag}</span>)}<span className={`idea-level ${idea.level.toLowerCase()}`}>{idea.level}</span></div></section>
        <section className="idea-overview" aria-labelledby="idea-overview-title"><div><p className="ideas-eyebrow"><span />PROJECT OVERVIEW</p><h2 id="idea-overview-title">A solid learning project, without giving away the blueprint.</h2><p>This concept gives you enough room to demonstrate your practical skills while keeping the exact implementation flexible and truly your own.</p></div><div className="idea-overview-card"><h3>What it can include</h3><ul>{idea.highlights.map(item => <li key={item}><CheckCircleRoundedIcon />{item}</li>)}</ul><h3>What you can learn</h3><ul>{idea.learning.map(item => <li key={item}><CheckCircleRoundedIcon />{item}</li>)}</ul></div></section>
        <section className="idea-enquiry" aria-labelledby="idea-enquiry-title"><div className="idea-enquiry-copy"><p className="ideas-eyebrow"><span />INTERESTED IN THIS IDEA?</p><h2 id="idea-enquiry-title">Liked this project? Want to build it for yourself?</h2><p>Tell us a little about your course, team and goals. We’ll use these details to suggest the right way to approach this idea. No message is sent yet—EmailJS can be connected later.</p><RocketLaunchOutlinedIcon /></div>{sent ? <div className="idea-sent"><CheckCircleRoundedIcon /><h3>Your interest is saved for this session.</h3><p>Thanks, {enquiry.name || 'student'}! Once EmailJS is connected, this will send directly to the Codemure team.</p><button onClick={() => { setSent(false); setEnquiry(initialEnquiry); }}>Send another enquiry</button></div> : <form onSubmit={submit}><label>Name <em>*</em><input required name="name" value={enquiry.name} onChange={update} placeholder="Your full name" /></label><label>College & location <em>*</em><input required name="college" value={enquiry.college} onChange={update} placeholder="College name, city and country" /></label><label>Course <em>*</em><select required name="course" value={enquiry.course} onChange={update}><option value="" disabled>Select your course</option>{courses.map(course => <option key={course}>{course}</option>)}</select></label><label>Year <em>*</em><select required name="year" value={enquiry.year} onChange={update}><option value="" disabled>Select your year</option>{years.map(year => <option key={year}>{year}</option>)}</select></label><label>Team size<select name="team" value={enquiry.team} onChange={update}><option value="">Select team size</option><option>Just me</option><option>2 members</option><option>3 members</option><option>4 members</option><option>5+ members</option></select></label><label>Email address <em>*</em><input required type="email" name="email" value={enquiry.email} onChange={update} placeholder="you@example.com" /></label><label>Phone / WhatsApp <em>*</em><input required type="tel" name="phone" value={enquiry.phone} onChange={update} placeholder="Include country code if outside India" /></label><label>What would you like help with?<textarea name="message" value={enquiry.message} onChange={update} placeholder="Tell us about your timeline or questions (optional)" /></label><button type="submit">Save my interest <ArrowForwardIcon /></button></form>}</section>
    </main>;
}
