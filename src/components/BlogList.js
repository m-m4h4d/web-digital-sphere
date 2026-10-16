'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Box, Card, CardActionArea, CardContent, Chip, Grid, Typography } from '@mui/material';
import FilterChips, { ALL } from './FilterChips';
import { formatDate } from '@/data/blog';

const BlogList = ({ posts, categories }) => {
    const [category, setCategory] = React.useState(ALL);
    const visible = category === ALL ? posts : posts.filter((post) => post.category === category);

    return (
        <>
            <FilterChips options={categories} value={category} onChange={setCategory} />
            <Grid container spacing={4}>
                {visible.map((post) => (
                    <Grid item xs={12} sm={6} md={4} key={post.slug}>
                        <Card elevation={3} sx={{ height: '100%' }}>
                            <CardActionArea component={Link} href={`/blogs/${post.slug}`} sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'stretch', justifyContent: 'flex-start' }}>
                                <Box sx={{ position: 'relative', height: 200, backgroundColor: '#F0F9FF' }}>
                                    <Image src={post.image} alt="" fill sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw" style={{ objectFit: 'cover' }} />
                                </Box>
                                <CardContent>
                                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 1, mb: 1 }}>
                                        <Chip label={post.category} size="small" color="primary" variant="outlined" />
                                        <Typography variant="caption" color="text.secondary">{formatDate(post.date)}</Typography>
                                    </Box>
                                    <Typography variant="h6" component="h2" gutterBottom><b>{post.title}</b></Typography>
                                    <Typography variant="body2" color="text.secondary">{post.excerpt}</Typography>
                                    <Typography variant="body2" color="primary" sx={{ mt: 2 }}><b>Read more &rarr;</b></Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </>
    );
};

export default BlogList;
