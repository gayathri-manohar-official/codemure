import './LegalHero.scss';
import CircleIcon from '@mui/icons-material/Circle';


interface LegalHeroProps {
    titleNormal: string; //specifies type as string
    titleHighlighted: string; //purple highlighted title
    subText: React.ReactNode; //we have <br/> tags in the subText and ReactNode allows us to pass both <br/> tags and strings
    bgImage: string; //background image path, or URL is a string which is passed to prop bgImage 
    mobileImage: string
}

export default function LegalHero({ titleNormal, titleHighlighted, subText, bgImage, mobileImage } : LegalHeroProps){

    return(
        <section className="legal-hero" style={{backgroundImage: `url(${bgImage})`}}>
            <div className="section-content">
                <p className='section-heading'><CircleIcon className='bullet-point' />LEGAL</p>
                <h1 className="main-text">{titleNormal}<span>{titleHighlighted}</span></h1>
                <p className="sub-text">{subText}</p>
                <img src={mobileImage} alt="" className='mobile-image' />
            </div>
        </section>
    )
}