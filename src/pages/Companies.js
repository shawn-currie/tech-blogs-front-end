import {useState, useEffect} from "react";

import CompanyList from '../components/Companies/CompanyList'


const LOADING_DATA = [
    {
        name: "Tech Blogs",
        url: "http://localhost:3000/"
    }
]

function CompaniesPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedCompanies, setLoadedCompanies] = useState([])

    useEffect(() => {
        fetch('http://localhost:8080/tech-blogs/companies?page=0&limit=30', {mode: "cors"}
        ).then(response => {
            return response.json()
        }).then(data => {
            setIsLoading(false)
            data.sort((a, b) => {
                return("" + a.name).localeCompare(b.name)
            })
            setLoadedCompanies(data)
        })
    }, [])

    return (
        <CompanyList companies={isLoading ? LOADING_DATA : loadedCompanies}/>
    );
}

export default CompaniesPage;