import classes from './BlogList.module.css'
import BlogItem from "./BlogItem";

function BlogList(props) {
    console.log(props.blogs);
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
                    companyName={blog.companyName}
                    companyUrl={blog.companyUrl}
                    companyLogo={blog.companyLogo}
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

/*
  loadNewPage={loadNewPage}
  blogsRemaining={blogsRemaining}
 */

export default BlogList;