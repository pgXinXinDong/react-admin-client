import React , {Component} from "react"
import {Button} from "antd";
import {BrowserRouter as Router, Route,Switch} from "react-router-dom";
import Login from "./pages/login/login"
import Admin from "./pages/admin/admin"

class App extends Component {
    render() {
        return <Router>
            <Switch>
                <Route to="/" component={Admin}></Route>
                <Route to="/login" component={Login}></Route>
            </Switch>
        </Router>

    }
}
export default App