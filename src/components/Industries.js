import React from 'react';
import { Typography, Box, Grid, Card } from '@mui/material';
import { ecommerce, education, food, gaming, health, logistics, realestate, social, solutions, travel } from '@/assets';
import Image from 'next/image';

const industries = [
    {
        icon: ecommerce,
        title: 'Retail / Ecommerce',
    },
    {
        icon: education,
        title: 'Education & e-learning',
    },
    {
        icon: food,
        title: 'Food & Restaurant',
    },
    {
        icon: gaming,
        title: 'Gaming',
    },
    {
        icon: realestate,
        title: 'Real Estate',
    },
    {
        icon: health,
        title: 'Health & Fitness',
    },
    {
        icon: logistics,
        title: 'Logistics & Distribution',
    },
    {
        icon: social,
        title: 'Social Networking',
    },
    {
        icon: solutions,
        title: 'On Demand Solutions',
    },
    {
        icon: travel,
        title: 'Travel & Hospitality',
    }
]

const Industries = () => {
    return (
        <Box sx={{ background: '#F0F9FF', py: 6, justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column', width: '100%' }}>
            <Typography variant="h3" component="h2" gutterBottom sx={{ color: 'primary.main', textAlign: 'center', px: 2 }}>
                <Typography variant="h3" gutterBottom component="span" sx={{ color: 'black' }}><b>Industries</b></Typography>
                <b> We Work In</b>
            </Typography>
            <Grid container spacing={4} columns={15} sx={{ width: { xs: '90%', md: '80%' }, mt: 2 }}>
                {industries.map((industry, index) => (
                    <Grid item key={index} xs={15} sm={5} md={3}>
                        <Card sx={{ px: 2, py: 4, justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column', textAlign: 'center', height: '100%', borderRadius: 4 }}>
                            <Image src={industry.icon} alt="" style={{ objectFit: 'contain', width: 'auto', height: 50 }} />
                            <Typography variant="h6" sx={{ mt: 2 }}>
                                {industry.title}
                            </Typography>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Industries;
