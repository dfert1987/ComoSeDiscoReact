import { createStyles, makeStyles } from "@material-ui/core";
import { BEBAS, PRIMARY_COLOR } from "../../csd-ui/Constants/src";

export const useStyles = makeStyles(() => 
    createStyles({
        navContainer: {
            height: '1em',
            width: '100%',  
        },
        navItems: {
         display: 'flex',
         flexDirection: 'row',
         fontFamily: BEBAS,
         fontSize: '30px',
         listStyleType: 'none',
         marginLeft: 'auto',
         marginRight: 'auto',
         paddingLeft: '0em'
        },
        item: {
            marginLeft: '1em',
            marginRight: '1em',
        },
        hoverable: {
            padding: '1em',
        },
        dropdown: {

        },
        blogButton: {
            fontSize: '30px',
            "&:hover": {
            color: PRIMARY_COLOR,
            backgroundColor: "transparent",
            }    
        },
        homeButton: {
            fontSize: '30px',
            "&:hover": {
            color: PRIMARY_COLOR,
            backgroundColor: "transparent",
            }   
        },
        regionButton: {
            fontSize: '30px',
            "&:hover": {
            color: PRIMARY_COLOR,
            backgroundColor: "transparent",
            }   
        },
        aboutButton: {
            fontSize: '30px',
            "&:hover": {
            color: PRIMARY_COLOR,
            backgroundColor: "transparent",
            }   
        }
    })
);
