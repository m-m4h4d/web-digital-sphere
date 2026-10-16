'use client';

import React from 'react';
import Image from 'next/image';
import { Box, Card, CardContent, Chip, Grid, Typography } from '@mui/material';
import FilterChips, { ALL } from './FilterChips';

const PortfolioGrid = ({ projects, services }) => {
    const [service, setService] = React.useState(ALL);
    const visible = service === ALL ? projects : projects.filter((project) => project.service === service);

    return (
        <>
            <FilterChips options={services} value={service} onChange={setService} />
            <Grid container spacing={4}>
                {visible.map((project) => (
                    <Grid item xs={12} sm={6} md={4} key={project.title}>
                        <Card elevation={3} sx={{ height: '100%' }}>
                            <Box sx={{ height: 160, backgroundColor: '#F0F9FF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Image src={project.image} alt="" style={{ width: 80, height: 'auto' }} />
                            </Box>
                            <CardContent>
                                <Typography variant="caption" color="primary"><b>{project.service.toUpperCase()}</b></Typography>
                                <Typography variant="h6" component="h2"><b>{project.title}</b></Typography>
                                <Typography variant="body2" color="text.secondary" gutterBottom>{project.industry}</Typography>
                                <Typography variant="body2" sx={{ mb: 2 }}>{project.summary}</Typography>
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                    {project.tags.map((tag) => (
                                        <Chip key={tag} label={tag} size="small" variant="outlined" />
                                    ))}
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </>
    );
};

export default PortfolioGrid;
