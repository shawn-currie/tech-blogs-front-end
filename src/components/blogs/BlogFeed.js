import {useState, useEffect} from 'react';

import BlogList from "./BlogList";


const LOADING_DATA = [
    {
        id: -1,
        title: "LOADING BLOGS...",
        url: "/",
        date: "loading date...",
        favorite: false,
        company: {
            companyName: "loading company...",
            companyUrl: "https://www.google.com",
        }
    }
]

function BlogFeed(props) {
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
            props.dataSource + '?page=' + pageNumber + '&limit=' + PAGE_SIZE, {mode: 'cors'}
        ).then(response => {
            return response.json();
        }).then((data) => {
            setIsLoading(false);

            if (data.length < PAGE_SIZE) {
                setBlogsRemaining(false);
            }

            addBlogData(data);
        })
    }, [pageNumber]);

    return (
        <BlogList blogs={isLoading ? LOADING_DATA : loadedBlogs}
                  loadNewPage={loadNewPage}
                  blogsRemaining={blogsRemaining}
        />
    );
}

export default BlogFeed;
