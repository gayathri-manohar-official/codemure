import './CaseStudyHero.scss';
import CircleIcon from '@mui/icons-material/Circle';
import TechStackIcon from '../../assets/icons/tech-stack.svg'

interface TechStack{
    techStackName: string,
    logo: string
}


interface caseStudyHeroProps {
    hero: {
        sectionHeading: string,
        title: string,
        description: string,
        platforms: string[],
        techStack: TechStack[],
        heroImage: string
        heroImageMobile: string
    };
}

export default function CaseStudyHero({ hero }: caseStudyHeroProps) {
    return (
        <section className="case-study-hero" style={{ backgroundImage: `url(${hero.heroImage})` }}>
            <div className="section-content">
                <p className='section-heading'><CircleIcon className='bullet-point' />{hero.sectionHeading}</p>
                <h1 className='hero-title'>{hero.title}</h1>
                <p className="hero-description">{hero.description}</p>
                <div className="platform-container">
                    {hero.platforms.map(platform => (
                        <div className="platform-card" key={platform}>
                            <img src={TechStackIcon} alt="" />
                            <p className="platform-name">{platform}</p>
                        </div>
                    ))}
                </div>
                <div className="phone-image-container">
                    <img src={hero.heroImageMobile} alt={hero.title} />
                </div>
                <div className="tech-stack-container">
                    {hero.techStack.map(tech =>(
                        <div className="tech-stack-card" key={tech.techStackName}>
                            <img src={tech.logo} alt={tech.techStackName} />
                            <p className="tech-stack-name">{tech.techStackName}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}