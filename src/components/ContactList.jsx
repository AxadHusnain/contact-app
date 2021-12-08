import React from "react";
import ContactCard from "./ContactCard";
import {Link} from 'react-router-dom';
import { useSelector } from "react-redux";
const ContactList =(props)=>{
    const dellpasser=(id)=>{
        props.removeItem(id);
    }
    const reduxState = useSelector(state => state);
 

    const contactList = reduxState.amount.contacts;
    const renderContactList=contactList.map((contact)=>{
        return(
            <div className="main">
                
                <ContactCard contact={contact} removeById={dellpasser} key={contact.id}/>
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
