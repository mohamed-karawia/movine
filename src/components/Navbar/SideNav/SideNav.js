import React from 'react';
import classes from './SideNav.module.scss';
import { Link } from 'react-router-dom';

const SideNav = (props) => {
    return (
        <>
            <div 
            className={
                props.open ?
                classes.Side + ' ' + classes.Side__open :
                classes.Side
            }
            onClick={props.toggleSideNav}>
                <div className={classes.Side__middle}>
                    <ul className={classes.Side__middle__links}>
                        <div className="Link__wrapper">
                            <Link className={classes.Side__link} to="/">Discover</Link>
                        </div>
                        <div className="Link__wrapper">
                            <Link className={classes.Side__link} to="/">Trending</Link>
                        </div>
                        <div className="Link__wrapper">
                            <Link className={classes.Side__link} to="/">Upcoming</Link>
                        </div>
                        <div className="Link__wrapper">
                            <Link className={classes.Side__link} to="/">watchlist</Link>
                        </div>
                    </ul>
                </div>
            </div>   
        </>
    )
}

export default SideNav
