import axios from "axios"
import { message } from "antd"




const ajax = (url,data={},method="get")=>{
    return new Promise((resolve,reject)=>{
        let promoise ="";
        if(method == "get" ){
            promoise = axios.get(url,{params:{data}})
        }else{
            promoise = axios.post(url,data)
        }

        promoise.catch(err=>message.error(errr))

    })

}

export default ajax