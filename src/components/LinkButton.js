'use client';

import Link from 'next/link';
import { Button } from '@mui/material';

// A MUI Button that navigates with next/link. Server components can't pass
// `component={Link}` to Button themselves, since functions don't serialize.
export default function LinkButton(props) {
    return <Button component={Link} {...props} />;
}
