import React from 'react';
import { Card, CardActionArea, Grid, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { HomeStyles } from '../styles/HomeStyles';

export default function HomeCard(props) {
    const classes = HomeStyles()

    return (
        <div>
            <Card className={classes.homeCard}>
                <CardActionArea component={Link} to={props.path}>
                    <Typography variant='h4'>
                        {props.header}
                    </Typography>
                    {props.body}
                </CardActionArea>
            </Card>
        </div>
    )
}
