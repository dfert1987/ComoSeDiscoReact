import React, { FC, useState } from 'react';
import { Menu, TextField } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { Button } from '../Button';
import { useStyles } from './NavStyles';

type Props = {
  id: string;
  navItems: any;
};

const id ='nav'
export const Nav: FC<Props> = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const classes = useStyles();

    const handleClick = (event: { currentTarget: React.SetStateAction<null>; }) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
            <div className={classes.navContainer}>
                <ul className={classes.navItems}>
                    <li>
                        <a 
                            id={`${id}-home`} 
                            className={classes.hoverable}
                        >
                        Home
                        </a>
                    </li>
                    <li>
                        <a 
                            id={`${id}-regions`} 
                            className={classes.hoverable}
                        >
                        Regions
                        </a>
                    </li>
                    <li>
                        <div 
                            id={`${id}-blog`}
                            className={classes.dropdown}
                        >
                            <Button 
                                className={classes.blogButton}
                                id={`${id}-blog`}
                                text="Blog"
                                theme="clear"
                                type="button"
                                onClick={handleClick}
                            />
                            <Menu
                                id={`${id}-blog-menu`}
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem>Reviews</MenuItem>
                                <MenuItem>Mixes</MenuItem>
                                <MenuItem>Tracks</MenuItem>
                            </Menu>
                        </div>
                    </li>

                </ul>
            </div>
        );
    }

export default Nav;

