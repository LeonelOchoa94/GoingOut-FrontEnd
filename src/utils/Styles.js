import { makeStyles } from "@mui/styles";

const Styles = makeStyles({
    appBarComponent: {
        backgroundColor: '#ccc0c8',
        position: 'fixed'
    },
    sidebarIcon: {
        color: '#000000',
    },
    sidebarIconButton: {
        minHeight: 48,
        justifyContent: 'center',
        px: 2.5,
        textDecoration: 'none',
    },
    sidebarListItemButton: {
        minWidth: 0,
        minHeight: 48,
        justifyContent: 'center',
        px: 2.5,
    },
    sidebarListItemText: {
        color: '#000000',
        textDecoration: 'none',
    },
    homeCard: {
        alignSelf: 'center',
        height: '400px',
        width: '400px',
        justifyContent: 'center',

    }
})

export { Styles }