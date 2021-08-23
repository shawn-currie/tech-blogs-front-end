import {Link} from "react-router-dom";

import classes from './MainNavigation.module.css'

function MainNavigation() {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>Tech Blogs</div>
            <nav>
                <ul>
                    <li>
                        <Link to="/" className={classes.badge}>Default Feed</Link>
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