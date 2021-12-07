import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from 'redux'
import {actionCreators} from '../state/index'

function AddContact (){
    const dispatch=useDispatch();
    const action= bindActionCreators(actionCreators,dispatch);
const [cred,setCred]=useState({
    name:"",
    email:""
})
 const add=(e)=>{
    e.preventDefault();
    if(cred.name===""||cred.email===""){
        alert("fill in all the credentials")
        return
    }
    ()=>{action.updateContacts(cred)}
    setCred({name:"", email:""})
    console.log(cred)

 }

return(
    <div className="ui main">
        <h2>Add Contact</h2>
        <form className="ui form" onSubmit={add}>
            <div className="field">
                <label>Name</label>
                <input type="text" name="name" placeholder="Name" value={cred.name} onChange={(e)=>setCred(prevCred=>{
                    return{...prevCred, name:e.target.value}
                })}/>
                <label>Email</label>
                <input type="text" name="email" placeholder="Email" value={cred.email}onChange={(e)=>setCred(prevCred=>{
                    return{...prevCred, email:e.target.value}
                })}/>
                <button className="ui button blue"> Add</button>
            </div>
        </form>

    </div>
)
}
export default AddContact;