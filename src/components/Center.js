import React from 'react'
import './Center.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
const items=[
    {
        primarColor:"#3B2E8C",
        seconderColor:"#9383CE",
        text:"Offered in multiple languages<br/>serving the Arab region<br/>in particular",
        icon:`<svg width="77" height="77" viewBox="0 0 77 77" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="38.5" cy="38.5" r="38.5" fill="#6C56BD" fill-opacity="0.29"/>
        <circle cx="38" cy="39" r="30" fill="url(#paint0_linear_2_1257)"/>
        <path d="M45.06 45.67L42.92 41.4L40.78 45.67" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M41.17 44.9099H44.69" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M42.92 49.0001C40.12 49.0001 37.84 46.73 37.84 43.92C37.84 41.12 40.11 38.8401 42.92 38.8401C45.72 38.8401 48 41.11 48 43.92C48 46.73 45.73 49.0001 42.92 49.0001Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M31.02 29H34.94C37.01 29 38.01 30 37.96 32.02V35.94C38.01 38.01 37.01 39.01 34.94 38.96H31.02C29 39 28 38 28 35.93V32.01C28 30 29 29 31.02 29Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M35.01 32.8499H30.95" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M32.97 32.1699V32.8499" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M33.99 32.84C33.99 34.59 32.62 36.0099 30.94 36.0099" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M35.01 36.01C34.28 36.01 33.62 35.62 33.16 35" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M28 42C28 45.87 31.13 49 35 49L33.95 47.25" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M48 36C48 32.13 44.87 29 41 29L42.05 30.75" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <defs>
        <linearGradient id="paint0_linear_2_1257" x1="-20" y1="83" x2="68" y2="22.5" gradientUnits="userSpaceOnUse">
        <stop stop-color="#9383CE"/>
        <stop offset="1" stop-color="#5F45BF"/>
        </linearGradient>
        </defs>
        </svg>
        
        `,
    },
    {
        primarColor:"#B88FC6",
        seconderColor:"#CCC5E3",
        text:"Simple and advanced<br/>user interface",
        icon:`<svg width="77" height="77" viewBox="0 0 77 77" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="38.5" cy="38.5" r="38.5" fill="#CCC5E3" fill-opacity="0.89"/>
        <circle cx="39" cy="39" r="30" fill="#B88FC6"/>
        <path d="M37.5 46.9V31.1C37.5 29.6 36.86 29 35.27 29H31.23C29.64 29 29 29.6 29 31.1V46.9C29 48.4 29.64 49 31.23 49H35.27C36.86 49 37.5 48.4 37.5 46.9Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M49 35.52V30.98C49 29.57 48.36 29 46.77 29H42.73C41.14 29 40.5 29.57 40.5 30.98V35.51C40.5 36.93 41.14 37.49 42.73 37.49H46.77C48.36 37.5 49 36.93 49 35.52Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M49 46.77V42.73C49 41.14 48.36 40.5 46.77 40.5H42.73C41.14 40.5 40.5 41.14 40.5 42.73V46.77C40.5 48.36 41.14 49 42.73 49H46.77C48.36 49 49 48.36 49 46.77Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        `,
    },
    {
        primarColor:"#DB665A",
        seconderColor:"#EFACA5",
        text:"One Place for all tasks <br/>and data",
        icon:`<svg width="77" height="77" viewBox="0 0 77 77" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="38.5" cy="38.5" r="38.5" fill="#DB665A" fill-opacity="0.29"/>
        <circle cx="39" cy="39" r="30" fill="#DB665A"/>
        <path d="M34 34H31C29.9 34 29 33.1 29 32V30C29 28.9 29.9 28 31 28H34C35.1 28 36 28.9 36 30V32C36 33.1 35.1 34 34 34Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M47.8 33H44.2C43.54 33 43 32.46 43 31.8V30.2C43 29.54 43.54 29 44.2 29H47.8C48.46 29 49 29.54 49 30.2V31.8C49 32.46 48.46 33 47.8 33Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M47.8 40.5H44.2C43.54 40.5 43 39.96 43 39.3V37.7C43 37.04 43.54 36.5 44.2 36.5H47.8C48.46 36.5 49 37.04 49 37.7V39.3C49 39.96 48.46 40.5 47.8 40.5Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M36 31H43" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M39.5 31V44C39.5 45.1 40.4 46 41.5 46H43" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M39.5 38.5H43" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M47.8 48H44.2C43.54 48 43 47.46 43 46.8V45.2C43 44.54 43.54 44 44.2 44H47.8C48.46 44 49 44.54 49 45.2V46.8C49 47.46 48.46 48 47.8 48Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        `,
    },
    {
        primarColor:"#DB665A",
        seconderColor:"#EFACA5",
        text:"Track your clients progress<br/>and updates",
        icon:`<svg width="77" height="77" viewBox="0 0 77 77" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="38.5" cy="38.5" r="38.5" fill="#DB665A" fill-opacity="0.29"/>
        <circle cx="38" cy="39" r="30" fill="#DB665A"/>
        <path d="M35.16 37.87C35.06 37.86 34.94 37.86 34.83 37.87C32.45 37.79 30.56 35.84 30.56 33.44C30.56 30.99 32.54 29 35 29C37.45 29 39.44 30.99 39.44 33.44C39.43 35.84 37.54 37.79 35.16 37.87Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M42.41 31C44.35 31 45.91 32.57 45.91 34.5C45.91 36.39 44.41 37.93 42.54 38C42.46 37.99 42.37 37.99 42.28 38" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M30.16 41.56C27.74 43.18 27.74 45.82 30.16 47.43C32.91 49.27 37.42 49.27 40.17 47.43C42.59 45.81 42.59 43.17 40.17 41.56C37.43 39.73 32.92 39.73 30.16 41.56Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M44.34 47C45.06 46.85 45.74 46.56 46.3 46.13C47.86 44.96 47.86 43.03 46.3 41.86C45.75 41.44 45.08 41.16 44.37 41" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        `,
    },
    {
        primarColor:"#3B2E8C",
        seconderColor:"#9383CE",
        text:"Manage your tasks with <br/>ease from any place",
        icon:`<svg width="77" height="77" viewBox="0 0 77 77" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="38.5" cy="38.5" r="38.5" fill="#CCC5E3" fill-opacity="0.89"/>
        <circle cx="39" cy="39" r="30" fill="#674FC2"/>
        <path d="M39.37 34.88H44.62" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M33.38 34.88L34.13 35.63L36.38 33.38" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M39.37 41.88H44.62" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M33.38 41.88L34.13 42.63L36.38 40.38" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M36 48H42C47 48 49 46 49 41V35C49 30 47 28 42 28H36C31 28 29 30 29 35V41C29 46 31 48 36 48Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        `,
    },
    {
        primarColor:"#B88FC6",
        seconderColor:"#CCC5E3",
        text:"Flexible & scalable according to <br/>the targeted sector",
        icon:`<svg width="77" height="77" viewBox="0 0 77 77" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="38.5" cy="38.5" r="38.5" fill="#E1D5E5"/>
        <circle cx="39" cy="39" r="30" fill="#B88FC6"/>
        <path d="M43 35H35V43H43V35Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M32 49C33.65 49 35 47.65 35 46V43H32C30.35 43 29 44.35 29 46C29 47.65 30.35 49 32 49Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M32 35H35V32C35 30.35 33.65 29 32 29C30.35 29 29 30.35 29 32C29 33.65 30.35 35 32 35Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M43 35H46C47.65 35 49 33.65 49 32C49 30.35 47.65 29 46 29C44.35 29 43 30.35 43 32V35Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M46 49C47.65 49 49 47.65 49 46C49 44.35 47.65 43 46 43H43V46C43 47.65 44.35 49 46 49Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        `,
    },
  
];

function Center() {
  return (
    <>
    <div className='center-container'>
        {items.map((item)=>{
            return(
                
                <div className='center-card-container'>
                            <div className='inside-icon' dangerouslySetInnerHTML={{ __html: item.icon }}></div>
                    <div style={{paddingLeft:"10px"}} dangerouslySetInnerHTML={{ __html: item.text }}></div>
                </div>
           
            )
        })}
         </div>
    </>
  )
}

export default Center