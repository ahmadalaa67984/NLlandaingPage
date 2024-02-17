import React from 'react'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


function NestedFilter({companies,filterContatcts}) {
    
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  return (
    <div>
    <Button
      id="basic-button"
      aria-controls={open ? 'basic-menu' : undefined}
      aria-haspopup="true"
      aria-expanded={open ? 'true' : undefined}
      onClick={handleClick}
    >
    <svg width="7" height="13" viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 11.7078L6 6.68212L1 1.65648" stroke="#5F45BF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>


    </Button>
    <Menu
      id="basic-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      MenuListProps={{
        'aria-labelledby': 'basic-button',
      }}
    >
        {companies.map((company)=>{
            return(
                <>
                    <MenuItem value={company} onClick={()=>filterContatcts(company)}>{company}</MenuItem>
                </>
            )
        })}
    </Menu>
  </div>
  )
}

export default NestedFilter