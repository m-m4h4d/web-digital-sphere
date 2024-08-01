import React from 'react';
import { Typography, Box, TextField, Button, Grid, Paper } from '@mui/material';

const Contact = () => {
    return (
        <Box sx={{ px: { md: 30, sm: 20, xs: 10 }, py: 12 }}>
            <Typography variant="h3" gutterBottom><b>Contact Us</b></Typography>
            <Typography gutterBottom>
                Strategically positioned to cater to the needs of emerging companies in a market-centered environment.
            </Typography>
            <Grid container spacing={4} sx={{ mt: 4 }}>
                <Grid item xs={12} md={6}>
                    <iframe src="about:blank"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowfullscreen=""
                        loading="lazy"
                        title="Map"
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="h4" gutterBottom sx={{ mt: 2 }}><b>Get In Touch.</b></Typography>
                    <Typography gutterBottom>
                        We would be happy to answer your questions, fill out the form and we shall respond promptly.
                    </Typography>
                    <Box component="form" noValidate autoComplete="off" sx={{ my: 2 }}>
                        <TextField fullWidth label="Your Name" margin="normal" />
                        <TextField fullWidth label="Your Email" margin="normal" />
                        <TextField fullWidth label="Your Subject" margin="normal" />
                        <TextField
                            fullWidth
                            label="Add your message"
                            multiline
                            rows={4}
                            margin="normal"
                        />
                        <Button variant="contained" sx={{ mt: 2, width: "100%" }}>
                            Send
                        </Button>
                    </Box>
                    <Paper elevation={4} sx={{ py: 4, my: 4 }}>
                        <Grid container spacing={4} sx={{ display: "flex", justifyContent: "space-evenly" }}>
                            <Grid item md={6}>
                                <Typography ><b>ADDRESS</b></Typography>
                                <Typography variant='body2' gutterBottom>
                                    Web Digital Sphere, 123 Example Street, Suite 100, Anytown, USA
                                </Typography>
                            </Grid>
                            <Grid item md={5}>
                                <Typography ><b>EMAIL</b></Typography>
                                <Typography variant='body2' gutterBottom>
                                    hello@example.com
                                </Typography>
                                <Typography ><b>PHONE</b></Typography>
                                <Typography variant='body2' gutterBottom>
                                    +1 (555) 010-0000
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
