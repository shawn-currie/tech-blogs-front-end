import classes from './CompanyList.module.css'
import CompanyItem from "./CompanyItem"

function CompanyList(props) {
    return(
        <ul className={classes.companyList}>
            {props.companies.map(company => (
                <CompanyItem
                    key= {company.name}
                    name = {company.name}
                    url = {company.url}
                />
            ))}
        </ul>
    )
}

export default CompanyList;