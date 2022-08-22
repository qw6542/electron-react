import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';

export default function MyAppBar() {
    return (
        <AppBar position="relative">
            <Toolbar>
                <PhotoCamera sx={{ mr: 2 }} />
                <Typography variant="h6" color="inherit" noWrap>
                    Album layout
                </Typography>
            </Toolbar>
        </AppBar>
    );
}