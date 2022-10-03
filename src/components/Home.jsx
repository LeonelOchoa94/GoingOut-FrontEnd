import {
    React,
    useState,
    useEffect
} from 'react';
import Helmet from 'react-helmet';
// import dayjs, { Dayjs } from 'dayjs';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { CalendarPicker } from '@mui/x-date-pickers/CalendarPicker';
// import { MonthPicker } from '@mui/x-date-pickers/MonthPicker';
// import { YearPicker } from '@mui/x-date-pickers/YearPicker';
import { Badge, badgeClasses, Box, Grid, Typography } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import { HomeStyles } from '../utils/styles/HomeStyles';
import HomeCard from '../utils/func/HomeCard';
import dataTables from './../utils/data.js';


// const minDate = dayjs('2020-01-01T00:00:00.000');
// const maxDate = dayjs('2027-01-01T00:00:00.000');

function Home() {
    const classes = HomeStyles()
    // const [date, setDate] = useState < Dayjs | null > (dayjs())
    const [info, setInfo] = useState({})
    // -------------------
    const [count, setCount] = useState(0)
    // -------------------

    useEffect(() => {
        getData()
    }, [])// eslint-disable-line react-hooks/exhaustive-deps

    const getData = () => {
        let availableTable = 0
        let occupiedTable = 0
        for (let i = 0; i < dataTables.length; i++) {
            if (dataTables[i].state === true) {
                availableTable += 1
            } else {
                if (dataTables[i].state === false) {
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
        "& .MuiBadge-badge": {
            color: 'yellow',
            backgroundColor: '#686868',
            right: '50px',
            width: 35,
            height: 25,
            borderRadius: '50%'
        }
    }

    const imprime = () => {
        console.log(info)
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
                                        cy={200}
                                        innerRadius={60}
                                        outerRadius={80}
                                        // fill={info.color}
                                        paddingAngle={5}
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
                    <HomeCard
                        header={'Reservas'}
                        // body={
                        //     <LocalizationProvider dateAdapter={AdapterDayjs}>
                        //         <Grid container spacing={3}>
                        //             <Grid item xs={12} md={6}>
                        //                 <CalendarPicker date={date} onChange={(newDate) => setDate(newDate)} />
                        //             </Grid>
                        //             <Grid item xs={12} md={6}>
                        //                 <MonthPicker
                        //                     date={date}
                        //                     minDate={minDate}
                        //                     maxDate={maxDate}
                        //                     onChange={(newDate) => setDate(newDate)}
                        //                 />
                        //             </Grid>
                        //             <Grid item xs={12} md={6}>
                        //                 <YearPicker
                        //                     date={date}
                        //                     minDate={minDate}
                        //                     maxDate={maxDate}
                        //                     onChange={(newDate) => setDate(newDate)}
                        //                 />
                        //             </Grid>
                        //         </Grid>
                        //     </LocalizationProvider>
                        // }

                        path={'/'}
                    />

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
            <button onClick={() => setCount(count + 1)}>
                Notificación
            </button>
        </div >
    )
}

export default Home