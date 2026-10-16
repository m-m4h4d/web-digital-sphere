import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import LinkButton from './LinkButton';
import { w, imageicon, WebDesignServices, GraphicDesignServices, MarketingServices } from '@/assets';
import Image from 'next/image';

const DigiBusiness = () => {
    return (
        <>
            <style>
                {`
                @keyframes rotate {
                    from {
                        transform: rotate(0deg) scale(0.8);
                    }
                    50% {
                        transform: rotate(180deg) scale(0.5);
                    }
                    to {
                        transform: rotate(360deg) scale(0.8);
                    }
                }
            `}
            </style>
            <Box sx={{ background: '#F0F9FF', width: '100%', py: 6, alignItems: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <Typography variant="h3" textAlign="center" component="h2" gutterBottom sx={{ color: 'primary.main', width: { xs: '100%', md: '60%' }, px: 2 }}>
                    <b>How We Run</b>
                    <Typography variant="h3" textAlign="center" gutterBottom component="span" sx={{ color: 'black' }}>
                        <b> Your Digital Businesses</b>
                    </Typography>
                </Typography>
                <Grid container spacing={{ xs: 2, md: 6 }} sx={{ px: { xs: 3, md: 12 }, maxWidth: 1400, alignItems: 'center' }}>
                    <Grid item xs={12} md={6}>
                        <Box sx={{ mx: { xs: 0, md: 4 }, my: 4 }}>
                            <Typography variant="h6" sx={{ mb: 4 }}>
                                “Driving Down The Road Business Growth”
                            </Typography>
                            <Typography variant="body1" sx={{ maxWidth: 520, mb: 4 }}>
                                Are you up to a digital strategy with digital branding services that gather, inspire, and generate leads? Webdigitalspere is taking your digital businesses to the next tier. Boost your revenue with an unbeatable, unique, and experienced business partner you will find once in a blue moon!
                            </Typography>
                            <Typography variant="h6" sx={{ mb: 2 }}>
                                <b>Uplifting Your Online Business Through:</b>
                            </Typography>
                            <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2, maxWidth: 420 }}>
                                    <Box sx={{ width: 48, height: 48, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', '& svg': { maxWidth: '100%', maxHeight: '100%' } }}>
                                        <WebDesignServices />
                                    </Box>
                                    <Typography variant="body1">
                                        Web design services for small businesses to enterprise website development services
                                    </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2, maxWidth: 420 }}>
                                    <Box sx={{ width: 48, height: 48, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', '& svg': { maxWidth: '100%', maxHeight: '100%' } }}>
                                        <GraphicDesignServices />
                                    </Box>
                                    <Typography variant="body1">
                                        Full range graphic design and branding services
                                    </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2, maxWidth: 420 }}>
                                    <Box sx={{ width: 48, height: 48, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', '& svg': { maxWidth: '100%', maxHeight: '100%' } }}>
                                        <MarketingServices />
                                    </Box>
                                    <Typography variant="body1">
                                        Professional marketing services for digital solutions
                                    </Typography>
                                </Box>
                            </Box>
                            <Typography variant="body1" sx={{ mt: 4 }}>
                                To get our services now,
                            </Typography>
                            <LinkButton href="/contact" variant="contained" color="primary" sx={{ mt: 2 }}>
                                Get In Touch
                            </LinkButton>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        {/* The sphere logo sits in the middle of the rotating ring of tech icons.
                            w.webp is only 64x80, so it is kept small to avoid looking blurry. */}
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', maxWidth: 520, mx: 'auto' }}>
                            <Image src={w} alt="" style={{ position: 'absolute', width: '35%', maxWidth: 180, height: 'auto' }} />
                            <Image src={imageicon} alt="" style={{ width: '100%', height: 'auto', animation: 'rotate 10s linear infinite', transformOrigin: 'center', transform: 'scale(0.8)' }} />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default DigiBusiness;
