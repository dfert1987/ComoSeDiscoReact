import React, { FC, useState } from 'react';
import { Menu, TextField } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { Button } from '../Button';
import { useStyles } from './NavStyles';
import { HOME_ROUTE, ABOUT_ROUTE } from '../../csd-ui/Constants/src';

type Props = {
  id: string;
  navItems: any;
};

const id ='nav'
export const Nav: FC<Props> = () => {
    const [anchorElBlog, setAnchorElBlog] = useState(null);
    const [anchorElRegion, setAnchorElRegion] = useState(null);

    const classes = useStyles();

    const handleClickBlog = (event: { currentTarget: React.SetStateAction<null>; }) => {
        setAnchorElBlog(event.currentTarget);
    };

    const handleClickRegion = (event: { currentTarget: React.SetStateAction<null>; }) => {
        setAnchorElRegion(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorElBlog(null);
    };

    return (
            <div className={classes.navContainer}>
                <div className={classes.navItems}>
                <ul className={classes.navItems}>
                    <li className={classes.item}>
                         <Button 
                                className={classes.homeButton}
                                id={`${id}-Home`}
                                text="Home"
                                theme="clear"
                                type="button"
                                href={HOME_ROUTE} 
                            />
                    </li>
                    <li className={classes.item}>
                         <Button 
                                className={classes.regionButton}
                                id={`${id}-regions`}
                                text="Regions"
                                theme="clear"
                                type="button"
                                onClick={handleClickRegion}
                            />
                            <Menu
                                id={`${id}-region-menu`}
                                anchorEl={anchorElRegion}
                                keepMounted
                                open={Boolean(anchorElRegion)}
                                onClose={handleClose}
                            >
                                <MenuItem>All</MenuItem>
                                <MenuItem>Western Africa</MenuItem>
                                <MenuItem>Southern Africa</MenuItem>
                                <MenuItem>Northern Africa</MenuItem>
                                <MenuItem>South America</MenuItem>
                                <MenuItem>Latin America / Caribbean</MenuItem>
                                <MenuItem>Asia</MenuItem>
                                <MenuItem>Europe</MenuItem>
                            </Menu>
                    </li>
                    <li className={classes.item}>
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
                                onClick={handleClickBlog}
                            />
                            <Menu
                                id={`${id}-blog-menu`}
                                anchorEl={anchorElBlog}
                                keepMounted
                                open={Boolean(anchorElBlog)}
                                onClose={handleClose}
                            >
                                <MenuItem>All</MenuItem>
                                <MenuItem>Reviews</MenuItem>
                                <MenuItem>Mixes</MenuItem>
                                <MenuItem>Tracks</MenuItem>
                            </Menu>
                        </div>
                    </li>
                    <li >
                        <Button 
                            className={classes.aboutButton}
                            id={`${id}-About`}
                            text="About"
                            theme="clear"
                            type="button"
                            href={ABOUT_ROUTE} 
                        />
                    </li>
                </ul>
                </div>
            </div>
        );
    }

export default Nav;

