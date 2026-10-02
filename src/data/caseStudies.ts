import ntrlHeroImg from '../assets/images/ntrl-case-study.webp';
import amaraHeroImg from '../assets/images/amara-case-study.webp';
import meltAndMadeHeroImg from '../assets/images/meltNmade-case-study.webp';
import zelorahHeroImg from '../assets/images/zelorah-case-study.webp';
import ReactLogo from '../assets/logos/logoWithoutText/react-logo.svg';
import TypeScriptLogo from '../assets/logos/logoWithoutText/TS-logo.svg';
import ReactNativeLogo from '../assets/logos/logoWithoutText/react-logo.svg';
import SupabaseLogo from '../assets/logos/logoWithoutText/supabase-logo.svg';
import VercelLogo from '../assets/logos/logoWithoutText/vercel-logo.svg';
import TailwindCSSLogo from '../assets/logos/logoWithoutText/tailwind-logo.svg';
import planningArchitectureImg from '../assets/images/planning-and-architecture.webp';
import uiDesignImg from '../assets/images/ui-design.webp';
import uxResponsiveImg from '../assets/images/ux-and-responsiveness.webp';
import frontendDevelopmentImg from '../assets/images/front-end-development.webp';
import backendApiImg from '../assets/images/backend-and-apis.webp';
import deploymentMaintenanceImg from '../assets/images/testing-and-deployment.webp';
import ntrlMobileImg from '../assets/images/ntrl-case-study-mobile.webp';
import amaraMobileImg from '../assets/images/amara-case-study-mobile.webp';
import meltAndMadeMobileImg from '../assets/images/meltNmade-case-study-mobile.webp';
import zelorahMobileImg from '../assets/images/zelorah-case-study-mobile.webp';

export const caseStudies = [
    {
        id: "ntrl",
        hero: {
            sectionHeading: "CASE STUDY",
            title: "NTRL - Fitness Platform",
            description: "A comprehensive fitness ecosystem connecting clients with coaches and helping them achieve their health goals.",
            platforms: [
                "Web Application",
                "Mobile Application",
                "Coach Portal",
                "Admin Portal"
            ],
            techStack: [
                {
                    techStackName: "React",
                    logo: ReactLogo
                },
                {
                    techStackName: "React Native",
                    logo: ReactNativeLogo
                },
                {
                    techStackName: "TypeScript",
                    logo: TypeScriptLogo
                },
                {
                    techStackName: "Tailwind CSS",
                    logo: TailwindCSSLogo
                },
                {
                    techStackName: "Supabase",
                    logo: SupabaseLogo
                },

            ],
            heroImage: ntrlHeroImg,
            heroImageMobile: ntrlMobileImg
        },

        content: {
            overview: {
                heading: "Overview",
                description: "NTRL (Nutrition. Training. Resilience. Longevity.) is a comprehensive fitness platform that connects clients, coaches, and administrators through one unified digital ecosystem. The platform helps users manage workouts, nutrition, progress, and wellness goals while giving coaches the tools to guide and support their clients."
            },
            challenge: {
                heading: "The Challenge",
                description: "The client needed a unified fitness ecosystem that could bring together personalized training, nutrition, progress tracking, coaching, and subscriptions while serving different user types.",
                challenges: [
                    "Multiple user roles with different needs",
                    "Personalized workout and nutrition management",
                    "Real-time progress and performance tracking",
                    "Coach-client communication and support",
                    "Secure subscriptions and payments",
                    "Scalable architecture for future growth"
                ]
            },
            solution: {
                heading: "Our Solution",
                description: "We designed and developed a cross-platform fitness ecosystem focused on personalization, usability, and measurable progress.",
                solutions: [
                    "Marketing website to attract and convert users",
                    "Mobile app for clients on iOS & Android",
                    "Coach portal to manage clients and programs",
                    "Admin dashboard for operations and oversight",
                    "Nutrition, workout, and progress tracking",
                    "Subscription and payment integration with Stripe",
                    "Scalable backend architecture with Supabase"
                ]
            }
        },

        developmentJourney: {
            cards: [
                {
                    phase: "Phase 1",
                    title: "Planning & Architecture",
                    tasks: [
                        "Business requirements analysis",
                        "User personas and project goals",
                        "System architecture planning",
                        "Database schema design",
                        "Technology stack selection",
                        "Project roadmap and milestones"
                    ],
                    illustration: planningArchitectureImg
                },
                {
                    phase: "Phase 2",
                    title: "UI Design",
                    tasks: [
                        "User flow planning",
                        "Wireframe creation",
                        "High-fidelity UI mockups",
                        "Design system and components",
                        "Color palette and typography",
                        "Design approval and iteration"
                    ],
                    illustration: uiDesignImg
                },
                {
                    phase: "Phase 3",
                    title: "UX & Responsiveness",
                    tasks: [
                        "Responsive layout implementation",
                        "Mobile-first optimization",
                        "Accessibility improvements",
                        "Micro-interactions and animations",
                        "Cross-device compatibility",
                        "Performance-focused user experience"
                    ],
                    illustration: uxResponsiveImg
                },
                {
                    phase: "Phase 4",
                    title: "Frontend Development",
                    tasks: [
                        "React component development",
                        "Routing and navigation",
                        "State management",
                        "Reusable UI components",
                        "API integration",
                        "Frontend optimization"
                    ],
                    illustration: frontendDevelopmentImg
                },
                {
                    phase: "Phase 5",
                    title: "Backend & APIs",
                    tasks: [
                        "Authentication and authorization",
                        "Database integration",
                        "REST API development",
                        "File storage configuration",
                        "Business logic implementation",
                        "Security and data validation"
                    ],
                    illustration: backendApiImg
                },
                {
                    phase: "Phase 6",
                    title: "Testing, Deployment & Maintenance",
                    tasks: [
                        "Quality assurance testing",
                        "Bug fixing and optimization",
                        "Production deployment",
                        "Performance monitoring",
                        "Feature enhancements",
                        "Long-term maintenance and support"
                    ],
                    illustration: deploymentMaintenanceImg
                }
            ]
        }
    },
    {
        id: "amara",
        hero: {
            sectionHeading: "CASE STUDY",
            title: "Amara - Chat App",
            description: "Amara is a long-distance couple app that helps you share moments, sync your day, and build beautiful memories together.",
            platforms: [
                "Web Application",
                "Mobile Application",
                "Coach Portal",
                "Admin Portal"
            ],
            techStack: [
                {
                    techStackName: "React Native",
                    logo: ReactNativeLogo
                },
                {
                    techStackName: "TypeScript",
                    logo: TypeScriptLogo
                },
                {
                    techStackName: "Tailwind CSS",
                    logo: TailwindCSSLogo
                },
                {
                    techStackName: "Supabase",
                    logo: SupabaseLogo
                },
            ],
            heroImage: amaraHeroImg,  
            heroImageMobile: amaraMobileImg
        },

        content: {
            overview: {
                heading: "Overview",
                description: "Amara is a digital space designed for couples to stay connected, share meaningful moments, and build memories together—no matter the distance. The platform brings conversations, shared activities, media, calendars, and personal moments into one private experience."
            },
            challenge: {
                heading: "The Challenge",
                description: "The goal was to create a warm and intimate digital experience that could make long-distance relationships feel more connected without making communication feel complicated.",
                challenges: [
                    "Staying emotionally connected across different locations",
                    "Sharing photos, videos, and meaningful moments",
                    "Watching and listening to content together",
                    "Coordinating important dates and plans",
                    "Keeping private conversations and memories secure",
                    "Creating a simple experience that feels personal and engaging"
                ]
            },
            solution: {
                heading: "Our Solution",
                description: "We designed and developed a couples-focused mobile experience centered around shared moments and everyday connection.",
                solutions: [
                    "Mobile app for couples on iOS & Android",
                    "Real-time chat and private conversations",
                    "Watch Together for synchronized entertainment",
                    "Listen Together for shared music experiences",
                    "Shared calendar for important dates and events",
                    "Shared moments, photos, videos, notes, and memories",
                    "Personalized couple profiles and experiences"
                ]
            }
        },
        developmentJourney: {
            cards: [
                {
                    phase: "Phase 1",
                    title: "Planning & Architecture",
                    tasks: [
                        "Business requirements analysis",
                        "User personas and project goals",
                        "System architecture planning",
                        "Database schema design",
                        "Technology stack selection",
                        "Project roadmap and milestones"
                    ],
                    illustration: planningArchitectureImg
                },
                {
                    phase: "Phase 2",
                    title: "UI Design",
                    tasks: [
                        "User flow planning",
                        "Wireframe creation",
                        "High-fidelity UI mockups",
                        "Design system and components",
                        "Color palette and typography",
                        "Design approval and iteration"
                    ],
                    illustration: uiDesignImg
                },
                {
                    phase: "Phase 3",
                    title: "UX & Responsiveness",
                    tasks: [
                        "Responsive layout implementation",
                        "Mobile-first optimization",
                        "Accessibility improvements",
                        "Micro-interactions and animations",
                        "Cross-device compatibility",
                        "Performance-focused user experience"
                    ],
                    illustration: uxResponsiveImg
                },
                {
                    phase: "Phase 4",
                    title: "Frontend Development",
                    tasks: [
                        "React component development",
                        "Routing and navigation",
                        "State management",
                        "Reusable UI components",
                        "API integration",
                        "Frontend optimization"
                    ],
                    illustration: frontendDevelopmentImg
                },
                {
                    phase: "Phase 5",
                    title: "Backend & APIs",
                    tasks: [
                        "Authentication and authorization",
                        "Database integration",
                        "REST API development",
                        "File storage configuration",
                        "Business logic implementation",
                        "Security and data validation"
                    ],
                    illustration: backendApiImg
                },
                {
                    phase: "Phase 6",
                    title: "Testing, Deployment & Maintenance",
                    tasks: [
                        "Quality assurance testing",
                        "Bug fixing and optimization",
                        "Production deployment",
                        "Performance monitoring",
                        "Feature enhancements",
                        "Long-term maintenance and support"
                    ],
                    illustration: deploymentMaintenanceImg
                }
            ]
        }

    },
    {
        id: "melt-and-made",
        hero: {
            sectionHeading: "CASE STUDY",
            title: "Melt & Made  - Handmade Chocolates",
            description: "Melt & Made is a premium chocolate brand crafting indulgent, handcrafted chocolates using the finest ingredients.",
            platforms: [
                "Web Application",
                "Coach Portal",
                "Admin Portal"
            ],
            techStack: [
                {
                    techStackName: "React",
                    logo: ReactLogo
                },
                {
                    techStackName: "TypeScript",
                    logo: TypeScriptLogo
                },
                {
                    techStackName: "Tailwind CSS",
                    logo: TailwindCSSLogo
                },
                {
                    techStackName: "Supabase",
                    logo: SupabaseLogo
                },
                {
                    techStackName: "Vercel",
                    logo: VercelLogo
                },
            ],
            heroImage: meltAndMadeHeroImg,            
            heroImageMobile: meltAndMadeMobileImg
        },

        content: {
            overview: {
                heading: "Overview",
                description: "Melt & Made is a premium homemade chocolate brand crafted around indulgence, craftsmanship, and thoughtful gifting. The e-commerce experience brings together handcrafted chocolate collections, gifting options, product discovery, and a warm visual identity inspired by rich chocolate and cream tones."
            },
            challenge: {
                heading: "The Challenge",
                description: "The brand needed an e-commerce experience that could communicate the premium quality of its chocolates while making product discovery and gifting simple, visually appealing, and effortless.",
                challenges: [
                    "Creating a premium digital identity for a handmade brand",
                    "Presenting multiple chocolate collections clearly",
                    "Making product discovery intuitive and engaging",
                    "Highlighting gifting options and occasions",
                    "Building trust around quality and craftsmanship",
                    "Creating a seamless experience across desktop and mobile"
                ]
            },
            solution: {
                heading: "Our Solution",
                description: "We designed and developed a responsive chocolate e-commerce experience that combines editorial storytelling with a product-focused shopping journey.",
                solutions: [
                    "Premium responsive e-commerce website",
                    "Product collections organized for easy discovery",
                    "Dedicated gifting experience and gift-box collections",
                    "High-impact product photography and visual storytelling",
                    "Responsive desktop and mobile experiences",
                    "Clear product information and pricing",
                    "Warm brown, cream, and gold visual system inspired by chocolate"
                ]
            }
        },
        developmentJourney: {
            cards: [
                {
                    phase: "Phase 1",
                    title: "Planning & Architecture",
                    tasks: [
                        "Business requirements analysis",
                        "User personas and project goals",
                        "System architecture planning",
                        "Database schema design",
                        "Technology stack selection",
                        "Project roadmap and milestones"
                    ],
                    illustration: planningArchitectureImg
                },
                {
                    phase: "Phase 2",
                    title: "UI Design",
                    tasks: [
                        "User flow planning",
                        "Wireframe creation",
                        "High-fidelity UI mockups",
                        "Design system and components",
                        "Color palette and typography",
                        "Design approval and iteration"
                    ],
                    illustration: uiDesignImg
                },
                {
                    phase: "Phase 3",
                    title: "UX & Responsiveness",
                    tasks: [
                        "Responsive layout implementation",
                        "Mobile-first optimization",
                        "Accessibility improvements",
                        "Micro-interactions and animations",
                        "Cross-device compatibility",
                        "Performance-focused user experience"
                    ],
                    illustration: uxResponsiveImg
                },
                {
                    phase: "Phase 4",
                    title: "Frontend Development",
                    tasks: [
                        "React component development",
                        "Routing and navigation",
                        "State management",
                        "Reusable UI components",
                        "API integration",
                        "Frontend optimization"
                    ],
                    illustration: frontendDevelopmentImg
                },
                {
                    phase: "Phase 5",
                    title: "Backend & APIs",
                    tasks: [
                        "Authentication and authorization",
                        "Database integration",
                        "REST API development",
                        "File storage configuration",
                        "Business logic implementation",
                        "Security and data validation"
                    ],
                    illustration: backendApiImg
                },
                {
                    phase: "Phase 6",
                    title: "Testing, Deployment & Maintenance",
                    tasks: [
                        "Quality assurance testing",
                        "Bug fixing and optimization",
                        "Production deployment",
                        "Performance monitoring",
                        "Feature enhancements",
                        "Long-term maintenance and support"
                    ],
                    illustration: deploymentMaintenanceImg
                }
            ]
        }

    },
    {
        id: "zelorah",
        hero: {
            sectionHeading: "CASE STUDY",
            title: "Zelorah - Fine Jewellery",
            description: "Zelorah is a fine jewellery destination that brings you exquisitely crafted pieces designed to celebrate your most precious moments.",
            platforms: [
                "Web Application",
                "Coach Portal",
                "Admin Portal"
            ],
            techStack: [
                {
                    techStackName: "React",
                    logo: ReactLogo
                },
                {
                    techStackName: "TypeScript",
                    logo: TypeScriptLogo
                },
                {
                    techStackName: "Tailwind CSS",
                    logo: TailwindCSSLogo
                },
                {
                    techStackName: "Supabase",
                    logo: SupabaseLogo
                },
                {
                    techStackName: "Vercel",
                    logo: VercelLogo
                },
            ],
            heroImage: zelorahHeroImg,           
            heroImageMobile: zelorahMobileImg
        },

        content: {
            overview: {
                heading: "Overview",
                description: "Zelorah is a premium jewellery e-commerce destination created to showcase exquisitely crafted pieces designed for meaningful occasions. The platform combines luxury visual storytelling with a refined shopping experience, helping customers discover jewellery collections with confidence."
            },
            challenge: {
                heading: "The Challenge",
                description: "The brand needed a digital experience that could communicate luxury and trust while making an extensive jewellery collection easy to browse, understand, and purchase online.",
                challenges: [
                    "Establishing a premium jewellery identity online",
                    "Presenting multiple jewellery categories clearly",
                    "Communicating craftsmanship and product authenticity",
                    "Building trust around payments, purity, and delivery",
                    "Creating an intuitive jewellery discovery experience",
                    "Maintaining a consistent luxury experience across devices"
                ]
            },
            solution: {
                heading: "Our Solution",
                description: "We designed and developed a sophisticated jewellery e-commerce experience centered around elegance, trust, and effortless product discovery.",
                solutions: [
                    "Premium responsive e-commerce website",
                    "Dedicated categories for necklaces, bangles, earrings, rings, and pendants",
                    "High-quality product imagery and visual storytelling",
                    "Certified jewellery and purity messaging",
                    "Secure payment and insured delivery experience",
                    "Easy returns and lifetime exchange information",
                    "Responsive desktop and mobile shopping experience"
                ]
            }
        },
        developmentJourney: {
            cards: [
                {
                    phase: "Phase 1",
                    title: "Planning & Architecture",
                    tasks: [
                        "Business requirements analysis",
                        "User personas and project goals",
                        "System architecture planning",
                        "Database schema design",
                        "Technology stack selection",
                        "Project roadmap and milestones"
                    ],
                    illustration: planningArchitectureImg
                },
                {
                    phase: "Phase 2",
                    title: "UI Design",
                    tasks: [
                        "User flow planning",
                        "Wireframe creation",
                        "High-fidelity UI mockups",
                        "Design system and components",
                        "Color palette and typography",
                        "Design approval and iteration"
                    ],
                    illustration: uiDesignImg
                },
                {
                    phase: "Phase 3",
                    title: "UX & Responsiveness",
                    tasks: [
                        "Responsive layout implementation",
                        "Mobile-first optimization",
                        "Accessibility improvements",
                        "Micro-interactions and animations",
                        "Cross-device compatibility",
                        "Performance-focused user experience"
                    ],
                    illustration: uxResponsiveImg
                },
                {
                    phase: "Phase 4",
                    title: "Frontend Development",
                    tasks: [
                        "React component development",
                        "Routing and navigation",
                        "State management",
                        "Reusable UI components",
                        "API integration",
                        "Frontend optimization"
                    ],
                    illustration: frontendDevelopmentImg
                },
                {
                    phase: "Phase 5",
                    title: "Backend & APIs",
                    tasks: [
                        "Authentication and authorization",
                        "Database integration",
                        "REST API development",
                        "File storage configuration",
                        "Business logic implementation",
                        "Security and data validation"
                    ],
                    illustration: backendApiImg
                },
                {
                    phase: "Phase 6",
                    title: "Testing, Deployment & Maintenance",
                    tasks: [
                        "Quality assurance testing",
                        "Bug fixing and optimization",
                        "Production deployment",
                        "Performance monitoring",
                        "Feature enhancements",
                        "Long-term maintenance and support"
                    ],
                    illustration: deploymentMaintenanceImg
                }
            ]
        }
    },
]