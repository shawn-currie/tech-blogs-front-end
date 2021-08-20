import './App.css';
import {Route, Switch} from "react-router-dom";
import BlogFeedPage from "./pages/BlogFeed";
import FavoritesPage from "./pages/Favorites";
import CompaniesPage from "./pages/Companies";
import Layout from "./components/layout/Layout";

function App() {
    return (
        <Layout>
            <Switch>
                <Route path="/" exact>
                    <BlogFeedPage/>
                </Route>
                <Route path="/companies" exact>
                    <CompaniesPage/>
                </Route>
                <Route path="/favorites">
                    <FavoritesPage/>
                </Route>
            </Switch>
        </Layout>
    );
}

export default App;
