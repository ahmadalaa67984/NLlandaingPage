import React from 'react'
import AddPerson from '../tableComponent/AddPerson.js';
import NavbarTable from '../tableComponent/NavBarTable.js';
import Table from '../tableComponent/Table.js';
import { Contacts } from '../tableComponent/Data.js';
import { useEffect, useState } from 'react';

function DashBoard() {
    const [sharedContacts,setSharedContacts]=useState(Contacts);
    const [isOpen, setIsOpen] = useState(false);
    const [count,setCount]=useState(3);
    
    function toggle() {
        setIsOpen((isOpen) => !isOpen);
    }
    function increaseCounter(){
        setCount(count=>count+1); // Increment counter

    };
  return (
    <div>
        <NavbarTable></NavbarTable>
      <Table sharedContacts={sharedContacts} handleAdd={toggle} setSharedContacts={setSharedContacts}></Table>
      {isOpen && <AddPerson sharedContacts={sharedContacts} count={count} handleClose={toggle} handleIncreaseCount={increaseCounter}/>}
    </div>
  )
}

export default DashBoard