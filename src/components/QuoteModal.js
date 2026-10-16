'use client';

import React from 'react';
import { Button } from '@mui/material';
import RequestQuote from './RequestQuote';

const QuoteModalContext = React.createContext(() => {});

// One Request Quote modal for the whole site; any QuoteButton opens it.
export function QuoteModalProvider({ children }) {
    const [open, setOpen] = React.useState(false);
    const openQuote = React.useCallback(() => setOpen(true), []);

    return (
        <QuoteModalContext.Provider value={openQuote}>
            {children}
            <RequestQuote open={open} onClose={() => setOpen(false)} />
        </QuoteModalContext.Provider>
    );
}

export const useQuoteModal = () => React.useContext(QuoteModalContext);

// A MUI Button that opens the quote modal. Usable from server components.
export function QuoteButton({ onClick, ...props }) {
    const openQuote = useQuoteModal();
    return (
        <Button
            {...props}
            onClick={(event) => {
                onClick?.(event);
                openQuote();
            }}
        />
    );
}
