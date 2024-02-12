import React from 'react'
import "./feature.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons'
import { Element } from 'react-scroll'
const items=
[
    {
        title:"Manage Tasks ",
        desc:"<br/>Manage Tasks<br/>Organize and prioritize your work efficiently <br/>with our neatly organized task management <br/>tools. Track all your tasks and commitments <br/>easily, and stay notified about your task <br/>progress & updates",
        icon:`<svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="46" height="46" rx="7" fill="#674FC2"/>
        <path d="M23.37 19.88H28.62" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M17.38 19.88L18.13 20.63L20.38 18.38" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M23.37 26.88H28.62" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M17.38 26.88L18.13 27.63L20.38 25.38" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M20 33H26C31 33 33 31 33 26V20C33 15 31 13 26 13H20C15 13 13 15 13 20V26C13 31 15 33 20 33Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        `
    },
    {
        title:"Manage Sales pipeline",
        desc:"<br/>Create customizable sales pipelines to track <br/>all sales stages from start to finish, <br/>ensuring successful deals are closed.",
        icon:`<svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="46" height="46" rx="7" fill="#674FC2"/>
        <path d="M19.97 33H25.97C30.97 33 32.97 31 32.97 26V20C32.97 15 30.97 13 25.97 13H19.97C14.97 13 12.97 15 12.97 20V26C12.97 31 14.97 33 19.97 33Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12.97 23.7L18.97 23.68C19.72 23.68 20.56 24.25 20.84 24.95L21.98 27.83C22.24 28.48 22.65 28.48 22.91 27.83L25.2 22.02C25.42 21.46 25.83 21.44 26.11 21.97L27.15 23.94C27.46 24.53 28.26 25.01 28.92 25.01H32.98" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        `
    },
    {
        title:"Contact & manage companies",
        desc:"<br/>Create customizable sales pipelines to track <br/>all sales stages from start to finish,<br/> ensuring successful deals are closed.",
        icon:`<svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="46" height="46" rx="7" fill="#6951C3"/>
        <path d="M17.37 20.51C13.29 20.8 13.3 26.71 17.37 27H27.03C28.2 27.01 29.33 26.57 30.2 25.78C33.06 23.28 31.53 18.28 27.76 17.8C26.41 9.65997 14.62 12.75 17.41 20.51" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M23 27V30" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M23 34C24.1046 34 25 33.1046 25 32C25 30.8954 24.1046 30 23 30C21.8954 30 21 30.8954 21 32C21 33.1046 21.8954 34 23 34Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M29 32H25" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M21 32H17" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        `
    },
    {
        title:"Analyze & Manage reports",
        desc:"<br/>A powerful analysis tool that enables you to<br/> make informed decisions about your sales<br/> efforts and identify trends.",
        icon:`<svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="46" height="46" rx="7" fill="#674FC2"/>
        <path d="M31 19.25V29C31 32 29.21 33 27 33H19C16.79 33 15 32 15 29V19.25C15 16 16.79 15.25 19 15.25C19 15.87 19.25 16.43 19.66 16.84C20.07 17.25 20.63 17.5 21.25 17.5H24.75C25.99 17.5 27 16.49 27 15.25C29.21 15.25 31 16 31 19.25Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M27 15.25C27 16.49 25.99 17.5 24.75 17.5H21.25C20.63 17.5 20.07 17.25 19.66 16.84C19.25 16.43 19 15.87 19 15.25C19 14.01 20.01 13 21.25 13H24.75C25.37 13 25.93 13.25 26.34 13.66C26.75 14.07 27 14.63 27 15.25Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M19 24H23" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M19 28H27" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        `
    },
    {
        title:"Manage Projects",
        desc:"<br/>A Comprehensive dashboard that helps you <br/>efficiently manage and monitor your<br/>projects within CRM, allowing you to make<br/> informed decisions and ensure that projects<br/> are completed successfully.",
        icon:`<svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="46" height="46" rx="7" fill="#674FC2"/>
        <path d="M16.9 28H29.09C30.99 28 31.99 27 31.99 25.1V13H13.99V25.1C14 27 15 28 16.9 28Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M13 13H33" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M19 33L23 31V28" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M27 33L23 31" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M18.5 22L21.65 19.37C21.9 19.16 22.23 19.22 22.4 19.5L23.6 21.5C23.77 21.78 24.1 21.83 24.35 21.63L27.5 19" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        `
    },
    {
        title:"Track Activities",
        desc:"<br/>Save and track all your interactions,<br/> including emails and calls, with customers <br/> easily.",
        icon:`<svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="46" height="46" rx="7" fill="#674FC2"/>
        <path d="M19 13V16" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M27 13V16" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M29.2 32.4C30.9673 32.4 32.4 30.9673 32.4 29.2C32.4 27.4327 30.9673 26 29.2 26C27.4327 26 26 27.4327 26 29.2C26 30.9673 27.4327 32.4 29.2 32.4Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M33 33L32 32" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M14.5 20.09H31.5" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M24.37 33H19C15.5 33 14 31 14 28V19.5C14 16.5 15.5 14.5 19 14.5H27C30.5 14.5 32 16.5 32 19.5V24" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M22.9955 24.7H23.0045" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M19.2943 24.7H19.3033" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M19.2943 27.7H19.3033" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        `
    }
]

function Feature() {
  return (
    <div className='feature-container'>
        <Element name="section2"></Element>
        <h3 style={{display:"block",marginTop:"56px",fontWeight:"700",width:"100%",textAlign:"left"}}>Features</h3>
        {items.map((item)=>{
            return(
                <div className='feature-card'>
                    <div dangerouslySetInnerHTML={{ __html: item.icon }}/>
                    <div  style={{marginTop:"15px",fontWeight:"700"}} dangerouslySetInnerHTML={{ __html: item.title }}/>
                    <div dangerouslySetInnerHTML={{ __html: item.desc }}/>
                </div>
            )
        })}
    </div>
  )
}

export default Feature