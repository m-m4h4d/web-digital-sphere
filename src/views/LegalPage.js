import React from 'react';
import { Alert, Container, Typography } from '@mui/material';
import PageHeader from '@/components/PageHeader';

// Placeholder for legal pages. The real text must come from the business
// (ideally reviewed by a lawyer); nothing here is actual terms or policy.
const LegalPage = ({ title, sections }) => (
    <>
        <PageHeader title={title} />
        <Container maxWidth="md" sx={{ py: 8 }}>
            <Alert severity="warning" sx={{ mb: 4 }}>
                This page is a placeholder. Replace it with your own {title.toLowerCase()} before the site goes live.
            </Alert>
            {sections.map(({ heading, description }) => (
                <React.Fragment key={heading}>
                    <Typography variant="h5" component="h2" sx={{ mt: 4, mb: 1 }}><b>{heading}</b></Typography>
                    <Typography color="text.secondary">{description}</Typography>
                </React.Fragment>
            ))}
        </Container>
    </>
);

export default LegalPage;
