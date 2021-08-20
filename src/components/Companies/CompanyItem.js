// import Card from "../ui/Card";
import classes from './CompanyItem.module.css'
import {COMPANY_LOGOS} from "../../utilites/companyLogos";

function CompanyItem(props) {
    return (
        <li>
            {/*<Card>*/}
                <a href={props.url} target="_blank" rel="noopener noreferrer" className={classes.logo}>
                    <img src={COMPANY_LOGOS[props.name]}
                         alt={props.name}/>
                </a>
            {/*</Card>*/}
        </li>
    )
}

export default CompanyItem;