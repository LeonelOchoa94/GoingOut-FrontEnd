
import * as React from 'react';
import { Helmet } from 'react-helmet';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TextField
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import LoadingComponent from '../../../utils/func/LoadingComponent';
import { PlaceMapStyles } from '../../../utils/styles/PlaceMapStyles';
import { dataTable } from '../../../utils/func/dataTable';
import PlaceMap from './PlaceMap';
import { useDrop } from 'react-dnd';

export default function Tables() {
    const classes = PlaceMapStyles()
    const [newName, setNewName] = React.useState('')
    const [move, setMove] = React.useState(false)
    const [loading, setLoading] = React.useState(true)
    const [tableName, setTableName] = React.useState(null)
    const [openDialog, setOpenDialog] = React.useState(false)
    const [tables, setTables] = React.useState([])
    const boxsRef = React.useRef(tables.map(() => React.createRef()))

    // const [{ isOver }, drop] = useDrop(() => ({
    //     accept: 'box',
    //     drop: (item, monitor) => {
    //         const delta = monitor.getDifferenceFromInitialOffset();
    //         const left = Math.round(item.left + delta.x)
    //         const top = Math.round(item.top + delta.y)
    //         moveBox(item.id, left, top)
    //         return undefined
    //     },
    //     collect: (monitor) => ({
    //         isOver: monitor.isOver()
    //     })
    // }))

    // const moveBox = (id, left, top) => {
    //     const tablePosition = tables.map((table) => {
    //         if (table.tableName === id) {
    //             return { ...table, left, top }
    //         } else {
    //             return table
    //         }
    //     })
    //     setTables(tablePosition)
    // }

    React.useEffect(() => {
        //SE COMENTA EL INTERVALO PARA QUE NO SATURE DE CONECCIÓN
        // const interval = setInterval(() => {
        getData()
        // }, process.env.REACT_APP_TIMEOUT_TABLE_DATA);
        // return () => clearInterval(interval);
    }, []);

    const getData = () => {
        setTables(dataTable)
        setLoading(false)
        console.log('Tiempo --> ', process.env.REACT_APP_TIMEOUT_TABLE_DATA)
        console.log('resultado -->', dataTable)
    }

    const onAddButton = () => {
        let newTable = { left: 0, top: 0, tableName: tables.length + 1, widht: 70, height: 50, available: true, name: null, waiter: null, amount: 0 }
        setTables(value => [...value, newTable])
    }

    const handleCloseDialog = () => {
        setOpenDialog(false)
    }

    const saveName = () => {
        console.log('Nuevo nombre -->', newName)
        const updateTable = tables.map(table => {
            if (table.tableName === tableName) {
                return { ...table, name: newName, available: false };
            }
            return table;
        });
        setTables(updateTable)
        setOpenDialog(false)
    }


    if (loading) {
        return (
            <div>
                <Helmet>
                    <title>Cargando... Going Out Management </title>
                </Helmet>
                < LoadingComponent style={classes.circularProgressBox} />
            </div>
        )
    }
    return (
        <>
            <Helmet>
                <title>Going Out Management | Mesas</title>
            </Helmet>

            <div style={{ marginTop: '3%' }}>

                <Button
                    sx={{
                        position: 'absolute',
                        top: '90px',
                        right: '16px',
                        color: '#F3734D',
                        border: '1px solid #F3734D',
                    }}
                    className={classes.editButton}
                    startIcon={move ? <CheckCircleOutlineIcon /> : <EditIcon />}
                    onClick={() => move ? console.log('Nuevos Datos --> ') : setMove(!move)}
                >
                    {move ? 'Guardar cambios' : 'Editar'}
                </Button>

                {move &&
                    <Button
                        sx={{
                            position: 'absolute',
                            top: '90px',
                            right: '200px',
                            color: '#F3734D',
                            border: '1px solid #F3734D',
                        }}
                        className={classes.editButton}
                        startIcon={<ControlPointIcon />}
                        onClick={() => onAddButton()}
                    > Agregar mesa
                    </Button>
                }

                {/* <Stack direction={'row'} spacing={3}> */}
                {/* <div reg={drop} style={{ width: '100%', height: '100%' }}> */}
                {tables.map((table, index) => (
                    <PlaceMap
                        ref={boxsRef.current[index]}
                        x={table.top}
                        y={table.left}
                        key={table.tableName}
                        openDialog={setOpenDialog}
                        getTableName={setTableName}
                        waiter={table.waiter}
                        amount={table.amount}
                        name={table.name}
                        available={table.available}
                        tableName={table.tableName}
                        move={move}
                    />

                ))}
                {/* </div> */}
                {/* </Stack> */}

            </div>

            <Dialog open={openDialog} onClose={handleCloseDialog}>
                <DialogTitle>Nuevo cliente</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Ingrese el nombre del cliente
                    </DialogContentText>
                    <TextField
                        autoFocus
                        fullWidth
                        margin='dense'
                        id='nombre'
                        label='Nombre'
                        type='text'
                        variant='standard'
                        onChange={(e) => setNewName(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialog}>Cancelar</Button>
                    <Button onClick={() => saveName()}>Aceptar</Button>
                </DialogActions>
            </Dialog>

        </>
    )
}