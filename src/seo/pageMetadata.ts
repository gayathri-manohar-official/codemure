import { internshipPrograms } from '../data/internshipPrograms.js';
import { projectIdeas } from '../data/projectIdeas.js';

export type PageMetadata = {
    path: string;
    title: string;
    description: string;
    indexable?: boolean;
};

const staticPages: PageMetadata[] = [
    {
        path: '/',
        title: 'Codemure | Digital Product Studio',
        description: 'Codemure designs and builds thoughtful web, mobile and AI products for businesses, alongside practical tools and learning programs for students.',
    },
    {
        path: '/contact',
        title: 'Contact Codemure | Start a Digital Project',
        description: 'Talk with Codemure about your next website, mobile app or digital product. Share your goals and our team will help plan the next step.',
    },
    {
        path: '/projects',
        title: 'Digital Products and Case Studies | Codemure',
        description: 'Explore digital products and selected case studies designed and developed by Codemure across fitness, lifestyle, healthcare and more.',
    },
    {
        path: '/tools',
        title: 'Online Tools for Work and Study | Codemure',
        description: 'Explore Codemure tools for writing, documents, images, QR codes, resumes, unit conversion and everyday productivity.',
    },
    {
        path: '/privacy-policy',
        title: 'Privacy Policy | Codemure',
        description: 'Read how Codemure collects, uses and protects personal information when you visit our website or use our products and services.',
    },
    {
        path: '/terms-of-service',
        title: 'Terms of Service | Codemure',
        description: 'Review the terms that apply when accessing the Codemure website, digital products and services.',
    },
    {
        path: '/services/business',
        title: 'Web and Mobile App Development for Businesses | Codemure',
        description: 'Codemure helps businesses plan, design and build responsive websites, web applications and mobile products.',
    },
    {
        path: '/services/students',
        title: 'Student Project Support and Internships | Codemure',
        description: 'Find practical project guidance and online development internships for students, with mentorship from the Codemure team.',
    },
    {
        path: '/services/students/projects',
        title: 'Student Project Guidance and Mentorship | Codemure',
        description: 'Get help planning, building, documenting and presenting a student project, with flexible guidance from Codemure.',
    },
    {
        path: '/services/students/internship',
        title: 'Online Development Internships for Students | Codemure',
        description: 'Build practical web and mobile development skills through Codemure online internships, guided projects and focused curricula.',
    },
    {
        path: '/services/students/projects/own-project-idea',
        title: 'Student Project Development Support | Codemure',
        description: 'Turn your academic project idea into a clear plan with optional help for development, documentation and presentation.',
    },
    {
        path: '/services/students/projects/explore-ideas',
        title: 'Project Ideas for Students | Codemure',
        description: 'Browse practical student project ideas across education, finance, healthcare, AI, mobile apps and other domains.',
    },
    {
        path: '/services/students/projects/brainstorm-idea',
        title: 'Brainstorm a Student Project Idea | Codemure',
        description: 'Share your interests and project requirements with Codemure to explore a suitable student project direction.',
        indexable: false,
    },
];

const caseStudies: PageMetadata[] = [
    {
        path: '/projects/ntrl',
        title: 'NTRL Fitness Platform Case Study | Codemure',
        description: 'See how Codemure brought client, coach and admin experiences together in a cross-platform fitness and wellness ecosystem.',
    },
    {
        path: '/projects/amara',
        title: 'Amara Couples App Case Study | Codemure',
        description: 'Explore the design and development of Amara, a mobile experience for couples to share moments and stay connected.',
    },
    {
        path: '/projects/melt-and-made',
        title: 'Melt & Made Ecommerce Case Study | Codemure',
        description: 'Discover how Codemure shaped the digital shopping experience for Melt & Made, a handcrafted chocolate brand.',
    },
    {
        path: '/projects/zelorah',
        title: 'Zelorah Healthcare Platform Case Study | Codemure',
        description: 'Learn about Codemure’s contribution to a healthcare web application supporting clinical and operational workflows.',
    },
];

const projectIdeaPages: PageMetadata[] = projectIdeas.map((idea) => ({
    path: `/services/students/projects/explore-ideas/${idea.id}`,
    title: `${idea.title} Project Idea | Codemure`,
    description: `${idea.description} Explore project highlights and learning outcomes with Codemure student project support.`,
}));

const internshipPages: PageMetadata[] = internshipPrograms.map((program) => ({
    path: `/services/students/internship/${program.id}`,
    title: `${program.title} | Codemure`,
    description: `${program.description} Review the ${program.duration} curriculum and internship details from Codemure.`,
}));

export const pageMetadata = [...staticPages, ...caseStudies, ...projectIdeaPages, ...internshipPages];

export const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Codemure',
    url: 'https://codemure.in',
    sameAs: [
        'https://www.instagram.com/codemure.official/',
        'https://github.com/codemure-official',
        'https://www.linkedin.com/company/codemure',
        'https://www.youtube.com/@codemureofficial',
    ],
};

export function getPageMetadata(pathname: string): PageMetadata {
    const normalizedPath = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;
    return pageMetadata.find((page) => page.path === normalizedPath) ?? {
        path: normalizedPath,
        title: 'Page Not Found | Codemure',
        description: 'The requested Codemure page could not be found.',
        indexable: false,
    };
}