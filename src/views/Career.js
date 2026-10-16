import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Chip, Container, Grid, Paper, Typography } from '@mui/material';
import { ExpandMore, GroupsOutlined, ScheduleOutlined, SchoolOutlined, TrendingUpOutlined } from '@mui/icons-material';
import PageHeader from '@/components/PageHeader';
import jobs, { perks } from '@/data/careers';
import contact from '@/data/contact';

const perkIcons = {
    schedule: <ScheduleOutlined fontSize="large" />,
    school: <SchoolOutlined fontSize="large" />,
    groups: <GroupsOutlined fontSize="large" />,
    trending: <TrendingUpOutlined fontSize="large" />,
};

const applyHref = (subject) => `mailto:${contact.email}?subject=${encodeURIComponent(subject)}`;

const List = ({ title, items }) => (
    <Box sx={{ mt: 2 }}>
        <Typography><b>{title}</b></Typography>
        <Box component="ul" sx={{ pl: 3, my: 1 }}>
            {items.map((item) => (
                <Typography component="li" variant="body2" key={item} sx={{ mb: 0.5 }}>{item}</Typography>
            ))}
        </Box>
    </Box>
);

const Career = () => (
    <>
        <PageHeader
            title="Careers"
            subtitle="Join a team of developers, designers, writers and marketers who build work that helps businesses grow."
        />
        <Container maxWidth="lg" sx={{ py: 8 }}>
            <Typography variant="h4" component="h2" align="center" gutterBottom><b>Why Work With Us?</b></Typography>
            <Grid container spacing={3} sx={{ mt: 2 }}>
                {perks.map((perk) => (
                    <Grid item xs={12} sm={6} md={3} key={perk.title}>
                        <Paper elevation={0} sx={{ p: 3, height: '100%', textAlign: 'center', border: '1px solid', borderColor: 'divider' }}>
                            <Box sx={{ color: 'primary.main' }}>{perkIcons[perk.icon]}</Box>
                            <Typography variant="h6" component="h3" sx={{ mt: 1 }}><b>{perk.title}</b></Typography>
                            <Typography variant="body2" color="text.secondary">{perk.description}</Typography>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Container>
        <Box sx={{ backgroundColor: '#F0F9FF', py: 8 }}>
            <Container maxWidth="md">
                <Typography variant="h4" component="h2" align="center" gutterBottom><b>Open Positions</b></Typography>
                <Box sx={{ mt: 4 }}>
                    {jobs.map((job) => (
                        <Accordion key={job.id} sx={{ mb: 2 }}>
                            <AccordionSummary expandIcon={<ExpandMore />} aria-controls={`${job.id}-content`} id={`${job.id}-header`}>
                                <Box>
                                    <Typography variant="h6" component="h3"><b>{job.title}</b></Typography>
                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 1 }}>
                                        <Chip label={job.department} size="small" color="primary" variant="outlined" />
                                        <Chip label={job.type} size="small" variant="outlined" />
                                        <Chip label={job.location} size="small" variant="outlined" />
                                    </Box>
                                </Box>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>{job.summary}</Typography>
                                <List title="What you'll do" items={job.responsibilities} />
                                <List title="What we're looking for" items={job.requirements} />
                                <Button variant="contained" href={applyHref(`Application: ${job.title}`)} sx={{ mt: 2 }}>
                                    Apply Now
                                </Button>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </Box>
                <Box sx={{ textAlign: 'center', mt: 6 }}>
                    <Typography variant="h6" component="p"><b>Don&rsquo;t see a role that fits?</b></Typography>
                    <Typography variant="body2" sx={{ mb: 2 }}>Send us your CV and tell us how you&rsquo;d like to contribute.</Typography>
                    <Button variant="outlined" href={applyHref('General application')}>Send Your CV</Button>
                </Box>
            </Container>
        </Box>
    </>
);

export default Career;
