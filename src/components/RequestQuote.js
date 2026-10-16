'use client';

import React from 'react';
import { Box, Grid, Typography, Modal } from '@mui/material';
import { PhoneOutlined, EmailOutlined, CalendarMonthOutlined } from '@mui/icons-material';
import QuoteForm from './Forms/QuoteForm';
import contact from '@/data/contact';

const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    maxHeight: '90vh',
    overflowY: 'auto',
    borderRadius: 4,
    height: 'auto',
};

const RequestQuote = ({ open, onClose }) => {
    return (
        <Modal open={open} onClose={onClose}>
            <Box sx={modalStyle}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4} sx={{ bgcolor: 'primary.main', color: 'white', p: 2 }}>
                        <Typography variant="h3" gutterBottom><b>Contact Information</b></Typography>
                        <Typography gutterBottom>You can reach us at:</Typography>
                        <Box sx={{ display: "flex" }}>
                            <PhoneOutlined sx={{ mx: 1 }} />
                            <Typography gutterBottom>{contact.phone}</Typography>
                        </Box>
                        <Box sx={{ display: "flex" }}>
                            <EmailOutlined sx={{ mx: 1 }} />
                            <Typography gutterBottom>{contact.email}</Typography>
                        </Box>
                        <Box sx={{ display: "flex" }}>
                            <CalendarMonthOutlined sx={{ mx: 1 }} />
                            <Typography gutterBottom>{contact.hours}</Typography>
                        </Box>
                        <Typography variant="h4" sx={{ mt: 4 }}><b>What Will Happen Next?</b></Typography>
                        <Typography component="div">
                            <ul>
                                <li>We will reach out to you within 24 hours.</li>
                                <li>We will discuss your project and gather your requirements and business objectives.</li>
                                <li>Develop a proposal accordingly.</li>
                            </ul>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={8} sx={{ p: 2 }}>
                        <Typography variant="h4"><b>Request A Quote</b></Typography>
                        <Typography>Tell us about your business goals and we will contact you</Typography>
                        <QuoteForm onDone={onClose} />
                    </Grid>
                </Grid>
            </Box>
        </Modal>
    );
};

export default RequestQuote;
