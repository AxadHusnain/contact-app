import React from "react";
import ContactCard from "./ContactCard";
import {Link} from 'react-router-dom';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { actionCreators } from "../state";
import { bindActionCreators } from "redux";
const ContactList =(props)=>{
    
    const reduxState = useSelector(state => state);
    const contactList = reduxState.amount.contacts;
    const dispatch= useDispatch();
    const action=bindActionCreators(actionCreators,dispatch)
    const deleteItemHandler=(id)=>{
        const contactlist=contactList.filter((contact)=>{
          return contact.id!==id;
        });
        //console.log("before deletion",contactlist)
        
        dispatch(actionCreators.deleteContacts(contactlist))
       // console.log("after deletion",contactlist)
      }

    const renderContactList=contactList.map((contact)=>{
        return(
            <div className="main">
                
                <ContactCard contact={contact} removeById={deleteItemHandler} key={contact.id}/>
            </div>
        )
    })
    
    return(
        <div className="ui celled list">
            <h2>contact List
                    <Link to="/add">
                    <button className="ui button blue right" >Add Contact</button>
                    </Link>                
                </h2>
           {renderContactList}
        </div>
    )
}
export default ContactList;
