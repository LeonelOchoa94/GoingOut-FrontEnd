import * as React from 'react'
import { Box, CircularProgress, Typography } from '@mui/material';

export default function LoadingComponent(props) {

    return (
        <Box className={props.style}>
            <CircularProgress size={'5em'} sx={{ color: '#F3734D' }} />
            <Box className={props.style}>
                <Typography variant='caption' component='div' color='text.secondary' >
                    Cargando...
                </Typography>
            </Box>
        </Box>
    )
}
