import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router'
import { Link } from 'react-router-dom';
import { actionCreators } from '../state';

const Edit = () => {
    let { slug } = useParams();
    const reduxstate=useSelector(state=>state);
    const dispatch=useDispatch();
    const contactList=reduxstate.amount.contacts;
    let  curContact=[];
    const [cred, setCred] = useState({
        id:"",
        name: "",
        email: ""
    })
    // const editItemHandler=(slug)=>{
    //     const objIndex = contactList.findIndex((obj => obj.id === slug ));
    //     console.log(`before value`, contactList[objIndex].name)
    //     contactList[objIndex].name="asad"
    //     console.log(`after values`,contactList[objIndex].name )
        
    //     // setCred(curContact)
    //     // console.log("cur info ",curContact)
        
    //     // dispatch(actionCreators.deleteContacts(contactlist))
    //     // console.log("after deletion",contactlist)
    //   }
      const edit = (e) => {
        e.preventDefault();
       if (cred.name === "" || cred.email === "") {
           alert("fill in all the credentials")
           return
       }
       
        const objIndex = contactList.findIndex((obj => obj.id === slug ));
        contactList[objIndex].name=cred.name;
        contactList[objIndex].email=cred.email;
        //console.log(`contact list values`,contactList );
        dispatch(actionCreators.editContacts(contactList));
      // action.updateContacts(cred)
      // setCred({ name: "", email: "" })
       // console.log(amount)

   }
    return (
        <div className="ui main">
        <h2>Edit Contact</h2>
        
        <form className="ui form" onSubmit={edit}>
            <div className="field">
                <label>Name</label>
                <input type="text" name="name" placeholder="name"/*{curContact[0].name} */value={cred.name} onChange={(e) => setCred(prevCred => {
                    return { ...prevCred, name: e.target.value }
                })} />
                <label>Email</label>
                <input type="text" name="email" placeholder="email"/*{curContact[0].email}*/ value={cred.email} onChange={(e) => setCred(prevCred => {
                    return { ...prevCred, email: e.target.value }
                })} />
                <button className="ui button blue"> Edit</button>
                <Link to="/">
                <button className="ui button blue right" >Contact List</button>
                </Link> 
            </div>
        </form>

    </div>
    )
}

export default Edit
