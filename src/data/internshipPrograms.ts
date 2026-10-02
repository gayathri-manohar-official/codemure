export type InternshipProgram = {
    id: 'react-web' | 'react-native' | 'full-stack';
    title: string;
    shortTitle: string;
    price: string;
    duration: string;
    level: 'Most Popular' | 'Mobile Focus' | 'Advanced';
    description: string;
    stack: string[];
    features: string[];
    curriculum: { week: string; title: string; points: string[] }[];
};

export const internshipPrograms: InternshipProgram[] = [
    { id: 'react-web', title: 'React Web Development Internship', shortTitle: 'React Web Development', price: '₹499', duration: '5 days (Intensive)', level: 'Most Popular', description: 'Build a polished web application using React, modern tools and practical development habits.', stack: ['React', 'JavaScript', 'TypeScript', 'Next.js'], features: ['Live online sessions', 'Hands-on project development', 'Git & GitHub guidance', 'Deployment with Vercel', 'Completion certificate'], curriculum: [{ week: 'Day 1', title: 'React foundations', points: ['Project setup and component thinking', 'Reusable UI patterns'] }, { week: 'Day 2–3', title: 'Build the experience', points: ['State, forms and data flows', 'Responsive interface implementation'] }, { week: 'Day 4', title: 'Polish and deploy', points: ['Code organisation and review', 'Deploy a presentable project'] }, { week: 'Day 5', title: 'Showcase day', points: ['Project walkthrough', 'Portfolio and viva guidance'] }] },
    { id: 'react-native', title: 'React Native Mobile Development Internship', shortTitle: 'React Native Mobile Development', price: '₹499', duration: '5 days (Intensive)', level: 'Mobile Focus', description: 'Learn to build cross-platform mobile apps using React Native and Expo.', stack: ['React Native', 'Expo', 'JavaScript', 'TypeScript'], features: ['Live online sessions', 'Build and deploy a mobile app', 'API integration', 'App deployment with Expo', 'Completion certificate'], curriculum: [{ week: 'Day 1', title: 'Mobile foundations', points: ['Expo workflow and project setup', 'Navigation and mobile UI patterns'] }, { week: 'Day 2–3', title: 'Build real features', points: ['Screens, forms and local state', 'Integrating an external API'] }, { week: 'Day 4', title: 'Make it feel native', points: ['Responsive mobile layouts', 'Testing on devices'] }, { week: 'Day 5', title: 'Ship and share', points: ['Expo deployment basics', 'Project walkthrough and feedback'] }] },
    { id: 'full-stack', title: 'Advanced Full Stack Internship', shortTitle: 'Advanced Full Stack', price: '₹899', duration: '7 days (Extended)', level: 'Advanced', description: 'Build a complete web application across frontend, backend, authentication and database.', stack: ['React', 'Node.js', 'PostgreSQL', 'Supabase'], features: ['React + Node.js', 'Database integration', 'Authentication & API development', 'Deployment support', 'Completion certificate'], curriculum: [{ week: 'Day 1–2', title: 'Plan the product', points: ['Architecture and data modelling', 'Frontend project foundation'] }, { week: 'Day 3–4', title: 'Build the backend', points: ['API routes and validation', 'Database integration'] }, { week: 'Day 5', title: 'Connect the system', points: ['Authentication flows', 'Frontend and backend integration'] }, { week: 'Day 6–7', title: 'Launch with confidence', points: ['Deployment and testing', 'Project presentation and review'] }] }
];
