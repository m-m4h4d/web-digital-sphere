import React from 'react';
import Image from 'next/image';
import { Box, Chip, Container, Divider, Typography } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { LinkButton, QuoteButton } from '@/components';
import { formatDate } from '@/data/blog';

const BlogPost = ({ post }) => (
    <Container maxWidth="md" component="article" sx={{ pt: { xs: 14, md: 18 }, pb: 10 }}>
        <LinkButton href="/blogs" startIcon={<ArrowBack />} sx={{ mb: 3 }}>All posts</LinkButton>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
            <Chip label={post.category} size="small" color="primary" variant="outlined" />
            <Typography variant="body2" color="text.secondary">
                <time dateTime={post.date}>{formatDate(post.date)}</time>
            </Typography>
        </Box>
        <Typography variant="h3" component="h1" gutterBottom><b>{post.title}</b></Typography>
        <Typography variant="h6" component="p" color="text.secondary" sx={{ mb: 4 }}>{post.excerpt}</Typography>
        <Box sx={{ position: 'relative', height: { xs: 240, md: 400 }, borderRadius: 2, overflow: 'hidden', backgroundColor: '#F0F9FF', mb: 4 }}>
            <Image src={post.image} alt="" fill priority sizes="(max-width: 900px) 100vw, 900px" style={{ objectFit: 'cover' }} />
        </Box>
        {post.body.map((paragraph, index) => (
            <Typography key={index} sx={{ mb: 2, lineHeight: 1.8 }}>{paragraph}</Typography>
        ))}
        <Divider sx={{ my: 6 }} />
        <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h5" component="h2" gutterBottom><b>Want help with your next project?</b></Typography>
            <QuoteButton variant="contained" size="large" sx={{ mt: 1 }}>Get A Quote</QuoteButton>
        </Box>
    </Container>
);

export default BlogPost;
