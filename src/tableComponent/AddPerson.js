import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./addPerson.css"
import { Contacts } from "./Data"
import React, { useEffect, useState } from 'react'
import { faClose } from "@fortawesome/free-solid-svg-icons"
function AddPerson({sharedContacts,handleClose,handleIncreaseCount,count }) {

    const [contacts,setPosts]=useState(sharedContacts);
    const [crtClick,setCrtClick]=useState(false);
    const [crtDate,setCrtDate]=useState(null);
    
    /*Start to handle Rest */
    const initialState = {
        name: '',
        last:'',
        email: '',
        phone:'',
        date:'',
        id:count,
        company:''
      };
    
      const [formData, setFormData] = useState(initialState);
      
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
      const handleReset = () => {
        setFormData(initialState);
      };
    /*End to handle Rest */
    /* start to handle add new person*/
    const addPosts =  () => {
        setPosts(sharedContacts.push(
            {
                name:formData.name,
                email:formData.email,
                phone:formData.phone,
                company:formData.company,
                date:crtDate,
                last:formData.last,
                id:count,
                selected:false
            }))
         };
        const handleSubCls=(e)=>{
            setCrtClick(true);
            handleSetDate();
            handleIncreaseCount();
        }
        const handleSavClk=()=>
        {
            setCrtClick(false);
            handleSetDate();
            handleIncreaseCount();
        }
        const handleSetDate=()=>
        {
            /*handle Date on Submit*/
            const currentDate = new Date();
            const year = currentDate.getFullYear();
            const month = currentDate.getMonth() + 1; // Months are zero-indexed
            const day = currentDate.getDate();
            setCrtDate(`${day}/${month}/${year}`);
            /*end of handle Date on submit*/
        }
        const handleSubmit = (e) => {
            e.preventDefault();
            handleReset();
            addPosts();
            if(crtClick)
            {
                handleClose();
            }
            
        };  
        /* End to handle add new person*/
    return (
     <div className="addPerson-container">
        <div className="adding-page">
            <div className="create-header">
                <div >Create Contact</div>
                <div>
                    <span></span>
                    <FontAwesomeIcon onClick={handleClose} style={{cursor:"pointer"}} icon={faClose}/>
                </div>
            </div>
            <form onSubmit={handleSubmit}>
            <div className="contact-body">
                <div style={{color:"#3B2E8C"}} >Contact Info
                </div>
                <div className="contact-input-row">      
                   <label style={{width:"120px",textAlign:"left"}}>First Name*</label>
                    <input 
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        style={{color:"#3B2E8C"}} placeholder="Name"
                        required
                    ></input>
                    <label style={{width:"100px",marginLeft:"10px",textAlign:"left"}}>Last Name*</label>
                    <input 
                         type="text"
                         name="last"
                         value={formData.last}
                         onChange={handleChange}
                        style={{color:"#3B2E8C"}} placeholder="Name"
                        required
                        ></input>
                </div>
                <div className="contact-input-row">      
                   <label style={{width:"120px",textAlign:"left"}}>Phone Number*</label>
                    <input 
                        type="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        style={{color:"#3B2E8C"}} placeholder="Type"
                        required
                        ></input>
                    <label style={{width:"100px",marginLeft:"10px",textAlign:"left"}}>Email*</label>
                    <input 
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        style={{color:"#3B2E8C"}} placeholder="Email"
                        required
                        ></input>
                </div>
                <div className="contact-input-row">      
                   <label style={{width:"120px",textAlign:"left"}}>Company*</label>
                    <input 
                      type="name"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                    style={{color:"#3B2E8C"}} placeholder="Name"
                    required
                    ></input>
                </div>
                <div className="contact-input-row">      
                   <label style={{width:"120px",textAlign:"left"}}>Job title</label>
                    <select id = "dropdown">
                        <option value="1">Mr.</option>
                        <option value="2">Mrs.</option>
                        <option value="3">Eng.</option>
                        <option value="4">Prof.</option>
                    </select>
                </div>
                <div style={{color:"#3B2E8C"}} >Lead Details</div>
                <div className="contact-input-row">      
                   <label style={{width:"120px",textAlign:"left"}}>Life cycle</label>
                    <select id = "dropdown">
                        <option value="1">Call</option>
                        <option value="2">Work</option>
                    </select>
                    <label style={{width:"100px",textAlign:"left",marginLeft:"10px"}}>Priorty</label>
                    <select id = "dropdown">
                        <option value="1">Low</option>
                        <option value="2">High</option>
                    </select>
                </div>
                <div className="contact-input-row">      
                   <label style={{width:"120px",textAlign:"left"}}>Owner</label>
                    <select id = "dropdown">
                        <option value="1">Name</option>
                        <option value="2">2nd</option>
                    </select>
                    <label style={{width:"100px",textAlign:"left",marginLeft:"10px"}}>Watcher </label>
                    <select id = "dropdown">
                        <option value="1">Name</option>
                        <option value="2">High</option>
                    </select>
                </div>
                    <div className="contact-input-row">      
                    <label style={{width:"120px",textAlign:"left"}}>Note</label>
                        <input style={{color:"#3B2E8C",height:"90px",width:"580px"}} placeholder="type text"></input>
                    </div>
                <div className="add-cont-buttons">
                    <button className="rest-btn" onClick={handleReset}>Reset</button>
                    <button className="create-btn" type="submit" onClick={handleSavClk}>Save and add another</button>
                    <button className="create-btn" type="submit"  onClick={handleSubCls} >Create</button>
                </div>
            </div>
            </form>
        </div>
    </div>
  )
}

export default AddPerson

