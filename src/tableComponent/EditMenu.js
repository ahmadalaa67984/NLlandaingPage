import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faCheckSquare, faSquare } from "@fortawesome/free-solid-svg-icons";

 function EditMenu({toggleComp,handleApearCom,toggleDate,handleApearDate}) {
    /*handle menu open and close*/
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  /*handle menu open and close*/
  /*handle appear company and Date*/

  /*End of handle appear company and Date*/

  return (
    <div>
      <Button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
            <span style={{paddingRight:"10px",color:"#3B2E8C"}}  >Edit</span>
            <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.48211 3.70865C7.603 3.55782 7.57872 3.33754 7.42789 3.21666C7.27705 3.09577 7.05678 3.12004 6.93589 3.27088L7.48211 3.70865ZM1.311 10.8488L1.57625 11.0775L1.58411 11.0677L1.311 10.8488ZM1.14 11.2668L0.79068 11.244L0.790375 11.2506L1.14 11.2668ZM1 14.2898L0.650375 14.2736C0.64957 14.291 0.650062 14.3084 0.651847 14.3257L1 14.2898ZM1.787 14.9768L1.79844 15.3266C1.82178 15.3258 1.84499 15.3227 1.86771 15.3173L1.787 14.9768ZM4.787 14.2658L4.86772 14.6064L4.87316 14.605L4.787 14.2658ZM5.172 14.0218L5.44202 14.2445L5.44505 14.2407L5.172 14.0218ZM11.485 6.70873C11.606 6.55792 11.5818 6.33764 11.431 6.21672C11.2802 6.09579 11.0599 6.12 10.939 6.2708L11.485 6.70873ZM6.93897 3.27078C6.81803 3.42158 6.84223 3.64186 6.99302 3.7628C7.14381 3.88374 7.3641 3.85954 7.48503 3.70874L6.93897 3.27078ZM8.8 1.50976L9.07303 1.72874C9.07763 1.72301 9.08205 1.71713 9.08628 1.71112L8.8 1.50976ZM10.429 1.18976L10.6529 0.920759C10.6418 0.911481 10.6301 0.902905 10.6178 0.89508L10.429 1.18976ZM12.666 3.05176L12.9137 2.80451C12.9061 2.79689 12.8982 2.78964 12.8899 2.78276L12.666 3.05176ZM13.0029 3.87264L13.3529 3.87456V3.87456L13.0029 3.87264ZM12.657 4.68976L12.412 4.4398C12.4021 4.44952 12.3928 4.45983 12.3841 4.47066L12.657 4.68976ZM10.9391 6.27066C10.8181 6.4214 10.8422 6.64169 10.9929 6.7627C11.1436 6.88371 11.3639 6.85961 11.4849 6.70887L10.9391 6.27066ZM7.55814 3.4379C7.52949 3.24673 7.3513 3.11498 7.16013 3.14363C6.96897 3.17228 6.83722 3.35047 6.86586 3.54163L7.55814 3.4379ZM11.2591 6.83658C11.4507 6.81055 11.5848 6.63418 11.5588 6.44264C11.5328 6.2511 11.3564 6.11693 11.1649 6.14295L11.2591 6.83658ZM6.93589 3.27088L1.03789 10.6299L1.58411 11.0677L7.48211 3.70865L6.93589 3.27088ZM1.04592 10.6202C0.89533 10.7949 0.80575 11.0139 0.790742 11.244L1.48926 11.2895C1.49436 11.2112 1.52484 11.1367 1.57608 11.0773L1.04592 10.6202ZM0.790375 11.2506L0.650375 14.2736L1.34963 14.306L1.48963 11.283L0.790375 11.2506ZM0.651847 14.3257C0.711972 14.9086 1.21273 15.3457 1.79844 15.3266L1.77556 14.627C1.55723 14.6341 1.37057 14.4711 1.34815 14.2539L0.651847 14.3257ZM1.86771 15.3173L4.86771 14.6063L4.70629 13.9252L1.70629 14.6362L1.86771 15.3173ZM4.87316 14.605C5.09626 14.5483 5.29551 14.4221 5.44199 14.2445L4.90201 13.799C4.85021 13.8618 4.77974 13.9065 4.70084 13.9265L4.87316 14.605ZM5.44505 14.2407L11.485 6.70873L10.939 6.2708L4.89895 13.8028L5.44505 14.2407ZM7.48503 3.70874L9.07303 1.72874L8.52697 1.29078L6.93897 3.27078L7.48503 3.70874ZM9.08628 1.71112C9.34816 1.33877 9.85689 1.23884 10.2402 1.48445L10.6178 0.89508C9.91894 0.447204 8.99126 0.629437 8.51372 1.30841L9.08628 1.71112ZM10.2051 1.45877L12.4421 3.32077L12.8899 2.78276L10.6529 0.920759L10.2051 1.45877ZM12.4183 3.29902C12.5696 3.45065 12.6541 3.65648 12.6529 3.87072L13.3529 3.87456C13.3551 3.47357 13.197 3.08832 12.9137 2.80451L12.4183 3.29902ZM12.6529 3.87072C12.6518 4.08496 12.565 4.28984 12.412 4.4398L12.902 4.93973C13.1884 4.65905 13.3507 4.27556 13.3529 3.87456L12.6529 3.87072ZM12.3841 4.47066L10.9391 6.27066L11.4849 6.70887L12.9299 4.90887L12.3841 4.47066ZM6.86586 3.54163C7.18279 5.65657 9.14005 7.12451 11.2591 6.83658L11.1649 6.14295C9.42518 6.37933 7.81832 5.17419 7.55814 3.4379L6.86586 3.54163Z" fill="#3B2E8C"/>
            </svg>
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}>Name</MenuItem>
        <MenuItem onClick={handleClose}>Email</MenuItem>
        <MenuItem onClick={handleClose}>phone</MenuItem>
        <MenuItem 
            onClick={handleApearDate}
        >Date
            <FontAwesomeIcon style={{paddingLeft:"5px",color:"gray"}} icon={toggleDate?faCheckSquare:faSquare}></FontAwesomeIcon>
        </MenuItem>
        <MenuItem onClick={handleApearCom}>
            company
            <FontAwesomeIcon style={{paddingLeft:"5px",color:"gray"}} icon={toggleComp?faCheckSquare:faSquare}></FontAwesomeIcon>
        </MenuItem>
      </Menu>
    </div>
  );
}
export default EditMenu