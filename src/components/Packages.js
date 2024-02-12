import React from 'react'
import "./package.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { Element } from 'react-scroll'

function Packages() {
  return (<> 
    <div className='packages-container'>
        <Element name="section3"></Element>
        <h3 style={{display:"block",margin:"56px 0",fontWeight:"800",width:"100%",textAlign:"left"}}>
        Choose the appropriate package,<br/>and enjoy your Free Trial !</h3>
        <div className='package-price-card'>
            <h1 style={{fontSize:"20px" ,fontWeight:"700"}}>Basic</h1>
            <div style={{fontSize:"12px",lineHeight:"2",fontWeight:"700"}} className='text-card'>We provide you & your team a comprehensive dashboard that help you manage and track your clients</div>
            <span style={{fontSize:"40px",padding:"10px",fontWeight:"700"}} className='package-price-number'>
               25
            </span>
                <span>SAR/Monthly</span>
         <div className='card-buttons'>
                <div className='add-min-button'>
                    <div  className='add'>
                        <FontAwesomeIcon  icon={faPlus} />
                    </div>
                    <div  className='text'>
                    One User
                    </div>
                    <div  className='mins'>
                        <FontAwesomeIcon  icon={faMinus} />
                    </div>
                </div>
                <div className='sub-period'>
                    One Month
                </div>
                <button type="button"  class="join-button">Join Now</button>
            </div>
        </div>
        <div className='package-features'>
            <div style={{paddingLeft:"30px"}}>

         <h3 style={{fontSize:"20px",fontWeight:"700",}}>Package Features</h3>
            </div>
         <div className='package-features-text'>
            <div style={{flex:1,fontWeight:"700"}}>Contact & Manage companies</div> 
            <div><FontAwesomeIcon style={{color:"#3B2E8C"}} icon={faCheckCircle} /></div>
         </div>
         <div className='package-features-text'>
            <div style={{flex:1,fontWeight:"700"}}>Manage Sales Pipeline</div> 
            <div><FontAwesomeIcon style={{color:"#3B2E8C"}} icon={faCheckCircle} /></div>
         </div>
         <div className='package-features-text'>
            <div style={{flex:1,fontWeight:"700"}}>Manage Tasks </div> 
            <div><FontAwesomeIcon style={{color:"#3B2E8C"}} icon={faCheckCircle} /></div>
         </div>
         <div className='package-features-text'>
            <div style={{flex:1,fontWeight:"700"}}>Track Sales Activities</div> 
            <div><FontAwesomeIcon style={{color:"#3B2E8C"}} icon={faCheckCircle} /></div>
         </div>
         <div className='package-features-text'>
            <div style={{flex:1,fontWeight:"700"}}>Manage Projects </div> 
            <div><FontAwesomeIcon style={{color:"#3B2E8C"}} icon={faCheckCircle} /></div>
         </div>
         <div className='package-features-text'>
            <div style={{flex:1,fontWeight:"700"}}>Analyze & Manage Reports </div> 
            <div><FontAwesomeIcon style={{color:"#3B2E8C"}} icon={faCheckCircle} /></div>
         </div>
        </div>
    </div>
  </>)
}


export default Packages