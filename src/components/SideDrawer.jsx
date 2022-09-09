import { React, useState } from 'react';
import {
    Collapse,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from '@mui/material/';
import { Link } from 'react-router-dom';
import NotificationsIcon from '@mui/icons-material/Notifications';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MovingIcon from '@mui/icons-material/Moving';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { Sidebar } from '../utils/Styles';

export default function SideDreawer(props) {

    const classes = Sidebar()
    const [openMenu, setOpenMenu] = useState(false);
    const [openReservation, setOpenReservation] = useState(false);
    const [openBillings, setOpenBillings] = useState(false);

    const listMenuOptions = [
        { id: 0, label: 'Platos', path: 'menu-platos', },
        { id: 1, label: 'Bebidas', path: 'menu-bebidas', },
        { id: 2, label: 'Postres', path: 'menu-postres', }
    ]

    const listReservationOptions = [
        { id: 0, label: 'Programar reserva', path: 'programar-reserva' },
        { id: 1, label: 'Eliminar reserva', path: 'eliminar-reserva' },
    ]

    const listBillingsOptions = [
        { id: 0, label: 'Ver Información', path: 'facturaciones' },
        { id: 1, label: 'Programar Solicitud', path: 'programar-solicitud-facturacion' },
    ]

    const handleClickMenu = () => {
        setOpenMenu(!openMenu)
    }

    const handleClickReservation = () => {
        setOpenReservation(!openReservation)
    }

    const handleClickBillings = () => {
        setOpenBillings(!openBillings)
    }

    return (
        <List>
            <ListItem disablePadding sx={{ display: 'block' }} component={Link} to={'pedidos'}>
                <ListItemButton
                    className={classes.sidebarListItemButton}
                    sx={{
                        // justifyContent: open ? 'initial' : 'center',
                        justifyContent: props.open ? 'initial' : 'center',
                    }}
                >
                    <ListItemIcon
                        sx={{
                            minWidth: 0,
                            mr: props.open ? 3 : 'auto',
                            justifyContent: 'center',
                        }}
                    >
                        <NotificationsIcon className={classes.sidebarIcon} />
                    </ListItemIcon>
                    <ListItemText className={classes.sidebarListItemText} primary='Notificaciones' sx={{ opacity: props.open ? 1 : 0 }} />
                </ListItemButton>
            </ListItem>

            <ListItemButton onClick={props.open ? handleClickMenu : null}>
                <ListItemIcon
                    sx={{
                        minWidth: 0,
                        mr: props.open ? 3 : 'auto',
                        justifyContent: 'center',
                    }}
                >
                    <RestaurantMenuIcon className={classes.sidebarIcon} />
                </ListItemIcon>
                <ListItemText primary='Menú' className={classes.sidebarListItemText} sx={{ opacity: props.open ? 1 : 0 }} ></ListItemText>
                {openMenu ? <ExpandLess /> : <ExpandMore sx={{ opacity: props.open ? 1 : 0 }} />}
            </ListItemButton>

            <Collapse in={openMenu} timeout='auto' ounmountOnExit>
                <List component='div' disablePadding >
                    {listMenuOptions.map(({ id, label, path }) => (
                        <ListItemButton sx={{ pl: 4 }} key={id} component={Link} to={path} >
                            <ListItemText secondary={label} />
                        </ListItemButton>
                    ))}
                </List>
            </Collapse>


            <ListItem disablePadding sx={{ display: 'block' }} component={Link} to={'camareros'}>
                <ListItemButton
                    className={classes.sidebarListItemButton}
                    sx={{
                        justifyContent: props.open ? 'initial' : 'center',
                    }}
                >
                    <ListItemIcon
                        sx={{
                            minWidth: 0,
                            mr: props.open ? 3 : 'auto',
                            justifyContent: 'center',
                        }}
                    >
                        <PeopleAltIcon className={classes.sidebarIcon} />
                    </ListItemIcon>
                    <ListItemText className={classes.sidebarListItemText} primary='Camareros' sx={{ opacity: props.open ? 1 : 0 }} />
                </ListItemButton>
            </ListItem>

            <ListItemButton onClick={props.open ? handleClickReservation : null}>
                <ListItemIcon
                    sx={{
                        minWidth: 0,
                        mr: props.open ? 3 : 'auto',
                        justifyContent: 'center',
                    }}>
                    <CalendarMonthIcon className={classes.sidebarIcon} />
                </ListItemIcon>
                <ListItemText primary='Reservas' className={classes.sidebarListItemText} sx={{ opacity: props.open ? 1 : 0 }} ></ListItemText>
                {openReservation ? <ExpandLess /> : <ExpandMore sx={{ opacity: props.open ? 1 : 0 }} />}
            </ListItemButton>

            <Collapse in={openReservation} timeout='auto' ounmountOnExit>
                <List component='div' disablePadding >
                    {listReservationOptions.map(({ id, label, path }) => (
                        <ListItemButton sx={{ pl: 4 }} key={id} component={Link} to={path} >
                            <ListItemText secondary={label} />
                        </ListItemButton>
                    ))}
                </List>
            </Collapse>

            <ListItemButton onClick={props.open ? handleClickBillings : null}>
                <ListItemIcon
                    sx={{
                        minWidth: 0,
                        mr: props.open ? 3 : 'auto',
                        justifyContent: 'center',
                    }}
                >
                    <MovingIcon className={classes.sidebarIcon} />
                </ListItemIcon>
                <ListItemText primary='Información contable' className={classes.sidebarListItemText} sx={{ opacity: props.open ? 1 : 0 }} ></ListItemText>
                {openBillings ? <ExpandLess /> : <ExpandMore sx={{ opacity: props.open ? 1 : 0 }} />}
            </ListItemButton>

            <Collapse in={openBillings} timeout='auto' ounmountOnExit>
                <List component='div' disablePadding >
                    {listBillingsOptions.map(({ id, label, path }) => (
                        <ListItemButton sx={{ pl: 4 }} key={id} component={Link} to={path} >
                            <ListItemText secondary={label} />
                        </ListItemButton>
                    ))}
                </List>
            </Collapse>
        </List>
    )
}