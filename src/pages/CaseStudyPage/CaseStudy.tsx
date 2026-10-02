import './CaseStudy.scss';
import { useParams } from 'react-router-dom';
import { caseStudies } from '../../data/caseStudies';
import CaseStudyHero from '../../components/CaseStudyComponents/CaseStudyHero';
import CaseStudyContent from '../../components/CaseStudyComponents/CaseStudyContent';
import ContactCard from '../../components/CaseStudyComponents/ContactCard';
import Roadmap from '../../components/CaseStudyComponents/Roadmap';



export default function CaseStudy(){

    const {projectId} = useParams();

    const project = caseStudies.find(project => project.id === projectId);

    if(!project){
        return <div>Project not found!</div>
    }

    return(
        <div className="case-study-page">
            <CaseStudyHero hero={project.hero}/>
            <CaseStudyContent content={project.content} />
            <ContactCard/>
            <Roadmap developmentJourney={project.developmentJourney}/>
        </div>
    )
}