import React from "react";
import { Link } from "react-router-dom";
import img1 from '../images/user-img.jpg';
import { useNavigate } from 'react-router-dom';
const ContactCard=(props)=>{
    const {id,name,email}=props.contact;
    const navigate = useNavigate();
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
             <Link to={`/edit/${id}`}>edit
            
             </Link>
                {/* <button onClick={()=>{navigate('/edit/slug',{con:{i:id,n:name,e:email}})}} >edit</button> */}

        </div>
    )
}
export default ContactCard;