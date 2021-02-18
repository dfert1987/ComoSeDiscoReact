import { createStyles, makeStyles } from "@material-ui/core";
import { BEBAS, PRIMARY_COLOR } from "../../csd-ui/Constants/src";

export const useStyles = makeStyles(() => 
    createStyles({
        navContainer: {
            height: '1em',
            width: '100%',  
        },
        bannerTitle: {
            fontFamily: BEBAS,
            fontSize: '90px',
            marginBottom: '0em',
            textAlign: 'center', 
        },
        navItems: {
         display: 'flex',
         flexDirection: 'row',
         fontFamily: BEBAS,
         listStyleType: 'none',
         marginLeft: 'auto',
         marginRight: 'auto',
         padding: '0em',
         position: 'relative',
         top: '-1em',
        },
        item: {
            // marginLeft: '1em',
            // marginRight: '1em',
        },
        hoverable: {
            padding: '1em',
        },
        dropdown: {

        },
        blogButton: {
            fontSize: '30px',
            marginRight: '2em',
            "&:hover": {
            color: PRIMARY_COLOR,
            backgroundColor: "transparent",
            },
            "& .MuiTouchRipple-root span": {
            backgroundColor: 'transparent!important',
            },    
        },
        homeButton: {
            fontSize: '30px',
            marginLeft: '2em',
            marginRight: '2em',
            "&:hover": {
            color: PRIMARY_COLOR,
            backgroundColor: "transparent",
            },
            "& .MuiTouchRipple-root span": {
            backgroundColor: 'transparent!important',
            },
        },
        regionButton: {
            fontSize: '30px',
            marginRight: '2em',
            "&:hover": {
            color: PRIMARY_COLOR,
            backgroundColor: "transparent",
            },
            "& .MuiTouchRipple-root span": {
            backgroundColor: 'transparent!important',
            },
        },
        aboutButton: {
            fontSize: '30px',
            marginRight: '2em',
            "&:hover": {
            color: PRIMARY_COLOR,
            backgroundColor: "transparent",
            },
            "& .MuiTouchRipple-root span": {
            backgroundColor: 'transparent!important',
            },
        },
    })
);
