import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { agencies, enterprises, startup, mediumnsmall, SME, Agencies, Startups, Enterprise } from '@/assets';
import Image from 'next/image';

const partners = [
    {
        image: <Enterprise />,
        title: 'Enterprise',
        icon: enterprises,
    },
    {
        image: <Agencies />,
        title: 'Agencies',
        icon: agencies,
    },
    {
        image: <Startups />,
        title: 'Startups',
        icon: startup,
    },
    {
        image: <SME />,
        title: 'SMEs',
        icon: mediumnsmall,
    },
]

const Partners = () => {
    return (
        <Box sx={{ background: '#F0F9FF', py: 6, justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column', width: '100%' }}>
            <Typography variant="h3" component="h2" gutterBottom sx={{ textAlign: 'center', px: 2 }}>
                <b>We Work With The Best Partners</b>
            </Typography>
            <Grid container spacing={4} sx={{ width: { xs: '90%', md: '80%' }, mt: 2 }}>
                {partners.map((partner, index) => (
                    <Grid item key={index} xs={12} sm={6} md={3}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center', borderRadius: 4 }}>
                            <Image src={partner.icon} alt={partner.title} style={{ objectFit: 'cover', width: '100%', height: 'auto', aspectRatio: '3 / 2', borderRadius: 19 }} />
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', mt: 2 }}>
                                <Box sx={{ width: 40, height: 40, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', '& svg': { width: '100%', height: '100%' } }}>
                                    {partner.image}
                                </Box>
                                <Typography variant="h6" sx={{ mx: 2 }}>
                                    {partner.title}
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Partners;
