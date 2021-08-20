import classes from './BlogList.module.css'
import BlogItem from "./BlogItem";

function BlogList(props) {
    return (
        <ul className={classes.blogList}>
            {props.blogs.map(blog => (
                <BlogItem
                    key={blog.id}
                    id={blog.id}
                    title={blog.title}
                    url={blog.url}
                    image={blog.image}
                    date={blog.date}
                    companyName={blog.company.name}
                    companyUrl={blog.company.url}
                />
            ))}
            {props.blogsRemaining ?
                <li>
                    <button onClick={props.loadNewPage}>
                        Load More Blogs
                    </button>
                </li>
                :<p>No More Blogs...</p>
            }
        </ul>
    )
}

export default BlogList;