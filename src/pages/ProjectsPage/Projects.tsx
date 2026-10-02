import ProjectGallery from '../../components/ProjectsPageComponents/Gallery/ProjectGallery'
import ProjectsHero from '../../components/ProjectsPageComponents/Hero/ProjectsHero'
import './Projects.scss'

export default function Projects(){
    return(
        <div className="projects-page">
            <ProjectsHero/>
            <ProjectGallery/>
        </div>
    )
}