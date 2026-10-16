import React from 'react';
import { Typography, Box, Grid, Paper, Link } from '@mui/material';
import { MapOutlined } from '@mui/icons-material';
import contact, { mailtoHref, telHref } from '@/data/contact';
import ContactForm from '@/components/Forms/ContactForm';

const Contact = () => {
    return (
        <Box sx={{ px: { md: 30, sm: 20, xs: 10 }, py: 12 }}>
            <Typography variant="h3" gutterBottom><b>Contact Us</b></Typography>
            <Typography gutterBottom>
                Strategically positioned to cater to the needs of emerging companies in a market-centered environment.
            </Typography>
            <Grid container spacing={4} sx={{ mt: 4 }}>
                <Grid item xs={12} md={6}>
                    {contact.mapEmbedUrl ? (
                        <iframe
                            src={contact.mapEmbedUrl}
                            width="100%"
                            height="100%"
                            style={{ border: 0, minHeight: 360 }}
                            allowFullScreen=""
                            loading="lazy"
                            title="Map"
                        />
                    ) : (
                        <Box sx={{ height: '100%', minHeight: 360, bgcolor: '#F0F9FF', border: '1px dashed', borderColor: 'primary.light', borderRadius: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', color: 'primary.main', p: 4 }}>
                            <MapOutlined sx={{ fontSize: 64 }} />
                            <Typography variant="body2" sx={{ mt: 1 }}>{contact.address}</Typography>
                        </Box>
                    )}
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="h4" gutterBottom sx={{ mt: 2 }}><b>Get In Touch.</b></Typography>
                    <Typography gutterBottom>
                        We would be happy to answer your questions, fill out the form and we shall respond promptly.
                    </Typography>
                    <ContactForm />
                    <Paper elevation={4} sx={{ py: 4, my: 4 }}>
                        <Grid container spacing={4} sx={{ display: "flex", justifyContent: "space-evenly" }}>
                            <Grid item md={6}>
                                <Typography ><b>ADDRESS</b></Typography>
                                <Typography variant='body2' gutterBottom>
                                    {contact.company}, {contact.address}
                                </Typography>
                            </Grid>
                            <Grid item md={5}>
                                <Typography ><b>EMAIL</b></Typography>
                                <Typography variant='body2' gutterBottom>
                                    <Link href={mailtoHref} color="inherit">{contact.email}</Link>
                                </Typography>
                                <Typography ><b>PHONE</b></Typography>
                                <Typography variant='body2' gutterBottom>
                                    <Link href={telHref} color="inherit">{contact.phone}</Link>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Contact;
