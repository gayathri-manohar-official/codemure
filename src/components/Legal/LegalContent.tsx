import { useState } from 'react';
import './LegalContent.scss';

interface LegalSection {
    id: string;
    title: string;
    content: React.ReactNode;
    icon: React.ReactNode;
}

interface LegalSectionProps {
    lastUpdated: string;
    sections: LegalSection[]; //sections is an array of LegalSection objects. Each of these objects has an id, title, and content.
}

export default function LegalContent({ lastUpdated, sections }: LegalSectionProps) {

    const scrollToSection = (sectionId: string) => {
        const currentSection = document.getElementById(sectionId);
        setActiveSection(sectionId);

        currentSection?.scrollIntoView(
            {
                behavior: "smooth",
                block: "end"
            }
        )
    }

    const [activeSection, setActiveSection] = useState("");

    return (
        <section className="legal-content">
            <p className="last-updated">Last updated: {lastUpdated}</p>
            <div className="legal-body">
                <aside className="sidebar">
                    <nav className="menu-card">
                        <h2>On this page</h2>
                        {sections.map((section) => (
                            <a href={`#${section.id}`} key={section.id} onClick={(e) => {
                                e.preventDefault();
                                scrollToSection(section.id);
                            }} className={`link ${section.id === activeSection ? "active" : ""}`}>
                                {section.title}
                            </a>
                        ))}
                    </nav>
                </aside>
                <main className="info-container">
                    {
                        sections.map((section) => (
                            <section className="info-section" key={section.id} id={section.id}>
                                <div className="title-section">
                                    <div className="icon-container">
                                        {section.icon}
                                    </div>
                                    <h2 className="section-title">{section.title}</h2>
                                </div>
                                <p className="sub-title">
                                    {section.content}
                                </p>
                            </section>
                        ))
                    }
                </main>
            </div>
        </section>
    )
}