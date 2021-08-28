import Card from "../ui/Card";
import classes from './BlogItem.module.css'
import {COMPANY_LOGOS} from "../../utilites/companyLogos";
import FavoriteButton from "./FavoriteButton";

// TODO: add CSS, classes and CSS file 206
// TODO: change the links

function BlogItem(props) {
    return (
        <li className={classes.blog}>
            <Card>
                <a href={props.companyUrl} target="_blank" rel="noopener noreferrer" className={classes.logo}>
                    <img src={COMPANY_LOGOS[props.companyName]}
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
                    <FavoriteButton favorite = {props.favorite}/>
                </section>
            </Card>
        </li>
    );
}

export default BlogItem;