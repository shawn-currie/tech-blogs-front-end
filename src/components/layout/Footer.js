import classes from './Footer.module.css'

function Footer() {
    return (
        <footer>
            <ul className={classes.footerList}>
                <li>
                    <a href="https://github.com/shawn-currie?tab=repositories" target="_blank" rel="noopener noreferrer">
                        Github
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/shcurrie" target="_blank" rel="noopener noreferrer">
                        Linkedin
                    </a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer;
