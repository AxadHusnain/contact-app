import { uuid } from "uuidv4";
const initialstate={
    contacts:[]
}


const reducer=(state=initialstate, action)=>{
    console.log("reducer log", action)
    if(action.type==="update"){
        const arr = [...state.contacts,{id: uuid(), ...action.payload}];

        return  {
            ...state,
            contacts: arr
        }
    }
    else{
        return state
    }
}
export default reducer;