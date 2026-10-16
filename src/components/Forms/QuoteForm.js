'use client';

import React from 'react';
import { useFormState } from 'react-dom';
import { Alert, Box, Button, FormHelperText, Grid, MenuItem, TextField, Typography } from '@mui/material';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { submitQuote } from '@/lib/actions';
import { BUDGETS, MAX_ATTACHMENT_BYTES, initialFormState } from '@/lib/forms';
import countries from '@/data/countries';
import { Honeypot, SubmitButton, fieldError } from './FormParts';

function QuoteForm({ onDone }) {
    const [state, formAction] = useFormState(submitQuote, initialFormState);
    const [phone, setPhone] = React.useState('');
    const [fileName, setFileName] = React.useState('');
    const [fileError, setFileError] = React.useState('');

    // Catch oversized or non-PDF files before uploading them.
    const handleFileChange = (event) => {
        const file = event.target.files?.[0];
        let error = '';
        if (file && file.type !== 'application/pdf' && !file.name.toLowerCase().endsWith('.pdf')) {
            error = 'The attachment must be a PDF.';
        } else if (file && file.size > MAX_ATTACHMENT_BYTES) {
            error = 'The attachment must be 10MB or smaller.';
        }
        if (error) event.target.value = '';
        setFileError(error);
        setFileName(error ? '' : file?.name ?? '');
    };

    if (state.status === 'success') {
        return (
            <Box sx={{ p: 2 }}>
                <Alert severity="success">{state.message}</Alert>
                <Button onClick={onDone} sx={{ mt: 2 }}>Close</Button>
            </Box>
        );
    }

    const phoneError = state.errors?.phone;
    const attachmentError = fileError || state.errors?.attachment;

    return (
        <Box component="form" action={formAction} noValidate sx={{ position: 'relative' }}>
            <Honeypot />
            <Grid container spacing={2} sx={{ p: 2 }}>
                {state.status === 'error' && (
                    <Grid item xs={12}>
                        <Alert severity="error">{state.message}</Alert>
                    </Grid>
                )}
                <Grid item xs={12} sm={6}>
                    <TextField required fullWidth name="name" label="Full name" margin="normal" {...fieldError(state, 'name')} />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField fullWidth required name="email" type="email" label="Email Address" margin="normal" {...fieldError(state, 'email')} />
                </Grid>
                <Grid item xs={12} sm={12}>
                    <PhoneInput
                        country={'us'}
                        value={phone}
                        onChange={(value, data, event, formattedValue) => setPhone(formattedValue)}
                        inputProps={{ name: 'phone', required: true }}
                        isValid={!phoneError}
                        inputStyle={{ width: '100%', marginTop: '16px', marginBottom: '8px' }}
                    />
                    {phoneError && <FormHelperText error sx={{ mx: '14px' }}>{phoneError}</FormHelperText>}
                </Grid>
                <Grid item xs={12} sm={12}>
                    <TextField required fullWidth name="project" label="About your project" multiline rows={4} margin="normal" {...fieldError(state, 'project')} />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField select fullWidth name="budget" label="Budget" margin="normal" defaultValue="" {...fieldError(state, 'budget')}>
                        {BUDGETS.map(({ value, label }) => (
                            <MenuItem key={value} value={value}>{label}</MenuItem>
                        ))}
                    </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField select fullWidth name="country" label="Country" margin="normal" defaultValue="" {...fieldError(state, 'country')}>
                        {countries.map((country) => (
                            <MenuItem key={country} value={country}>{country}</MenuItem>
                        ))}
                    </TextField>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <Box sx={{ border: '1px dashed', borderColor: attachmentError ? 'error.main' : 'grey.500', p: 2, textAlign: 'center', mt: 2 }}>
                        <Typography><b>Attach the files related to your idea</b></Typography>
                        <Button component="label" color="primary">
                            Upload a file
                            <input type="file" name="attachment" accept="application/pdf,.pdf" hidden onChange={handleFileChange} />
                        </Button>
                        {fileName && !fileError && <Typography variant="body2">{fileName}</Typography>}
                        <Typography>Must be a PDF up to 10MB</Typography>
                        {attachmentError && <FormHelperText error sx={{ textAlign: 'center' }}>{attachmentError}</FormHelperText>}
                    </Box>
                </Grid>
            </Grid>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <SubmitButton sx={{ mt: 2 }}>Submit</SubmitButton>
            </Box>
        </Box>
    );
}

export default QuoteForm;
