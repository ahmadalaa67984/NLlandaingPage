import React, { useEffect, useState } from 'react'
import "./massage.css"

function Massage() {
    const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set visibility to false after 5 seconds (adjust as needed)
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    // Cleanup function to clear timeout on component unmount
    return () => clearTimeout(timeout);
  }, []); // Empty dependency array ensures useEffect runs only once after initial render
  useEffect(() => {
    // Set visibility to false after 5 seconds (adjust as needed)
    const timeout = setTimeout(() => {
      setIsVisible(false);
    }, 10000);

    // Cleanup function to clear timeout on component unmount
    return () => clearTimeout(timeout);
  }, []); // Empty dependency array ensures useEffect runs only once after initial render

  return (
    <div className={`massage-container ${isVisible ? 'visible' : 'hidden'}`}>
            <div className='inside-massage'>
                <div className='group-icon'>
                    <svg width="58" height="22" viewBox="0 0 58 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="2.5" cy="13.5" r="2.5" fill="#5E41CA"/>
                    <path d="M57.2188 17.5647V16.8036C57.2188 13.8613 54.8335 11.4761 51.8912 11.4761C49.9781 11.4761 48.3006 12.4845 47.361 13.9987" stroke="#5E41CA" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M51.8932 11.4761C53.5745 11.4761 54.9375 10.113 54.9375 8.43176C54.9375 6.75043 53.5745 5.38745 51.8932 5.38745C50.2119 5.38745 48.8489 6.75043 48.8489 8.43176C48.8489 10.113 50.2119 11.4761 51.8932 11.4761Z" fill="#5F45BF" stroke="#5E41CA" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M24 17.5647V16.8036C24 13.8613 26.3852 11.4761 29.3275 11.4761C31.1437 11.4761 32.7477 12.3849 33.7094 13.7726" stroke="#5E41CA" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M29.3281 11.4762C31.0094 11.4762 32.3724 10.1132 32.3724 8.43188C32.3724 6.75055 31.0094 5.38757 29.3281 5.38757C27.6468 5.38757 26.2838 6.75055 26.2838 8.43188C26.2838 10.1132 27.6468 11.4762 29.3281 11.4762Z" fill="#5F45BF" stroke="#5E41CA" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M31.6029 21.0566V19.8031C31.6029 14.9569 35.5315 11.0283 40.3776 11.0283C45.2238 11.0283 49.1524 14.9569 49.1524 19.8031V21.0566" stroke="#5E41CA" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M40.3801 11.0283C43.1493 11.0283 45.3942 8.78334 45.3942 6.01415C45.3942 3.24491 43.1493 1 40.3801 1C37.6108 1 35.3659 3.24491 35.3659 6.01415C35.3659 8.78334 37.6108 11.0283 40.3801 11.0283Z" fill="#5F45BF" stroke="#5E41CA" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div className='group-text'>
               <span style={{fontWeight:"600",fontSize:"15px"}}>New company was added</span> <br/>
                    <span style={{fontWeight:"300",fontSize:"10px"}}>
                    <span style={{fontWeight:"700",fontSize:"10px"}}> Mohanad </span> 
                    added a new company 
                    <span style={{fontWeight:"700",fontSize:"10px"}}>“Osolutions”</span> assigned<br/> to 
                    <span style={{fontWeight:"700",fontSize:"10px"}}> Omar Tarek</span>
                    </span>
                </div>
            </div>
        </div>
  )
}

export default Massage