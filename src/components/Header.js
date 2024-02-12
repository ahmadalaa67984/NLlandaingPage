import React from 'react'
import "./header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightDots, faArrowsSplitUpAndLeft, faPeopleGroup } from '@fortawesome/free-solid-svg-icons'
import { Element } from 'react-scroll'

function Header() {
  return (
    <div className='gradinat-background'>
        <Element name="section1"></Element>
    <div className='header-container'>
        <div className='first-text'>
            Invest in Your Clients &
        </div>
        <div className='second-text'>
            <h1>
            Start Your Success
            </h1>
        </div>
        <div className='third-text'>
        Easier and More Efficient Customer <br/> Relationship Management
        </div>
        <div type="button" class="my-button" disabled>
            <div style={{paddingRight:"40px",boxSizing:"border-box"}}></div>
            <div style={{flex:2,cursor:"pointer"}} >Free Trial</div>
                <div style={{paddingRight:"40px",boxSizing:"border-box"}}>
                <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.3006 5.23206L20.5284 17.8857" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M6.24478 15.4586L5.3006 5.23206L15.5271 4.28787" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                </div>
        </div>
    </div>
    </div>
  )
}

export default Header