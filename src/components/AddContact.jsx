import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { bindActionCreators } from 'redux'
import { actionCreators } from '../state/index'
function AddContact() {
    const dispatch = useDispatch();
    const amount = useSelector(state => state.amount)
    const action = bindActionCreators(actionCreators, dispatch);
    const [cred, setCred] = useState({
        name: "",
        email: ""
    })
    const add = (e) => {
         e.preventDefault();
        if (cred.name === "" || cred.email === "") {
            alert("fill in all the credentials")
            return
        }
        action.updateContacts(cred)
        setCred({ name: "", email: "" })
        // console.log(amount)

    }

    return (
        <div className="ui main">
            <h2>Add Contact</h2>
            <form className="ui form" onSubmit={add}>
                <div className="field">
                    <label>Name</label>
                    <input type="text" name="name" placeholder="Name" value={cred.name} onChange={(e) => setCred(prevCred => {
                        return { ...prevCred, name: e.target.value }
                    })} />
                    <label>Email</label>
                    <input type="text" name="email" placeholder="Email" value={cred.email} onChange={(e) => setCred(prevCred => {
                        return { ...prevCred, email: e.target.value }
                    })} />
                    <button className="ui button blue"> Add</button>
                    <Link to="/">
                    <button className="ui button blue right" >Contact List</button>
                    </Link> 
                </div>
            </form>

        </div>
    )
}
export default AddContact;