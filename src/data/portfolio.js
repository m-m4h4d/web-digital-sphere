// Placeholder portfolio projects. Replace with real client work (and real
// screenshots) before launch.
import { ecommerce, education, food, gaming, health, logistics, realestate, social, travel } from '@/assets';

const projects = [
    {
        title: 'Online Store Relaunch',
        industry: 'Retail / Ecommerce',
        service: 'Web Development',
        image: ecommerce,
        summary: 'A faster storefront with a simpler checkout and a product catalogue the client can manage themselves.',
        tags: ['Next.js', 'Headless CMS', 'Payments'],
    },
    {
        title: 'Learning Platform App',
        industry: 'Education & e-learning',
        service: 'Mobile Development',
        image: education,
        summary: 'A cross-platform app for short video lessons, quizzes and progress tracking.',
        tags: ['Flutter', 'iOS', 'Android'],
    },
    {
        title: 'Restaurant Brand Refresh',
        industry: 'Food & Restaurant',
        service: 'Graphic Designing',
        image: food,
        summary: 'A new logo, menu design and social media templates for a growing restaurant group.',
        tags: ['Branding', 'Print', 'Social Templates'],
    },
    {
        title: 'Game Launch Campaign',
        industry: 'Gaming',
        service: 'Digital Marketing',
        image: gaming,
        summary: 'A launch campaign across social and search to build an audience ahead of release day.',
        tags: ['Paid Social', 'Influencers', 'Analytics'],
    },
    {
        title: 'Property Listings Website',
        industry: 'Real Estate',
        service: 'Web Development',
        image: realestate,
        summary: 'Searchable listings with map views, saved searches and enquiry forms for agents.',
        tags: ['React', 'Maps', 'Lead Capture'],
    },
    {
        title: 'Fitness Blog Content Program',
        industry: 'Health & Fitness',
        service: 'SEO Content Writing',
        image: health,
        summary: 'A monthly program of researched articles targeting the questions members ask most.',
        tags: ['Keyword Research', 'Articles', 'On-page SEO'],
    },
    {
        title: 'Delivery Tracking App',
        industry: 'Logistics & Distribution',
        service: 'Mobile Development',
        image: logistics,
        summary: 'Real-time delivery tracking for customers and a route view for drivers.',
        tags: ['React Native', 'Maps', 'Push Notifications'],
    },
    {
        title: 'Community Growth Strategy',
        industry: 'Social Networking',
        service: 'Digital Marketing',
        image: social,
        summary: 'A content and community plan that grew engagement across the client’s social channels.',
        tags: ['Content Calendar', 'Community', 'Reporting'],
    },
    {
        title: 'Travel Agency Website',
        industry: 'Travel & Hospitality',
        service: 'Web Development',
        image: travel,
        summary: 'Destination pages, trip enquiry forms and a booking flow that works well on mobile.',
        tags: ['Next.js', 'SEO', 'Forms'],
    },
];

export const services = [...new Set(projects.map((project) => project.service))];

export default projects;
