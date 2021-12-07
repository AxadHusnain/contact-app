import { uuid } from "uuidv4";
const contacts=[{
    id:"",
    name:"",
    email:""

}]


const reducer=(state=contacts, action)=>{
    if(action.type==="update"){
        return  ([...state,{id: uuid(), ...action.contact}])
        
    }
    else{
        return state
    }
}
export default reducer;