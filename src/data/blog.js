// Placeholder blog posts. Replace with real articles (or load them from a
// CMS) before launch.
import { cw, wd, dm, gd, md, plan } from '@/assets';

const posts = [
    {
        slug: 'why-your-business-website-needs-a-redesign',
        title: '5 Signs Your Business Website Needs a Redesign',
        category: 'Web Development',
        date: '2026-09-22',
        image: wd,
        excerpt: 'Slow pages, a dated look and forms nobody fills in all cost you customers. Here is how to tell when it is time to start over.',
        body: [
            'Your website is often the first conversation a customer has with your business. If it loads slowly, looks dated or is hard to use on a phone, many visitors will leave before they ever learn what you offer.',
            'Watch for a few warning signs: pages that take more than three seconds to load, a layout that breaks on mobile, content you are embarrassed to update, and contact forms that rarely produce leads.',
            'A redesign is a chance to fix the foundations as well as the visuals. Start from your goals, map the journeys your customers actually take, and build pages around them.',
            'Finally, measure. Set a baseline for speed, traffic and conversions before you launch so you can see exactly what the new site changed.',
        ],
    },
    {
        slug: 'seo-content-that-ranks',
        title: 'Writing SEO Content That Ranks and Reads Well',
        category: 'SEO Content Writing',
        date: '2026-09-08',
        image: cw,
        excerpt: 'Search engines reward content written for people. A practical approach to keywords, structure and readability.',
        body: [
            'Good SEO content starts with a real question your audience is asking. Keyword research tells you how they phrase it; your job is to answer it better than anyone else.',
            'Structure helps both readers and search engines. Use descriptive headings, short paragraphs and lists where they make scanning easier.',
            'Resist stuffing keywords. Use the main phrase naturally in the title, the introduction and a heading or two, then write for the reader.',
            'Keep content fresh. Revisit your best-performing pages every few months to update facts, add examples and improve internal links.',
        ],
    },
    {
        slug: 'social-media-strategy-for-small-businesses',
        title: 'A Social Media Strategy for Small Businesses',
        category: 'Digital Marketing',
        date: '2026-08-25',
        image: dm,
        excerpt: 'You do not need to be on every platform. Pick the right channels, post with purpose and measure what matters.',
        body: [
            'Small teams get the best results by focusing. Choose the one or two platforms where your customers already spend time, and do them well.',
            'Plan content around a few themes that reflect your expertise, your customers and your culture. A simple monthly calendar keeps you consistent.',
            'Engagement matters more than follower counts. Reply to comments, share customer stories and ask questions that invite conversation.',
            'Review your analytics monthly and double down on the posts that drive visits, enquiries or sales.',
        ],
    },
    {
        slug: 'building-a-memorable-brand-identity',
        title: 'Building a Memorable Brand Identity',
        category: 'Graphic Designing',
        date: '2026-08-11',
        image: gd,
        excerpt: 'A logo is only the start. Colour, type and tone of voice work together to make your brand recognisable.',
        body: [
            'A strong brand identity is consistent everywhere your customers meet you: your website, social posts, invoices and packaging.',
            'Start with a clear idea of who you are and who you serve. Design choices such as colour, typography and imagery should express that idea.',
            'Document the rules in a simple brand guide so everyone on your team, and every partner, applies them the same way.',
            'Revisit your identity as you grow, but evolve it gradually so customers keep recognising you.',
        ],
    },
    {
        slug: 'native-vs-cross-platform-apps',
        title: 'Native or Cross-Platform? Choosing How to Build Your App',
        category: 'Mobile Development',
        date: '2026-07-28',
        image: md,
        excerpt: 'Flutter and React Native can ship to iOS and Android from one codebase. When does going native still make sense?',
        body: [
            'Cross-platform frameworks such as Flutter and React Native let one team ship to iOS and Android, which often means faster delivery and lower cost.',
            'Native development still shines for apps that lean heavily on device hardware, complex animations or the very latest platform features.',
            'Consider your budget, timeline, the skills on your team and how much the app needs to feel at home on each platform.',
            'Whichever route you choose, invest early in testing on real devices and a release process you can repeat.',
        ],
    },
    {
        slug: 'planning-a-website-project-budget',
        title: 'How to Plan the Budget for a Website Project',
        category: 'Web Development',
        date: '2026-07-14',
        image: plan,
        excerpt: 'What drives the cost of a website, and how to plan a budget that leaves room for what matters most.',
        body: [
            'The biggest cost drivers are the number of unique page templates, custom functionality, integrations with other systems and the amount of content to produce.',
            'Separate must-haves from nice-to-haves. Launching a focused first version and improving it later is usually better value than trying to build everything at once.',
            'Remember ongoing costs: hosting, maintenance, security updates and content changes.',
            'Share your budget range early with your agency so they can recommend the approach that delivers the most within it.',
        ],
    },
];

export const categories = [...new Set(posts.map((post) => post.category))];

export const getPost = (slug) => posts.find((post) => post.slug === slug);

export const formatDate = (date) =>
    new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });

export default posts;
