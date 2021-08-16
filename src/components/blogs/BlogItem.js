import Card from "../ui/Card";
import classes from './BlogItem.module.css'

// TODO: add CSS, classes and CSS file 206
// TODO: change the links

function BlogItem(props) {
    const images = require.context("../../images", true)
    return (
        <li className={classes.blog}>
            <Card>
                <a href={props.companyUrl} target="_blank" rel="noopener noreferrer" className={classes.logo}>
                    <img src={props.companyLogo}
                         alt={props.companyName}/>
                </a>
                <a href={props.url} target="_blank" rel="noopener noreferrer" className={classes.titleLink}>
                    <div className={classes.title}>
                        <h3>{props.title}</h3>
                    </div>
                </a>

                <section className={classes.articleInfo}>
                    <ul>
                        <li>
                            <a href={props.companyUrl} target="_blank" rel="noopener noreferrer">
                                {"Company: " + props.companyName}
                            </a>
                        </li>
                        <li>{"Date: " + props.date}</li>
                    </ul>
                    <div className={classes.actions}>
                        <img className={classes.favoriteImage} src={"https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678064-star-512.png"} alt={"favorite"}/>
                    </div>
                </section>
            </Card>
        </li>
    );
}

export default BlogItem;