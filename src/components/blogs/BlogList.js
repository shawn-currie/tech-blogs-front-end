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
                    favorite={blog.favorite}
                    companyName={blog.company.name}
                    companyUrl={blog.company.url}
                />
            ))}
            {props.blogsRemaining ?
                <li className={classes.loadMore}>
                    <button onClick={props.loadNewPage}>
                        Load More Blogs
                    </button>
                </li>
                :<p className={classes.noneRemaining}>No More Blogs...</p>
            }
        </ul>
    )
}

export default BlogList;