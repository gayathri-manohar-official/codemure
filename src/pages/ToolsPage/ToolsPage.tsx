import './ToolsPage.scss';
import { toolsData } from '../../utils/tools';
import ToolBox from '../../components/ToolBox/ToolBox';
import CircleIcon from '@mui/icons-material/Circle';

export default function ToolsPage() {
    return (
        <div className="tools-container">
            <div className="tools-top-section">
                <div className="tools-top-left">
                    <p className='section-heading'><CircleIcon className='bullet-point' />OUR TOOLS</p>
                    <h1 className="main-text">Codemure Tools <br /><span> for everyday needs</span></h1>
                </div>
                <div className="tools-top-right">
                    <p>
                        Simple, powerful tools built by Codemure to make your work, study and daily life easier. Designed with the same attention to quality as our products.
                    </p>
                </div>
            </div>
            <div className="tools">
                {
                    toolsData.map((item) => (
                        <ToolBox
                            key={item.id}
                            title={item.name}
                            description={item.description}
                            link={item.link}
                            icon={item.icon}
                        />
                    ))
                }
            </div>
        </div>
    )
}