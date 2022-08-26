import { makeStyles } from "@mui/styles";

const NavbarStyle = makeStyles({
    navbarFont: {
        mr: 2,
        display: { xs: 'none', md: 'flex' },
        fontFamily: 'monospace',
        fontWeight: 700,
        letterSpacing: '.3rem',
        color: 'inherit',
        textDecoration: 'none',

    }

})

export { NavbarStyle }