import { createMuiTheme, Theme } from '@material-ui/core/styles';
import { CreateCSSProperties } from '@material-ui/core/styles/withStyles';
import { 
    PRIMARY_COLOR,
    WARNING_COLOR,
    BLACK,
    ERROR_COLOR,
    } from '../../csd-ui/Constants/src';


declare module '@material-ui/core/styles/createMuiTheme' {
    interface Theme {
      flexContainer: {
        row: CreateCSSProperties;
        column: CreateCSSProperties;
      };
    }

    interface ThemeOptions {
        flexContainer?: {
          row: CreateCSSProperties;
          column: CreateCSSProperties;
        };
      }
    }
    declare module '@material-ui/core/styles/createBreakpoints' {
        interface BreakpointOverrides {
        
        }
    }

    const csdTheme: Theme = createMuiTheme({
        palette: {
            primary: {
                main: PRIMARY_COLOR,
            },
            secondary: {
                main: WARNING_COLOR,
            },
            warning: {
                main: WARNING_COLOR,
            },
            text: {
                primary: BLACK,
            },
            error: {
                main: ERROR_COLOR,
            },
        },
        typography: {
            fontFamily: [
                'Bebas Neue',
                'Cuprum'
            ].join(','),
        },
        flexContainer: {
            row: {
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
            },
            column: {
              display: 'flex',
              flexDirection: 'column',
              flexWrap: 'wrap',
            },
        },
    });
    export default csdTheme;