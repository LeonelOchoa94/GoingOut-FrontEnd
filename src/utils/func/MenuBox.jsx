import React, { useState } from 'react'
import { Divider, ListItem, Menu, MenuItem } from '@mui/material'

export default function MenuBox(props) {
    const [anchor, setAnchor] = useState(null)
    const open = Boolean(anchor)

    const handleClose = () => {
        setAnchor(null)
    }

    const handleHover = () => {
        setAnchor(props.anchor)
        console.log('Menu abierto')
    }
    // if (props.openMenu === false) {
    //     return (
    //         <div>

    //         </div>
    //     )
    // } else {
    return (
        <div>
            <Menu
                key={props.tableName}
                anchorEl={props.open ? anchor : false}
                open={props.open ? handleHover : false}
                onClose={handleClose}
                // onClick={props.handleClose}
                // MenuListProps={{ onMouseLeave: props.handleClose }}
                // onMouseLeave={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,

                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >

                <ListItem> {props.tableName} </ListItem>
                <Divider />
                {props.name ?
                    <ListItem>{props.name}</ListItem>
                    :
                    (props.newName ? (<ListItem>{props.newName}</ListItem>) : props.menuItem)
                    // <MenuItem onClick={() => setOpenDialog(true)}> Ocupar Mesa</MenuItem>)
                }
                {props.waiter ? <ListItem>{props.waiter}</ListItem> : <MenuItem>Asignar Camarero</MenuItem>}
                {props.amount ? <ListItem>{`$${props.amount}`}</ListItem> : null}
                {props.available ? <MenuItem> Reservar </MenuItem> : <MenuItem> Cerrar Mesa </MenuItem>}
                {props.available ? null : <MenuItem> Ver consumos </MenuItem>}


            </Menu>

        </div>
    )
    // }

}
