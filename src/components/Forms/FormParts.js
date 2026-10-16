'use client';

import { useFormStatus } from 'react-dom';
import { Box, Button, CircularProgress } from '@mui/material';

export function SubmitButton({ children, sx }) {
    const { pending } = useFormStatus();
    return (
        <Button
            type="submit"
            variant="contained"
            disabled={pending}
            startIcon={pending ? <CircularProgress size={18} color="inherit" /> : null}
            sx={sx}
        >
            {pending ? 'Sending...' : children}
        </Button>
    );
}

// Hidden from people but not from bots; the server action discards
// submissions that fill it in.
export function Honeypot() {
    return (
        <Box aria-hidden="true" sx={{ position: 'absolute', left: '-10000px', width: 1, height: 1, overflow: 'hidden' }}>
            <label>
                Website
                <input type="text" name="website" tabIndex={-1} autoComplete="off" />
            </label>
        </Box>
    );
}

// Props that wire a TextField to the server action's per-field errors.
export const fieldError = (state, name) => ({
    error: Boolean(state.errors?.[name]),
    helperText: state.errors?.[name],
});
