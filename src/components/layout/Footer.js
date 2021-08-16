import classes from './Footer.module.css'

function Footer() {
    return (
        <footer>
            <ul className={classes.footerList}>
                <li>
                    <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                        Github?
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/shawndcurrie" target="_blank" rel="noopener noreferrer">
                        Linkedin
                    </a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer;
