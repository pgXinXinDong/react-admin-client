import axios from "axios"

const ajax = (url,data={},method="get")=>{
        if(method == "get" ){
            return axios.get(url,{
                params:{
                    data
                }
            })
        }else{
            return axios.post(url,data)
        }
}

export default ajax