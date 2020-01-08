import React , {Component} from "react"
import {BrowserRouter as Router, Route,Switch,Redirect } from "react-router-dom";
import Login from "./pages/login/login"
import Loadable from "./utils/loadable"
const Admin = Loadable(()=>import("./pages/admin/admin"))

class App extends Component {
    render() {
        return <Router>
            <Switch>
                <Route exact  path="/" render={()=><Redirect to="/index"/>}></Route>
                <Route        path="/login" component={Login}></Route>
                <Route component={Admin}></Route>
            </Switch>
        </Router>

    }
}
export default App