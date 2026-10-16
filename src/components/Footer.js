import React from 'react';
import NextLink from 'next/link';
import { Box, Container, Grid, Typography, Link, Divider } from '@mui/material';
import { Facebook, Instagram, LinkedIn, X } from '@mui/icons-material';
import { footer } from '@/assets';
import { QuoteButton } from './QuoteModal';
import LinkButton from './LinkButton';
import contact from '@/data/contact';

const Buttons = {
    'Services': ['Digital Marketing', 'Graphic Designing', 'Web Development', 'Mobile Development', 'SEO Content Writing'],
    'Company': ['About Us', 'Careers', 'Blogs', 'Contact Us'],
    'Hire Now': ['Digital Marketer', 'Graphic Designer', 'Web Developer', 'App Developer', 'Content Writer'],
}

const companyLinks = {
    'About Us': '/about',
    'Careers': '/career',
    'Blogs': '/blogs',
    'Contact Us': '/contact',
};

const socialProfiles = [
    { key: 'facebook', label: 'Facebook', icon: <Facebook /> },
    { key: 'instagram', label: 'Instagram', icon: <Instagram /> },
    { key: 'x', label: 'X', icon: <X /> },
    { key: 'linkedin', label: 'LinkedIn', icon: <LinkedIn /> },
].filter(({ key }) => contact.social[key]);

const pillSx = {
    borderRadius: 999,
    backgroundColor: '#172554',
    '&:hover': { backgroundColor: 'primary.main' },
    mb: 1,
    ml: 1,
    boxShadow: 'none',
};

// Services open the portfolio filtered to that service, Company items go to
// their pages, and Hire Now items open the quote form.
function FooterButton({ section, item }) {
    if (section === 'Hire Now') {
        return <QuoteButton variant="contained" sx={pillSx}>{item}</QuoteButton>;
    }
    const href = section === 'Services' ? `/portfolio?service=${encodeURIComponent(item)}` : companyLinks[item];
    return <LinkButton variant="contained" href={href} sx={pillSx}>{item}</LinkButton>;
}

const Footer = () => {
    return (
        <footer>
            {/* Equal top and bottom padding puts the color split at the card's midpoint. */}
            <Box sx={{ background: 'linear-gradient(to bottom, #F0F9FF 50%, #292561 50%)', px: 2, py: 8 }}>
                <Box sx={{
                    maxWidth: 900,
                    mx: 'auto',
                    borderRadius: '19px',
                    backgroundImage: `url(${footer.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    color: 'white',
                    textAlign: 'center',
                    px: { xs: 3, sm: 6, md: 10 },
                    py: { xs: 5, md: 7 },
                }}>
                    <Typography variant="h4">
                        <b>Have A Project In Mind?</b>
                    </Typography>
                    <Typography variant='h6' sx={{ my: 1 }}>
                        Looking for answers and don&rsquo;t know where to begin? Plan your next venture with our expert guidance and consultancy.
                    </Typography>
                    <QuoteButton variant="contained" sx={{ background: 'white', color: 'primary.main', '&:hover': { background: '#F0F9FF' }, mt: 3, py: 1.5 }}>
                        Get Started Now
                    </QuoteButton>
                </Box>
            </Box>
            <Box sx={{ backgroundColor: '#292561', color: 'white', pt: { xs: 4, md: 6 }, pb: 16 }}>
                <Container>
                    <Grid container spacing={1}>
                        <Grid item xs={12} sm={6} md={3}>
                            <Box>
                                <Typography variant="h3" gutterBottom color="primary.main">
                                    <b>LOGO</b>
                                </Typography>
                                {socialProfiles.length > 0 && (
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', width: "80%" }}>
                                        {socialProfiles.map(({ key, label, icon }) => (
                                            <Link key={key} href={contact.social[key]} target="_blank" rel="noopener noreferrer" color="inherit" aria-label={label}>
                                                {icon}
                                            </Link>
                                        ))}
                                    </Box>
                                )}
                                <Typography variant="h5" sx={{ mt: 2 }}>
                                    Address
                                </Typography>

                                <Box sx={{ mt: 2, flexDirection: 'row', display: 'flex' }}>
                                    <Typography variant="h4" sx={{ mr: 2 }}>
                                        <b>{contact.countryCode}</b>
                                    </Typography>
                                    <Typography variant="body2">
                                        {contact.address}
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                        {Object.entries(Buttons).map(([section, items]) => (
                            <Grid item xs={12} sm={6} md={3} key={section}>
                                <Typography variant="h6" gutterBottom sx={{ ml: 1 }}>
                                    <b>{section}</b>
                                </Typography>
                                {items.map((item, index) => (
                                    <Box key={index}>
                                        <FooterButton section={section} item={item} />
                                    </Box>
                                ))}
                            </Grid>
                        ))}
                    </Grid>
                    <Divider sx={{ borderColor: 'inherit', mt: 3 }} />
                    <Box sx={{ textAlign: 'center', mt: 2, flexDirection: 'row', display: 'flex', justifyContent: 'space-between' }}>
                        <Typography variant="body2" color="inherit">
                            © 2024 Web Digital Sphere. All rights reserved.
                        </Typography>
                        <Typography variant="body2" color="inherit">
                            <NextLink href="/terms">Terms and Conditions</NextLink>{' '} | {' '}
                            <NextLink href="/privacy">Privacy Policy</NextLink>
                        </Typography>
                    </Box>
                </Container>
            </Box>
        </footer>
    );
};

export default Footer;
