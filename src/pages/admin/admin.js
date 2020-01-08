import React ,{ Component }  from "react";

export default class Admin extends Component{
    componentDidMount(){
        this.isLogin()
    }

    isLogin = () =>{
        if(!localStorage.getItem("user2")){
            this.props.history.push("/login")
        }
    }

    render() {
        return<div>Admin22</div>
    }
}