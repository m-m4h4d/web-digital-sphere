import React, { Suspense } from 'react';
import { Box, Container, Typography } from '@mui/material';
import PageHeader from '@/components/PageHeader';
import PortfolioGrid from '@/components/PortfolioGrid';
import { QuoteButton } from '@/components';
import projects, { services } from '@/data/portfolio';

const Portfolio = () => (
    <>
        <PageHeader
            title="Our Portfolio"
            subtitle="A selection of projects across web development, mobile apps, design, marketing and content."
        />
        <Container maxWidth="lg" sx={{ py: 8 }}>
            {/* useSearchParams in PortfolioGrid needs a Suspense boundary to prerender. */}
            <Suspense>
                <PortfolioGrid projects={projects} services={services} />
            </Suspense>
            <Box sx={{ textAlign: 'center', mt: 8 }}>
                <Typography variant="h5" component="h2" gutterBottom><b>Have a project in mind?</b></Typography>
                <QuoteButton variant="contained" size="large" sx={{ mt: 1 }}>Get A Quote</QuoteButton>
            </Box>
        </Container>
    </>
);

export default Portfolio;
