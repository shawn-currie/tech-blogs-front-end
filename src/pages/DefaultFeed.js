import BlogFeedPage from "../components/blogs/BlogFeed";

function DefaultFeedPage() {
    return (
        <BlogFeedPage dataSource = 'http://localhost:8080/tech-blogs/blogs'/>
    );
}

export default DefaultFeedPage;