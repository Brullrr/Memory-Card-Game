import React from 'react';
import classes from './Toolbar.module.css';
import Logo from '../../Layout/Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Menu from '../Toolbar/Menu/Menu';


const toolbar = ( props ) => (
    <header className={classes.Toolbar} >
        <Menu open={props.openSidebar}/>
        <div className={classes.Logo}>
            <Logo />
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
)

export default toolbar;