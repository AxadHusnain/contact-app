import './App.css';
import Header from './Header';
import uuid from 'react-uuid'
import AddContact from './AddContact';
import ContactCard from './ContactCard';
import ContactList from './ContactList';
import Edit from './Edit';
import { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {
  // const [contacts,setContacts]=useState([]);
  // const local_storage_key="contacts";


  // const addContactHandler=(contact)=>{
  //   setContacts([...contacts,{id: uuid(), ...contact}])

  // }
  // const deleteItemHandler=(id)=>{
  //   const contactlist=contacts.filter((contact)=>{
  //     return contact.id!==id;
  //   });

  //   setContacts(contactlist)
  // }
  // useEffect(()=>{
  //   const retrivedContact=JSON.parse(localStorage.getItem(local_storage_key));
  //   setContacts(retrivedContact)

  // },[])
  //   useEffect(()=>{
  //     localStorage.setItem(local_storage_key,JSON.stringify(contacts))
  // },[contacts])


  return (
    <div className="ui container">
      {/* <Header/> */}
      <Link to="/add">add</Link> 
        <Routes>
          <Route path="/add" element={<AddContact />} />
          <Route path="/" element={<ContactList />} />
          <Route path="/edit/:slug" element={<Edit />} />

        </Routes>
        {/* <AddContact addContactHandler={addContactHandler} />
      <ContactList contactss={contacts} removeItem={deleteItemHandler}/> */} 
    </div>
  );
}

export default App;
