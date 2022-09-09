import { makeStyles } from "@mui/styles";

const Sidebar = makeStyles({
    sidebarIcon: {
        color: 'black',

    },
    sidebarIconButton: {
        minHeight: 48,
        justifyContent: 'center',
        px: 2.5,
        textDecoration: 'none'
    },
    sidebarListItemButton: {
        minWidth: 0,
        minHeight: 48,
        justifyContent: 'center',
        px: 2.5,
        '&:hover': {
            color: 'white'
        }
    },
    sidebarListItemText: {
        color: 'black',
        textDecoration: 'none',
    }
})

export { Sidebar }