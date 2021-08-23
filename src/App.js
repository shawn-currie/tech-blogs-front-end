import './App.css';
import {Route, Switch} from "react-router-dom";
import FavoritesPage from "./pages/Favorites";
import CompaniesPage from "./pages/Companies";
import Layout from "./components/layout/Layout";
import DefaultFeedPage from "./pages/DefaultFeed";

function App() {
    return (
        <Layout>
            <Switch>
                <Route path="/" exact>
                    <DefaultFeedPage/>
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
