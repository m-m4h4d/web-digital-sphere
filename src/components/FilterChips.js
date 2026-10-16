'use client';

import React from 'react';
import { Box, Chip } from '@mui/material';

export const ALL = 'All';

// A row of single-select chips with an "All" option first.
const FilterChips = ({ options, value, onChange }) => (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 1, mb: 4 }}>
        {[ALL, ...options].map((option) => (
            <Chip
                key={option}
                label={option}
                clickable
                color={value === option ? 'primary' : 'default'}
                variant={value === option ? 'filled' : 'outlined'}
                onClick={() => onChange(option)}
                aria-pressed={value === option}
            />
        ))}
    </Box>
);

export default FilterChips;
