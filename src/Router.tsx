import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home_Page from "./Home";

const AppRouter = () => {
    return (
        <Router>
            <Switch>
              <Route exact path="/">
                <Home_Page />
              </Route>
            </Switch>
        </Router>
      );
}

export default AppRouter