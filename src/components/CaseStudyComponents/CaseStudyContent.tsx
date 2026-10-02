import './CaseStudyContent.scss';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';

interface Overview{
    heading: string,
    description: string,
}

interface Challenge{
    heading: string,
    description: string,
    challenges: string[]
}

interface Solution{
    heading: string,
    description: string,
    solutions: string[]
}

interface CaseStudyContentProps{
    content:{
        overview: Overview,
        challenge: Challenge,
        solution: Solution

    }
}

export default function CaseStudyContent({content} : CaseStudyContentProps){
    return(
        <section className="case-study-content-section">
            <div className="overview-section">
                <h2 className="heading">{content.overview.heading}</h2>
                <p className="description">{content.overview.description}</p>
            </div>
            <div className="challenge-section">
                <h2 className="heading">{content.challenge.heading}</h2>
                <p className="description">{content.challenge.description}</p>
                <div className="challenges-list list">
                    {
                        content.challenge.challenges.map(challenge => (
                            <div className="challenge-card card" key={challenge}>
                                <ArrowRightAltOutlinedIcon className='icon'/>
                                <p className="card-text">{challenge}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="solution-section">
                <h2 className="heading">{content.solution.heading}</h2>
                <p className="description">{content.solution.description}</p>
                <div className="solutions-list list">
                    {
                        content.solution.solutions.map(solution => (
                            <div className="solution-card card" key={solution}>
                                <CheckCircleIcon className='icon'/>
                                <p className="card-text">{solution}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}