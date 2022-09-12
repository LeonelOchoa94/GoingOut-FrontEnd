import {
    React,
    useState,
    useEffect
} from 'react';
import Helmet from 'react-helmet';
import { Card, CardActionArea } from '@mui/material';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import { Styles } from '../utils/Styles.js';
import dataTables from './../utils/data.js';

function Home() {
    const classes = Styles()
    const [info, setInfo] = useState({})
    // name: 'Disponibles', value: available

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
            { id: 1, name: 'Ocupado', value: occupiedTable, color: '#e06666' }
            // { id: 0, name: 'Disponible', value: availableTable, color: '#0ca014' },
            // { id: 1, name: 'Ocupado', value: occupiedTable, color: '#e06666' }
        ])


    }

    const imprime = () => {
        console.log(info)
    }

    return (
        <div>
            <Helmet>
                <title>GO Management | Home</title>
            </Helmet>
            <Card className={classes.homeCard}>
                <CardActionArea>
                    <PieChart width={800} height={400} style={{ alignSelf: 'center' }}>
                        <Pie
                            data={info}
                            cx={120}
                            cy={200}
                            innerRadius={60}
                            outerRadius={80}
                            fill={info.color}
                            paddingAngle={5}
                            dataKey="value"
                        >
                            {/* {info.map(({ id, color }) => (
                        <Cell key={`cell-${id}`} fill={color} />
                    ))} */}
                        </Pie>
                    </PieChart>
                </CardActionArea>
            </Card>

            {/* <Pie
                    data={info}
                    cx={420}
                    cy={200}
                    startAngle={180}
                    endAngle={0}
                    innerRadius={60}
                    outerRadius={80}
                    // fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                >
                    {info.map(({ id, color }) => (
                        <Cell key={`cell-${id}`} fill={color} />
                    ))}
                </Pie> */}
            <button onClick={() => imprime()}>
                Imprime!
            </button>
        </div >
    )
}

export default Home