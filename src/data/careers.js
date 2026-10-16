// Placeholder job openings. Replace with real roles before launch.

export const perks = [
    { title: 'Flexible Hours', description: 'Plan your day around when you do your best work.', icon: 'schedule' },
    { title: 'Learning Budget', description: 'Courses, books and conferences to keep growing your skills.', icon: 'school' },
    { title: 'Collaborative Team', description: 'Work alongside designers, developers, writers and marketers.', icon: 'groups' },
    { title: 'Real Impact', description: 'Ship work for clients across many industries and see the results.', icon: 'trending' },
];

const jobs = [
    {
        id: 'frontend-developer',
        title: 'Frontend Developer (React / Next.js)',
        department: 'Web Development',
        type: 'Full-time',
        location: 'Remote',
        summary: 'Build fast, accessible websites and web apps for our clients using React and Next.js.',
        responsibilities: [
            'Turn designs into responsive, accessible interfaces.',
            'Build and maintain Next.js applications and component libraries.',
            'Work with designers and backend developers to ship features end to end.',
        ],
        requirements: [
            '2+ years of professional experience with React.',
            'Solid understanding of HTML, CSS and modern JavaScript.',
            'Experience with Next.js or another server-rendering framework is a plus.',
        ],
    },
    {
        id: 'digital-marketing-specialist',
        title: 'Digital Marketing Specialist',
        department: 'Digital Marketing',
        type: 'Full-time',
        location: 'Hybrid',
        summary: 'Plan and run campaigns across search and social that grow our clients’ audiences.',
        responsibilities: [
            'Plan, launch and optimise paid search and social campaigns.',
            'Report on performance and recommend improvements.',
            'Collaborate with content and design on campaign assets.',
        ],
        requirements: [
            'Hands-on experience with Google Ads and Meta Ads.',
            'Comfortable with analytics tools and spreadsheets.',
            'Clear written and spoken communication.',
        ],
    },
    {
        id: 'graphic-designer',
        title: 'Graphic Designer',
        department: 'Graphic Designing',
        type: 'Full-time',
        location: 'On-site',
        summary: 'Create brand identities, marketing visuals and web designs that stand out.',
        responsibilities: [
            'Design logos, brand guides and marketing materials.',
            'Produce visuals for websites, apps and social media.',
            'Present concepts to clients and iterate on feedback.',
        ],
        requirements: [
            'A portfolio showing branding and digital design work.',
            'Proficiency with Figma and the Adobe Creative Suite.',
            'An eye for typography, colour and layout.',
        ],
    },
    {
        id: 'seo-content-writer',
        title: 'SEO Content Writer',
        department: 'SEO Content Writing',
        type: 'Part-time',
        location: 'Remote',
        summary: 'Write clear, search-friendly articles and web copy for a range of industries.',
        responsibilities: [
            'Research topics and keywords for articles and landing pages.',
            'Write, edit and optimise content for readers and search engines.',
            'Update existing content to keep it accurate and competitive.',
        ],
        requirements: [
            'Excellent written English and attention to detail.',
            'Working knowledge of on-page SEO.',
            'Samples of published writing.',
        ],
    },
];

export default jobs;
