import React from 'react';
import { Container } from '@mui/material';
import PageHeader from '@/components/PageHeader';
import BlogList from '@/components/BlogList';
import posts, { categories } from '@/data/blog';

const Blogs = () => (
    <>
        <PageHeader
            title="Our Blog"
            subtitle="Ideas, guides and lessons from our team on web development, design, marketing and content."
        />
        <Container maxWidth="lg" sx={{ py: 8 }}>
            <BlogList posts={posts} categories={categories} />
        </Container>
    </>
);

export default Blogs;
