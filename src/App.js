import React , {Component} from "react"
import {BrowserRouter as Router, Route,Switch} from "react-router-dom";
import Login from "./pages/login/login"
import Admin from "./pages/admin/admin"

class App extends Component {
    render() {
        return <Router>
            <Switch>
                <Route to="/login" component={Login}></Route>
                <Route to="/" component={Admin}></Route>

            </Switch>
        </Router>

    }
}
export default App