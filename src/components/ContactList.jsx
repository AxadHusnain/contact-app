import React from "react";
import ContactCard from "./ContactCard";
import {Link} from 'react-router-dom';
import { useSelector } from "react-redux";
const ContactList =(props)=>{
    const dellpasser=(id)=>{
        props.removeItem(id);
    }
    const contact = useSelector(state => state.amount)
    const renderContactList=contact.map((contact)=>{
        return(
            <div className="main">
                <h2>contact List
                    <Link to="/add">
                    <button className="ui button blue right" >Add Contact</button>
                    </Link>                
                </h2>
                <ContactCard contact={contact} removeById={dellpasser} key={contact.id}/>
            </div>
        )
    })
    
    return(
        <div className="ui celled list">
           {renderContactList}
        </div>
    )
}
export default ContactList;
