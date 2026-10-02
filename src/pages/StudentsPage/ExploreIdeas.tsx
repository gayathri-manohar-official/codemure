import './ExploreIdeas.scss';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FitnessCenterOutlinedIcon from '@mui/icons-material/FitnessCenterOutlined';
import ForestOutlinedIcon from '@mui/icons-material/ForestOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import SwapHorizOutlinedIcon from '@mui/icons-material/SwapHorizOutlined';
import WalletOutlinedIcon from '@mui/icons-material/WalletOutlined';
import { Link } from 'react-router-dom';
import { useMemo, useState, type ElementType } from 'react';
import { projectIdeas, type ProjectIdea } from '../../data/projectIdeas';

const icons: Record<ProjectIdea['icon'], ElementType> = { leaf: PublicOutlinedIcon, wallet: WalletOutlinedIcon, heart: FavoriteBorderOutlinedIcon, plant: ForestOutlinedIcon, swap: SwapHorizOutlinedIcon, cart: LocalMallOutlinedIcon, translate: LanguageOutlinedIcon, fitness: FitnessCenterOutlinedIcon, travel: PublicOutlinedIcon, shield: SecurityOutlinedIcon, study: AutoStoriesOutlinedIcon, community: PeopleAltOutlinedIcon };
const domains = ['All Domains', ...Array.from(new Set(projectIdeas.map(project => project.domain)))];
const technologies = ['All Technologies', ...Array.from(new Set(projectIdeas.map(project => project.technology)))];
const levels = ['All Levels', 'Beginner', 'Intermediate', 'Advanced'];

function IdeaIcon({ idea }: { idea: ProjectIdea }) { const Icon = icons[idea.icon]; return <span className="idea-icon"><Icon /></span>; }

export default function ExploreIdeas() {
    const [query, setQuery] = useState(''); const [domain, setDomain] = useState('All Domains'); const [technology, setTechnology] = useState('All Technologies'); const [level, setLevel] = useState('All Levels'); const [showAll, setShowAll] = useState(false);
    const filteredIdeas = useMemo(() => projectIdeas.filter(idea => (domain === 'All Domains' || idea.domain === domain) && (technology === 'All Technologies' || idea.technology === technology) && (level === 'All Levels' || idea.level === level) && `${idea.title} ${idea.description} ${idea.tags.join(' ')}`.toLowerCase().includes(query.toLowerCase())), [query, domain, technology, level]);
    const visibleIdeas = showAll ? filteredIdeas : filteredIdeas.slice(0, 8);
    const resetFilters = () => { setQuery(''); setDomain('All Domains'); setTechnology('All Technologies'); setLevel('All Levels'); setShowAll(false); };
    return <main className="explore-ideas-page">
        <nav className="ideas-breadcrumb" aria-label="Breadcrumb"><Link to="/">Home</Link><span>›</span><Link to="/services/students">Students</Link><span>›</span><Link to="/services/students/projects">Project Support</Link><span>›</span><strong>Project Ideas</strong></nav>
        <section className="ideas-hero" aria-labelledby="ideas-title"><div><p className="ideas-eyebrow"><span />PROJECT IDEAS</p><h1 id="ideas-title">Explore Project Ideas <span>Build Something Meaningful</span></h1><p>Not sure what to build? Explore our curated list of project ideas across different domains and technologies. Each idea is designed to be practical, relevant and perfect for learning.</p></div><div className="ideas-hero-art" aria-hidden="true"><p>Find<br />Your Idea<br />Build<br />Your Future</p><span>01</span><span>02</span><span>03</span><span>04</span><div><b>●</b> Real-world ideas<br /><b>●</b> Multiple domains<br /><b>●</b> Beginner to Advanced<br /><b>●</b> Curated by Experts</div></div></section>
        <section className="ideas-filters" aria-label="Filter project ideas"><label><SearchOutlinedIcon /><input value={query} onChange={event => { setQuery(event.target.value); setShowAll(false); }} placeholder="Search project ideas..." /></label><select aria-label="Filter by domain" value={domain} onChange={event => { setDomain(event.target.value); setShowAll(false); }}>{domains.map(value => <option key={value}>{value}</option>)}</select><select aria-label="Filter by technology" value={technology} onChange={event => { setTechnology(event.target.value); setShowAll(false); }}>{technologies.map(value => <option key={value}>{value}</option>)}</select><select aria-label="Filter by level" value={level} onChange={event => { setLevel(event.target.value); setShowAll(false); }}>{levels.map(value => <option key={value}>{value}</option>)}</select></section>
        <section className="ideas-domain-row" aria-label="Quick domain filters"><button className={domain === 'All Domains' ? 'active' : ''} onClick={() => { setDomain('All Domains'); setShowAll(false); }}><SchoolOutlinedIcon />All<br />Ideas</button>{domains.slice(1).map(value => <button className={domain === value ? 'active' : ''} key={value} onClick={() => { setDomain(value); setShowAll(false); }}><AutoStoriesOutlinedIcon />{value}</button>)}</section>
        <section className="ideas-results" aria-labelledby="popular-ideas-title"><header><div><h2 id="popular-ideas-title">{query || domain !== 'All Domains' || technology !== 'All Technologies' || level !== 'All Levels' ? `${filteredIdeas.length} matching ideas` : 'Popular Project Ideas'}</h2><p>A collection of handpicked ideas to help you get started.</p></div>{(query || domain !== 'All Domains' || technology !== 'All Technologies' || level !== 'All Levels') && <button className="ideas-reset" onClick={resetFilters}>Clear filters</button>}{filteredIdeas.length > 8 && <button className="ideas-view-all" onClick={() => setShowAll(value => !value)}>{showAll ? 'Show Less' : 'View All Ideas'} <ArrowForwardIcon /></button>}</header>{visibleIdeas.length ? <div className="idea-grid">{visibleIdeas.map(idea => <article className="idea-card" key={idea.id}><div className="idea-card-top"><IdeaIcon idea={idea} /><span className={`idea-level ${idea.level.toLowerCase()}`}>{idea.level}</span></div><h3>{idea.title}</h3><p>{idea.description}</p><div className="idea-tags">{idea.tags.map(tag => <span key={tag}>{tag}</span>)}</div><Link to={`/services/students/projects/explore-ideas/${idea.id}`}>View Details <ArrowForwardIcon /></Link></article>)}</div> : <div className="ideas-empty"><AutoStoriesOutlinedIcon /><h3>No ideas match those filters.</h3><p>Try a different search term or clear your filters to see every project idea.</p><button onClick={resetFilters}>Show all ideas</button></div>}</section>
        <section className="ideas-cta"><div><p className="ideas-eyebrow"><span />HAVE A DIFFERENT IDEA?</p><h2>Can’t find what you’re looking for?</h2><p>Let’s brainstorm a custom project idea based on your interests, course requirements and skill level.</p></div><Link to="/contact">Let’s Brainstorm <ArrowForwardIcon /></Link></section>
    </main>;
}
