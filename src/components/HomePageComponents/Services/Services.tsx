import './Services.scss';
import CircleIcon from '@mui/icons-material/Circle';
import WebIcon from '@mui/icons-material/Web';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import CloudSyncIcon from '@mui/icons-material/CloudSync';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { ArrowRightAltSharp } from '@mui/icons-material';

export default function Services() {

    const serviceList = [
        {
            id: 1,
            icon: WebIcon,
            title: "Web Applications",
            description: "Fast, responsive and scalable web apps built with modern technologies."
        },
        {
            id: 2,
            icon: SmartphoneIcon,
            title: "Mobile Applications",
            description: "Cross-platform mobile apps for iOS & Android using React Native."
        },
        {
            id: 3,
            icon: CloudSyncIcon,
            title: "SaaS Platforms",
            description: "Powerful SaaS products with subscription, billing and multi-tenant architecture."
        },
        {
            id: 4,
            icon: AutoAwesomeIcon,
            title: "AI-Powered Solutions",
            description: "Intelligent software powered by AI to automate and enhance productivity."
        },
        {
            id: 5,
            icon: SportsEsportsIcon,
            title: "Games & Experiences",
            description: "Engaging games and interactive experiences built for all platforms."
        },
        {
            id: 6,
            icon: AdminPanelSettingsIcon,
            title: "Internal Software",
            description: "Custom internal tools and dashboards that streamline business operations."
        }
    ];

    return (
        <section id='services' className="services-section">

            <div className="services-top-section">
                <div className="services-top-left">
                    <p className='section-heading'><CircleIcon className='bullet-point' />SERVICES</p>
                    <p className="main-text">Different Goals. <br /><span>The Same Partner.</span></p>
                </div>
                <div className="services-top-right">
                    <p>
                        Whether you're a business looking to build a product or a student working on a project, Codemure provides the right support, skills and experience to turn your ideas into reality.
                    </p>
                </div>
            </div>
            <div className="services-middle-section">
                <div
                    className="business-side"
                    onClick={() => navigation.navigate("/services/business")}
                >
                    <div className="top-heading">
                        <div className="circle"></div>
                        <p>FOR BUSINESS</p>
                    </div>

                    <p className="title">Build. Grow. Go Digital</p>
                    <p className="sub-title">Websited, web applications, mobile apps and digital solutions to help your business stand out and grow.</p>

                    <div className="click-btn">
                        <ArrowRightAltSharp className='icon' />
                    </div>
                </div>

                <div
                    className="students-side"
                    onClick={() => navigation.navigate("/services/students")}
                >
                    <div className="top-heading">
                        <div className="circle"></div>
                        <p>FOR STUDENTS</p>
                    </div>

                    <p className="title">Project Support <br />& Tech Mentorship</p>
                    <p className="sub-title">Project assistance, idea exploration, knowledge transfer, documentation and more.</p>

                    <div className="click-btn">
                        <ArrowRightAltSharp className='icon' />
                    </div>
                </div>
            </div>
            <div className="services-bottom-section">
                <div className="service-card-container">
                    {
                        serviceList.map((service) => {
                            const Icon = service.icon;
                            return (
                                <div className="service-card" key={service.id}>
                                    <div className="icon-container">
                                        <Icon className='icon' />
                                    </div>
                                    <p className="service-title">{service.title}</p>
                                    <p className="service-description">{service.description}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}