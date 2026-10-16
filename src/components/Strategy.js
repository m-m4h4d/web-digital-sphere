import React from 'react';
import { Container, Typography } from '@mui/material';
import LinkButton from './LinkButton';
import { agile } from '@/assets';
import Image from 'next/image';

const Strategy = () => {
    return (
        <Container maxWidth="md" sx={{ textAlign: 'center', py: 10, px: 2 }}>
            <Typography variant="h3" component="h2" gutterBottom sx={{ color: 'primary.main' }}>
                <Typography variant="h3" gutterBottom component="span" sx={{ color: 'black' }}><b>Our</b></Typography>
                <b> Agile Development Strategy</b>
            </Typography>
            <Image src={agile} alt="Agile Software Development" style={{ width: '100%', height: 'auto' }} />
            <Typography variant="body2" component="p" sx={{ mt: 4 }}>
                To benefit from our work ethics act now,
            </Typography>
            <LinkButton href="/contact" variant="contained" color="primary" sx={{ py: 1.5, mt: 1 }}>
                Get in Touch
            </LinkButton>
        </Container>
    );
};

export default Strategy;
