import React from 'react'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import NestedFilter from './NestedFilter';



function FilterMenu({companies,filterContatcts}) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const [Nestedcompanies,SetCompanies]=React.useState(companies);
  
  return (
    <div>
    <Button
      id="fade-button"
      aria-controls={open ? 'fade-menu' : undefined}
      aria-haspopup="true"
      aria-expanded={open ? 'true' : undefined}
      onClick={handleClick}
    >
      <span style={{paddingRight:"10px",color:"#3B2E8C"}}  >Filter</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.69008 3.84996C7.19348 3.09341 7.06696 2.0823 6.39266 1.47312C5.71836 0.863941 4.69963 0.840401 3.99792 1.41779C3.2962 1.99517 3.1231 2.99935 3.59102 3.77835C4.05893 4.55735 5.02675 4.87624 5.86608 4.52796C6.20151 4.38801 6.48815 4.15215 6.69008 3.84996Z" stroke="#3B2E8C" stroke-linecap="round" stroke-linejoin="round"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.69008 14.1649C7.19348 13.4084 7.06696 12.3972 6.39266 11.7881C5.71836 11.1789 4.69963 11.1553 3.99792 11.7327C3.2962 12.3101 3.1231 13.3143 3.59102 14.0933C4.05893 14.8723 5.02675 15.1912 5.86608 14.8429C6.20151 14.703 6.48815 14.4671 6.69008 14.1649V14.1649Z" stroke="#3B2E8C" stroke-linecap="round" stroke-linejoin="round"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.3101 9.00695C8.8067 8.25039 8.93323 7.23929 9.60753 6.6301C10.2818 6.02092 11.3006 5.99738 12.0023 6.57477C12.704 7.15215 12.8771 8.15634 12.4092 8.93534C11.9413 9.71433 10.9734 10.0332 10.1341 9.68495C9.79868 9.54499 9.51203 9.30914 9.3101 9.00695V9.00695Z" stroke="#3B2E8C" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M7 2.32593C6.72386 2.32593 6.5 2.54979 6.5 2.82593C6.5 3.10207 6.72386 3.32593 7 3.32593V2.32593ZM15 3.32593C15.2761 3.32593 15.5 3.10207 15.5 2.82593C15.5 2.54979 15.2761 2.32593 15 2.32593V3.32593ZM3.327 3.32593C3.60314 3.32593 3.827 3.10207 3.827 2.82593C3.827 2.54979 3.60314 2.32593 3.327 2.32593V3.32593ZM1 2.32593C0.723858 2.32593 0.5 2.54979 0.5 2.82593C0.5 3.10207 0.723858 3.32593 1 3.32593V2.32593ZM7 12.6419C6.72386 12.6419 6.5 12.8658 6.5 13.1419C6.5 13.4181 6.72386 13.6419 7 13.6419V12.6419ZM15 13.6419C15.2761 13.6419 15.5 13.4181 15.5 13.1419C15.5 12.8658 15.2761 12.6419 15 12.6419V13.6419ZM3.327 13.6419C3.60314 13.6419 3.827 13.4181 3.827 13.1419C3.827 12.8658 3.60314 12.6419 3.327 12.6419V13.6419ZM1 12.6419C0.723858 12.6419 0.5 12.8658 0.5 13.1419C0.5 13.4181 0.723858 13.6419 1 13.6419V12.6419ZM9 8.48393C9.27614 8.48393 9.5 8.26007 9.5 7.98393C9.5 7.70779 9.27614 7.48393 9 7.48393V8.48393ZM1 7.48393C0.723858 7.48393 0.5 7.70779 0.5 7.98393C0.5 8.26007 0.723858 8.48393 1 8.48393V7.48393ZM12.673 7.48393C12.3969 7.48393 12.173 7.70779 12.173 7.98393C12.173 8.26007 12.3969 8.48393 12.673 8.48393V7.48393ZM15 8.48393C15.2761 8.48393 15.5 8.26007 15.5 7.98393C15.5 7.70779 15.2761 7.48393 15 7.48393V8.48393ZM7 3.32593H15V2.32593H7V3.32593ZM3.327 2.32593H1V3.32593H3.327V2.32593ZM7 13.6419H15V12.6419H7V13.6419ZM3.327 12.6419H1V13.6419H3.327V12.6419ZM9 7.48393H1V8.48393H9V7.48393ZM12.673 8.48393H15V7.48393H12.673V8.48393Z" fill="#3B2E8C"/>
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
      <MenuItem onClick={handleClose}>Date</MenuItem>
      <MenuItem >
        company
        <NestedFilter companies={Nestedcompanies}
                      filterContatcts={(company)=>filterContatcts(company)}
        ></NestedFilter>
      </MenuItem>
    </Menu>
  </div>
  )
}

export default FilterMenu