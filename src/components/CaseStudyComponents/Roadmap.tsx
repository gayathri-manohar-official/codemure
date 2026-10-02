import { useState } from 'react';
import './Roadmap.scss';
import CheckIcon from '@mui/icons-material/Check';

interface RoadmapCard {

    phase: string,
    title: string,
    tasks: string[],
    illustration: string

}

interface RoadmapProps {
    developmentJourney: {
        cards: RoadmapCard[]
    }
}

export default function Roadmap({ developmentJourney }: RoadmapProps) {

    const [activePhase, setActivePhase] = useState(0);
    return (
        <section className="roadmap">
            <h2 className='roadmap-section-heading'>Development Journey</h2>

            <div className="roadmap-content">
                {
                    developmentJourney.cards.map((card, index) => {
                        const isActive = (index === activePhase);
                        return (
                            <div className="content-wrapper" key={card.phase} onClick={() => setActivePhase(index)}>

                                <div className="timeline-marker">
                                    <div className={`timeline-dot ${isActive ? "active" : ""}`}></div>
                                    <div className={`timeline-line ${isActive ? "active" : ""}`}></div>

                                    {
                                        index == developmentJourney.cards.length - 1 && (
                                            <div className={`timeline-dot ${isActive ? "active" : ""}`}></div>
                                        )
                                    }

                                </div>

                                <div className={`roadmap-card ${isActive ? "active" : ""}`}>
                                    <div className="card-text">

                                        <p className={`phase ${isActive ? "active" : ""}`}>{card.phase}</p>

                                        <h3 className="title">{card.title}</h3>

                                        <div className="tasks-container">

                                            {
                                                card.tasks.map(task => (

                                                    <div className="task" key={task}>
                                                        <CheckIcon className={`icon ${isActive ? "active" : ""}`} />
                                                        <p>{task}</p>
                                                    </div>

                                                ))
                                            }

                                        </div>

                                    </div>

                                    <div className={`card-image-container ${isActive ? "active" : ""}`}>
                                        <img
                                            src={card.illustration}
                                            alt={`${card.title} illustration`}
                                        />
                                    </div>
                                </div>

                            </div>
                        )
                    })
                }
            </div>


        </section>
    )
}