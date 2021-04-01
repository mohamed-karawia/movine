import React, { useState } from 'react';
import classes from './UpperNav.module.scss';
import { FaBars, FaBell } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import SideNav from '../SideNav/SideNav';

const UpperNav = () => {
    const [sideBar, setSideBar] = useState(false)

    const toggleSideBar = () => {
        setSideBar(!sideBar)
    }

    return (
        <>
            <nav className={classes.Nav}>

                <div className={classes.Nav__left}>
                    <h1 className={classes.Nav__Logo}>Mov<span>ine</span></h1>
                </div>

                <div className={classes.Nav__middle}>
                    <ul className={classes.Nav__middle__links}>
                        <div className="Link__wrapper">
                            <Link className={classes.Nav__link} to="/">Discover</Link>
                        </div>
                        <div className="Link__wrapper">
                            <Link className={classes.Nav__link} to="/">Trending</Link>
                        </div>
                        <div className="Link__wrapper">
                            <Link className={classes.Nav__link} to="/">Upcoming</Link>
                        </div>
                        <div className="Link__wrapper">
                            <Link className={classes.Nav__link} to="/">watchlist</Link>
                        </div>
                    </ul>
                </div>
                    
                <div className={classes.Nav__right}>
                    
                    <div className={classes.Nav__right__icon}>
                        <AiOutlineSearch />
                    </div>
                    <div className={classes.Nav__right__icon}>
                        <FaBell />
                    </div>
                    <div className={classes.UserIcon}></div>

                    <div className={classes.Nav__right__icon + ' ' + classes.menu} onClick={toggleSideBar}>
                        <FaBars />
                    </div>
                </div>                
            </nav>
            <SideNav open={sideBar} toggleSideNav={toggleSideBar}/>
        </>
    )
}

export default UpperNav
