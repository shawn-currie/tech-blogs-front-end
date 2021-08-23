import BlogFeedPage from "../components/blogs/BlogFeed";

function FavoritesPage() {
    return (
        <BlogFeedPage dataSource = 'http://localhost:8080/tech-blogs/blogs/favorites/1'/>
    );
}

export default FavoritesPage;