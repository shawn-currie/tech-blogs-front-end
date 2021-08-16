import {useState, useEffect} from 'react';

import BlogList from "../components/blogs/BlogList";

import riotGamesLogo from '../images/riotgames.jpg'
import facebookLogo from '../images/facebook.jpg'

const LOGOS = {
    "Riot Games": riotGamesLogo,
    "Facebook": facebookLogo
}

const LOADING_DATA = [
    {
        title: "LOADING BLOGS...",
        companyName: "loading company...",
        url: "/",
        companyUrl: "https://www.google.com",
        date: "loading date...",
        image: "https://i.redd.it/gj1t3nckxyx61.png",
        id: 0
    }
]

// TODO: I need company logo for each article, company website, blog url, and what is provided above

function BlogFeedPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedBlogs, setLoadedBlogs] = useState([]);
    const [blogsRemaining, setBlogsRemaining] = useState(true);
    const [pageNumber, setPageNumber] = useState(0);

    const PAGE_SIZE = 15;

    function addBlogData(newBlogs) {
        setLoadedBlogs((prevBlogs) => {
            return prevBlogs.concat(newBlogs);
        });
    }

    function loadNewPage() {
        setPageNumber((prevPageNumber) => {
            console.log(prevPageNumber)
            return prevPageNumber + 1;
        });
    }

    useEffect(() => {
        fetch(
            'http://localhost:8080/tech-blogs/blogs?page=' + pageNumber + '&limit=' + PAGE_SIZE, {mode: 'cors'}
        ).then(response => {
            return response.json();
        }).then((data) => {
            setIsLoading(false);

            data.forEach(dataPoint => {
                dataPoint["companyLogo"] = LOGOS[dataPoint.companyName]
                console.log(dataPoint["companyLogo"])
            })

            if (data.length < PAGE_SIZE) {
                setBlogsRemaining(false);
            }

            console.log(data);
            addBlogData(data);
        })
    }, [pageNumber]);

    return (
        <section>
            <h1>Blog Feed</h1>
            <BlogList blogs={isLoading ? LOADING_DATA : loadedBlogs}
                      loadNewPage={loadNewPage}
                      blogsRemaining={blogsRemaining}
            />
        </section>
    );
}

export default BlogFeedPage;
