import { makeStyles } from "@mui/styles";

const HomeStyles = makeStyles({
    appBarComponent: {
        backgroundColor: '#ccc0c8',
        position: 'fixed'
    },
    homeGrid: {
        // margin: '10%',
        position: 'relative',
        textAlign: 'center',
        alignSelf: 'center'
    },
    homeCard: {
        // alignSelf: 'center',
        // height: '400px',
        // width: '400px',
        // justifyContent: 'center',
        alignSelf: 'center',
        height: '300px',
        width: '500px',
        justifyContent: 'center',
        alignContent: 'center',
        flexDirection: 'column',
        display: 'inline-block',
        textAlign: 'center',
        textDecoration: 'none',
        borderRadius: '26px',
        lineHeight: '20px',
        '&:hover': {
            border: '1px solid #F3734D',
            boxShadow: '.5em .5em .3em .3em #CFD3D5'
        }
    },

})

export { HomeStyles }