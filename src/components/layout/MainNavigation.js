import {Link} from "react-router-dom";

import classes from './MainNavigation.module.css'

function MainNavigation() {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>TechBlogs</div>
            <nav>
                <ul>
                    <li>
                        <Link to="/" className={classes.badge}>Feed</Link>
                    </li>
                    <li>
                        <Link to="/favorites" className={classes.badge}>Favorites</Link>
                    </li>
                    <li>
                        <Link to="/companies" className={classes.badge}>Companies</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;