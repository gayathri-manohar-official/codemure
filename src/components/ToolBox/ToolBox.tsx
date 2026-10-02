import './ToolBox.scss';
import { ArrowRightAlt } from '@mui/icons-material';

interface ToolsBoxProps {
    title: string;
    description: string;
    icon: string;
    link: string;
}

export default function ToolBox({
    title,
    description,
    icon,
    link
}: ToolsBoxProps) {

    return (
        <div className="toolbox-container">
            <div
                className="image-container"
                style={{
                    backgroundImage: `url(${icon})`
                }}
            >

            </div>
            <div className="text-container">
                <p className="title">
                    {title}
                </p>
                <p className="sub-title">
                    {description}
                </p>
            </div>
            <button
                className="view-btn"
                onClick={() => { window.open(link, '_blank', 'noopener,noreferrer'); }}
            >
                Explore Tool <ArrowRightAlt className='icon' />
            </button>
        </div>
    )
}