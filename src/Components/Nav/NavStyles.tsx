import { createStyles, makeStyles } from "@material-ui/core";

import {
//   BLACK,
//   SNOW,
//   BEBAS,
//   CUPRUM,
//   PRIMARY_COLOR,
//   WARNING_COLOR,
//   HOVER_WARNING,
} from '../../../src/Components';
import { BEBAS } from "../../csd-ui/Constants/src";

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
         fontSize: '20px',
        },
        hoverable: {
            padding: '1em',
        },
        dropdown: {

        },
        blogButton: {

        },
        homeButton: {

        },
        regionButton: {

        },
        aboutButton: {

        },
    })
)

