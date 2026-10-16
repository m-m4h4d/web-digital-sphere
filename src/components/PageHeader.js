import React from 'react';
import { Box, Typography } from '@mui/material';

// Title band for simple pages. The top padding clears the fixed NavBar.
const PageHeader = ({ title, subtitle, children }) => (
    <Box sx={{ backgroundColor: '#F0F9FF', textAlign: 'center', px: 2, pt: { xs: 14, md: 18 }, pb: { xs: 6, md: 8 } }}>
        <Typography variant="h3" component="h1" gutterBottom>
            <b>{title}</b>
        </Typography>
        {subtitle && (
            <Typography sx={{ maxWidth: 720, mx: 'auto' }}>
                {subtitle}
            </Typography>
        )}
        {children}
    </Box>
);

export default PageHeader;
