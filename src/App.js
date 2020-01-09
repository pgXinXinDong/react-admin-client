import React , {Component} from "react"
import {BrowserRouter as Router, Route,Switch,Redirect } from "react-router-dom";
import { createStore,applyMiddleware } from "redux"
import { Provider } from "react-redux"
import LgRueducer  from "@/reducer/login"
import Login from "./pages/login/login"
import Loadable from "./utils/loadable"

const store = createStore(LgRueducer)

const Admin = Loadable(()=>import("./pages/admin/admin"))

class App extends Component {
    render() {
        return<Provider  store={store}>
            <Router>
                <Switch>
                    <Route exact  path="/" render={()=><Redirect to="/index"/>}></Route>
                    <Route        path="/login" component={Login}></Route>
                    <Route component={Admin}></Route>
                </Switch>
            </Router>
        </Provider>

    }
}
export default App