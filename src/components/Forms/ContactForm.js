'use client';

import React from 'react';
import { useFormState } from 'react-dom';
import { Alert, Box, Button, TextField } from '@mui/material';
import { submitContact } from '@/lib/actions';
import { initialFormState } from '@/lib/forms';
import { Honeypot, SubmitButton, fieldError } from './FormParts';

function Form({ onReset }) {
    const [state, formAction] = useFormState(submitContact, initialFormState);

    if (state.status === 'success') {
        return (
            <Box sx={{ my: 2 }}>
                <Alert severity="success">{state.message}</Alert>
                <Button onClick={onReset} sx={{ mt: 2 }}>Send another message</Button>
            </Box>
        );
    }

    return (
        <Box component="form" action={formAction} noValidate autoComplete="off" sx={{ my: 2, position: 'relative' }}>
            {state.status === 'error' && <Alert severity="error" sx={{ mb: 1 }}>{state.message}</Alert>}
            <Honeypot />
            <TextField fullWidth required name="name" label="Your Name" margin="normal" {...fieldError(state, 'name')} />
            <TextField fullWidth required name="email" type="email" label="Your Email" margin="normal" {...fieldError(state, 'email')} />
            <TextField fullWidth required name="subject" label="Your Subject" margin="normal" {...fieldError(state, 'subject')} />
            <TextField
                fullWidth
                required
                name="message"
                label="Add your message"
                multiline
                rows={4}
                margin="normal"
                {...fieldError(state, 'message')}
            />
            <SubmitButton sx={{ mt: 2, width: '100%' }}>Send</SubmitButton>
        </Box>
    );
}

// Remounting the form (new key) clears its fields and the action state.
export default function ContactForm() {
    const [formKey, setFormKey] = React.useState(0);
    return <Form key={formKey} onReset={() => setFormKey((key) => key + 1)} />;
}
