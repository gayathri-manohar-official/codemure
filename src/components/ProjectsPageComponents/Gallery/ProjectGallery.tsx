import './ProjectGallery.scss'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';
import NTRLimg from '../../../assets/images/product-ntrl.webp';
import AmaraImg from '../../../assets/images/product-amara.webp';
import MeltAndMadeImg from '../../../assets/images/product-meltandmade.webp';
import ZelorahImg from '../../../assets/images/product-zelorah.webp';


export default function ProjectGallery(){

    const projectDetails = [
        {
            id: "ntrl",
            title: "NTRL - Fitness Platform",
            description: "A comprehensive fitness ecosystem connecting clients with coaches and helping them achieve their health goals.",
            src: NTRLimg,
        },
        {
            id: "amara",
            title: "Amara - Chat App",
            description: "Amara is a long-distance couple app that helps you share moments, sync your day, and build beautiful memories together.",
            src: AmaraImg,
        },
        {
            id: "melt-and-made",
            title: "Melt & Made  - Handmade Chocolates",
            description: "Melt & Made is a premium chocolate brand crafting indulgent, handcrafted chocolates using the finest ingredients.",
            src: MeltAndMadeImg,
        },
        {
            id: "zelorah",
            title: "Zelorah - Fine Jewellery",
            description: "Zelorah is a fine jewellery destination that brings you exquisitely crafted pieces designed to celebrate your most precious moments.",
            src: ZelorahImg,
        },
    ]

    return(
        <section className="project-gallery-section">
            <div className="section-wrapper">
                {
                    projectDetails.map(project => (
                        <div className="project-card" key={project.id} id={project.id}>
                            <div className="project-image-container">
                                <img src={project.src} alt={project.title} />
                            </div>
                            <div className="project-content">
                                <h2 className="project-title">{project.title}</h2>
                                <p className="project-description">{project.description}</p>
                                <Link to={`/projects/${project.id}`} className="primary-btn">View Case Study <ArrowForwardIcon className='arrow-icon'/> </Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}