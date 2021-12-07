import React from "react";
import img1 from '../images/user-img.jpg';
const ContactCard=(props)=>{
    const {id,name,email}=props.contact;
    return(
        <div className="item" style={{display:"flex"}}>
            <img src={img1} alt="avatar" className="ui avatar image" />
            <div className="content">
                <div className="header">{name}</div>
                <div>{email}</div>
            </div>
            <i className="trash alternate outline icon" 
             style={{color:"red", marginTop:"7px",justifyContent:"flex-end"}}
            //  onClick={()=>console.log(id,"card alert")}
             onClick={()=>props.removeById(id)}
             ></i>
        </div>
    )
}
export default ContactCard;