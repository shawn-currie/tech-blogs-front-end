import BlogFeedPage from "../components/blogs/BlogFeed";

function FavoritesPage() {
    return (
        <BlogFeedPage dataSource = 'http://localhost:8080/tech-blogs/users/1/favorites'/>
    );
}

export default FavoritesPage;