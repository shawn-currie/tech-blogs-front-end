import {useState, useEffect} from 'react';

import BlogList from "../components/blogs/BlogList";


const LOADING_DATA = [
    {
        title: "LOADING BLOGS...",
        url: "/",
        date: "loading date...",
        company: {
            companyName: "loading company...",
            companyUrl: "https://www.google.com",
        }
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

            if (data.length < PAGE_SIZE) {
                setBlogsRemaining(false);
            }

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
