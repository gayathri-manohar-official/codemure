import ToolBox from '../../ToolBox/ToolBox';
import './Tools.scss';
import CircleIcon from '@mui/icons-material/Circle';
import { toolsData } from '../../../utils/tools';
import { Link } from 'react-router-dom';
import { ArrowRightAlt } from '@mui/icons-material';

export default function Tools() {
    return (
        <section id='tools' className="tools-section">
            <div className="tools-top-section">
                <div className="tools-top-left">
                    <p className='section-heading'><CircleIcon className='bullet-point' />OUR TOOLS</p>
                    <p className="main-text">Useful Tools <br /><span> for everyday needs</span></p>
                </div>
                <div className="tools-top-right">
                    <p>
                        Simple, powerful tools built by Codemure to make your work, study and daily life easier. Designed with the same attention to quality as our products.
                    </p>
                </div>
            </div>
            <div className="tools-bottom-section">
                {
                    toolsData.slice(0, 3).map((item) => (
                        <ToolBox
                            key={item.id}
                            title={item.name}
                            description={item.description}
                            icon={item.icon}
                            link={item.link}
                        />
                    )) 
                }
                <div className="more-btn-container">
                    <div
                        className="image-container"
                        style={{
                            backgroundImage: `url(/icons/codemure/codemure-icon.svg)`
                        }}
                    >
                        <span className="icon-glow" aria-hidden="true" />
                    </div>
                    <div className="text-container">
                        <p className="eyebrow">CODEMURE UTILITIES</p>
                        <p className="title">
                            Find your next<br />everyday tool.
                        </p>
                        <p className="sub-title">
                            Browse practical tools for productivity, creativity, and all the small tasks in between.
                        </p>
                    </div>
                    <Link
                        className="view-btn"
                        to={"/tools"}
                    >
                        View all tools <ArrowRightAlt className='icon' />
                    </Link>
                </div>
            </div>
        </section>
    )
}
