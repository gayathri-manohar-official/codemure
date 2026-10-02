import './About.scss';
import CircleIcon from '@mui/icons-material/Circle';
import DiamondOutlinedIcon from '@mui/icons-material/DiamondOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import AdsClickOutlinedIcon from '@mui/icons-material/AdsClickOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import DesignServicesOutlinedIcon from '@mui/icons-material/DesignServicesOutlined';
import CachedOutlinedIcon from '@mui/icons-material/CachedOutlined';
import AboutImg from '../../../assets/images/about-us-image.webp'
import AboutIcon from '../../../assets/icons/icon.svg'

export default function About() {

    const features = [
        {
            id: 1,
            icon: DiamondOutlinedIcon,
            mainText: "Product First",
            subText: "We build our own products and partner on meaningful client projects."
        },
        {
            id: 2,
            icon: CodeOutlinedIcon,
            mainText: "Engineering Excellence",
            subText: "Clean code, scalable architecture and attention to every detail."
        },
        {
            id: 3,
            icon: RocketLaunchOutlinedIcon,
            mainText: "Design Driven",
            subText: "Thoughtful design and seamless experiences power everything we build."
        }
    ];

    const journeyDetails = [
        {
            id: 1,
            icon: CalendarMonthOutlinedIcon,
            mainTitle: "2026",
            subTitle: "Founded",
            text: "Codemure was founded with a vision to build impactful digitial products."
        },
        {
            id: 2,
            icon: InventoryOutlinedIcon,
            mainTitle: "5+",
            subTitle: "Happy Clients",
            text: "SaaS platforms, mobile apps, tools and more in progress."
        },
        {
            id: 3,
            icon: LanguageOutlinedIcon,
            mainTitle: "Global",
            subTitle: "Mindset",
            text: "Building products that can be used and loved anywhere in the world."
        }
    ]

    const lifeCycle = [
        {
            id: 1,
            icon: LightbulbOutlinedIcon,
            text: "Ideate & Validate"
        },
        {
            id: 2,
            icon: DesignServicesOutlinedIcon,
            text: "Design & Prototype"
        },
        {
            id: 3,
            icon: CodeOutlinedIcon,
            text: "Develop & Test"
        },
        {
            id: 4,
            icon: RocketLaunchOutlinedIcon,
            text: "Launch & Scale"
        },
        {
            id: 5,
            icon: CachedOutlinedIcon,
            text: "Maintain & Evolve"
        }
    ]
    return (
        <section id='about' className="about-section">
            <div className="top-section">
                <div className="top-left-section">
                    <p className='section-heading'><CircleIcon className='bullet-point' /> ABOUT US</p>
                    <h2 className="main-text">We're Codemure. <br /> <span> We build for the future.</span></h2>
                    <p className="sub-text">Codemure is an independent product engineering studio focused on designing, developing and scaling digital products that solve real problems and create meaningful impact.</p>
                    <div className="features-container">
                        {
                            features.map((feature) => {
                                const Icon = feature.icon;
                                return (
                                    <div className="feature-card" key={feature.id}>
                                        <div className="icon-container">
                                            <Icon className='icon' />
                                        </div>
                                        <p className="main-text">{feature.mainText}</p>
                                        <p className="sub-text">{feature.subText}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="top-right-section">
                    <div className="left-section">
                        <div className="bg">
                            <img src={AboutImg} alt="" />
                        </div>
                        <div className="text-section">
                            <div className="icon">
                                <img src={AboutIcon} alt="" />
                            </div>
                            <p className="text">Our mission is to craft high quality software products tat empower people and businesses to achieve more every day.</p>
                        </div>
                    </div>
                    <div className="right-section">
                        <div className="vows-container">
                            <div className="icon-container">
                                <AdsClickOutlinedIcon className='icon' />
                            </div>
                            <div className="text-container">
                                <p className="main-text">Our Mission</p>
                                <p className="sub-text">Build elegant, reliable and scalable software products that solve real world problems</p>
                            </div>
                        </div>
                        <div className="vows-container">
                            <div className="icon-container">
                                <VisibilityOutlinedIcon className='icon' />
                            </div>
                            <div className="text-container">
                                <p className="main-text">Our Vision</p>
                                <p className="sub-text">To become a globally recognized product studio known for quality, innovation and trust</p>
                            </div>
                        </div>
                        <div className="vows-container third">
                            <div className="icon-container">
                                <FavoriteBorderOutlinedIcon className='icon' />
                            </div>
                            <div className="text-container">
                                <p className="main-text">Our Values</p>
                                <ul className='values'>
                                    <li className="value">Integrity & Honesty</li>
                                    <li className="value">Quality & Craftsmanship</li>
                                    <li className="value">Continuous Improvement</li>
                                    <li className="value">User Empathy</li>
                                    <li className="value">Long-term Impact</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom-section">
                <div className="bottom-left-section">
                    <p className='section-heading'><CircleIcon className='bullet-point' /> OUR STORY</p>
                    <h3 className="main-text">Built with passion. <br /> <span> Driven by purpose.</span></h3>
                    <p className="sub-text" style={{textAlign: "justify"}}>Codemure began with a dream shared by a small team who believed that great software could make a real difference. Through countless ideas, challenges, late nights, and relentless hard work, that dream has grown into a product studio dedicated to building digital experiences that people love and businesses trust.</p>
                    <p className="our-journey">Our Journey <ArrowForwardIcon className='arrow' /> </p>
                </div>
                <div className="bottom-right-section">
                    <div className="top">
                        {
                            journeyDetails.map(item => {
                                const Icon = item.icon;
                                return (
                                    <div className={`card ${item.id === 1 || item.id === 2 ? "special-card" : ""}`} key={item.id}>
                                        <div className="icon-container">
                                            <Icon className='icon' />
                                        </div>
                                        <div className="text-content">
                                            <p className="main-title">{item.mainTitle}</p>
                                            <p className="sub-title">{item.subTitle}</p>
                                            <p className="text">{item.text}</p>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                    <div className="bottom">
                        <p className="what-we-do">What we do</p>
                        <div className="card-container">
                            {
                                lifeCycle.map((item) => {
                                    const Icon = item.icon;
                                    return (
                                        <div className="card" key={item.id}>
                                            <Icon className='icon' />
                                            <p className="text">{item.text}</p>
                                        </div>
                                    );
                                })
                            }
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}