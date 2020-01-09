const LOGINACTION = "LOGINACTION"
const initstate = {}


export default loginReducer = (state=initstate,action)=>{
    switch (action.type){
        case LOGINACTION:
            return {...state,...action.payload}
        default:
            return state
    }
}