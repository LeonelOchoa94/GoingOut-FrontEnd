import {React,useState,useEffect} from 'react';
import Helmet from 'react-helmet';
import { Badge, badgeClasses, Box, Grid, Typography } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import { HomeStyles } from '../utils/styles/HomeStyles';
import HomeCard from '../utils/func/HomeCard';
import axios from "axios";
import CustomCalendar from "./Reservas/CustomCalendar";
import Calendar from "./Reservas/Calendar";
import Reservas from "./Reservas/Reservas";

import { WbSunny } from '@mui/icons-material';


function Home() {
    const classes = HomeStyles()
    const [info, setInfo] = useState({})
    // -------------------
    const [count, setCount] = useState(0)
    // -------------------
    const [mesas, setMesas] = useState([])


    useEffect(() => {
        getData()
    }, [])// eslint-disable-line react-hooks/exhaustive-deps

    console.log(info)
    useEffect(() => {
        axios.get('https://localhost:7117/api/Tables')
          .then(result => {
            setMesas(result.data)       
            console.log(result.data);
          }).catch(e => {
            console.log(e);
          })
      }, [setMesas]);

    const getData = () => {        
        let availableTable = 0
        let occupiedTable = 0
        for (let i = 0; i < mesas.length; i++) {
            if (mesas[i].active === false) {
                availableTable += 1
                console.log(mesas[i].amount_People)
            } else {
                if (mesas[i].active === true) {
                    occupiedTable += 1
                }
            }
        }
        setInfo([
            { id: 0, name: 'Disponible', value: availableTable, color: '#0ca014' },
            { id: 1, name: 'Ocupado', value: occupiedTable, color: process.env.REACT_APP_COLOR_OCCUPIED }
        ])
    }

    const badgeStyle = {
        "&.MuiBadge-badge": {
            color: 'yellow',
            backgroundColor: '#686868',
            right: '50px',
            width: 35,
            height: 25,
            borderRadius: '50%'
        }
    }
    
    return (
        <div>
            <Helmet>
                <title>GO Management | Home</title>
            </Helmet>
            
            <Grid
                container
                className={classes.homeGrid}
                spacing={2}
                direction='row'
                justify='center'
                alignItems='center'
            >
                <Grid item lg={6} sm={3} xs={12}>
                    <HomeCard
                        header={'Ocupación de mesas'}
                        body={
                            <Box
                                style={{ marginLeft: '130px', marginBottom: '16em' }}
                            >
                                <PieChart width={800} height={400}>
                                    <Pie
                                        data={info}
                                        cx={120}
                                        cy={120}
                                        innerRadius={60}
                                        outerRadius={80}
                                        //fill={info.color}
                                        paddingAngle={8}
                                        dataKey="value"
                                    >
                                    </Pie>
                                </PieChart>
                            </Box>
                        }

                        path={'/'}
                    />

                </Grid>
                <Grid item lg={6} sm={3} xs={12}>
                    <HomeCard
                        header={'Pedidos en mesa'}
                        body={
                            <Badge
                                color='info'
                                badgeContent={count}
                                // variant='dot'
                                className={badgeStyle}
                            >
                                {/* <Badge color="primary" badgeContent={count}> */}
                                {count === 0 ? <NotificationsIcon sx={{ fontSize: '15em' }} /> : <NotificationsActiveIcon sx={{ fontSize: '15em' }} />}
                            </Badge>
                        }
                        path={'home'}
                    />
                </Grid>
                <Grid item lg={6} sm={3} xs={12}>
                    {/* <HomeCard
                        header={'Reservas'}
                        
                        body={ */}
                            <Box
                                 style={{  height: '300px', width:'500px',marginLeft: '22%'}}
                            >

                                {/* <CustomCalendar/> */}
                                <Reservas/>
                            </Box>
                        {/* }
                        path={'/'}
                        /> */}

                </Grid>

                <Grid item lg={6} sm={3} xs={12}>
                    <HomeCard
                        header={'Facturaciones'}
                        body={
                            <ReceiptLongIcon sx={{ fontSize: '15em' }} />
                        }
                        path={'/'}
                    />

                </Grid>

            </Grid>

            {/* <button onClick={() => imprime()}>
                Imprime!
            </button> */}
            {/* <button onClick={() => setCount(count + 1)}>
                Notificación
            </button> */}
        </div >
    )
}

export default Home