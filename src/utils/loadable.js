import React from "react"
import Loadable from 'react-loadable';
import NProgress from "nprogress"
import "nprogress/nprogress.css"
NProgress.configure({
    minimum: 0.5,
    ease: 'ease',
    speed: 2000,
    showSpinner: false
})
class loadingComponent extends React.Component{
    constructor(props){
        super(props)
        NProgress.start()
    }

    componentDidMount(){
        NProgress.done()
    }

    render(){
        return<div/>
    }
}


export default (loader,loading = loadingComponent)=>{
     return Loadable({
         loader:loader,
         loading:loading,
         delay:30000
     })
}