import "./table.css"
import React, { useEffect, useState } from 'react'
import {Contacts} from "./Data"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArchive, faCake, faCheck, faCheckSquare, faSquare } from "@fortawesome/free-solid-svg-icons";
import EditMenu from "./EditMenu";
import FilterMenu from './FilterMenu';


function Table({sharedContacts,handleAdd,setSharedContacts}) {
    const [toCompare, setToCompare] = useState(sharedContacts);
   
        /* to handle select Item*/
        const [originalArray, setOriginalArray] = useState(sharedContacts);
        const [archivedArray, setArchivedArray] = useState([]);

        const handleSelect = (id) => {
            const updatedArray = sharedContacts.map(item =>
              item.id === id ? { ...item, selected: !item.selected } : item
            );
            setSharedContacts(updatedArray);
          };
          
        
          const handleArchive = () => {
            const selectedItems = sharedContacts.filter(item => item.selected);
            const updatedOriginalArray = sharedContacts.filter(item => !item.selected);
            setSharedContacts(updatedOriginalArray);
            setArchivedArray(prevArchivedArray => [...prevArchivedArray, ...selectedItems]);
          };
       

        /* End of handle Arrchive item*/
        /*function to handle Rerender*/
    const addUniversityToCompare = async (chiptoadd) => {
        var currentToCompare = toCompare.slice();
        currentToCompare.push(chiptoadd);
        setToCompare(currentToCompare);
    }
    useEffect(()=>{
        addUniversityToCompare();
    },[sharedContacts])
    /*End of function to handle Rerender*/
    /* handle Edit drop down menu */
    const [toggleComp,setToggleComp]=useState(false);
    const [toggleDate,setToggleDate]=useState(true);
    const handleApearCom=()=>
    {
      setToggleComp(!toggleComp);
    }
    const handleApearDate=()=>
    {
        setToggleDate(!toggleDate);
    }

    /*End of handle Edit Drop Down Menu*/
    /*handle filter Drop Down Menu*/

    const allCompanies=["all", ...new Set(sharedContacts.map((contact) => contact.company))];
    const [companies, setCompanies] = useState(allCompanies);
    const [filteredContacts,setFilteredContacts]=useState(sharedContacts)
        const filterContatcts = (company) => {
            if (company === "all") {
                setSharedContacts(filteredContacts);
                console.log("all clicked")
            return;
            }
            const newConatcts = filteredContacts.filter((contact) => contact.company === company);
            setSharedContacts(newConatcts);
            console.log(company);
        }
    /*end of handle Filter Drop Down Menu*/
  return (
    <div className="table-container">
        <div className="recently-row">
        <div>
            <svg width="32" height="36" viewBox="0 0 32 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 34V32C2 24.268 8.26802 18 16 18C23.732 18 30 24.268 30 32V34" stroke="#3B2E8C" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M16 18C20.4182 18 24 14.4182 24 10C24 5.58172 20.4182 2 16 2C11.5817 2 8 5.58172 8 10C8 14.4182 11.5817 18 16 18Z" stroke="#3B2E8C" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span style={{color:"#3B2E8C"}}>Recently Views</span>
        </div>
        <button onClick={handleAdd}>Create New contact</button>
        </div>
        <div className="options-row">
            <div style={{fontWeight:"400"}}>Contacts Numbers : {originalArray.length}</div>
            <div className="option-row-buttons">
                    <div style={{cursor:"pointer"}} >
                           <FilterMenu companies={companies}
                                       filterContatcts={(company)=>filterContatcts(company)}
                           ></FilterMenu>
                    </div>
                    <div style={{cursor:"pointer"}} >
                            <EditMenu 
                                    handleApearCom={handleApearCom}
                                    toggleComp={toggleComp}
                                    handleApearDate={handleApearDate}
                                    toggleDate={toggleDate}
                            ></EditMenu>
                    </div>
                <div style={{cursor:"pointer"}} onClick={handleArchive}>
                    <span style={{paddingRight:"10px"}} >Archive</span>
                    <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.50345 7.37263C9.31018 7.36905 9.1506 7.52281 9.14701 7.71608C9.14342 7.90934 9.29719 8.06893 9.49045 8.07251L9.50345 7.37263ZM12.1782 10.5046L11.8282 10.4982V10.5046H12.1782ZM12.1782 10.7183H11.8281L11.8283 10.7247L12.1782 10.7183ZM9.49695 13.5003V13.8503L9.50345 13.8502L9.49695 13.5003ZM3.48445 13.5003L3.47795 13.8503H3.48445V13.5003ZM0.803202 10.7183L1.1532 10.7247V10.7183H0.803202ZM0.803202 10.5046H1.15326L1.15314 10.4982L0.803202 10.5046ZM3.49095 8.07251C3.68422 8.06893 3.83798 7.90934 3.83439 7.71608C3.8308 7.52281 3.67122 7.36905 3.47795 7.37263L3.49095 8.07251ZM8.48939 10.161C8.63946 10.0391 8.66236 9.81873 8.54053 9.66865C8.4187 9.51858 8.19828 9.49568 8.04821 9.61751L8.48939 10.161ZM6.26964 11.0613C6.11957 11.1831 6.09667 11.4036 6.2185 11.5536C6.34033 11.7037 6.56075 11.7266 6.71082 11.6048L6.26964 11.0613ZM6.26912 11.6047C6.41914 11.7266 6.63957 11.7038 6.76146 11.5538C6.88336 11.4037 6.86056 11.1833 6.71054 11.0614L6.26912 11.6047ZM4.9336 9.61761C4.78358 9.49571 4.56315 9.51851 4.44125 9.66853C4.31936 9.81855 4.34216 10.039 4.49218 10.1609L4.9336 9.61761ZM6.14023 11.3331C6.14023 11.5264 6.29693 11.6831 6.49023 11.6831C6.68353 11.6831 6.84023 11.5264 6.84023 11.3331H6.14023ZM6.84023 0.5C6.84023 0.3067 6.68353 0.15 6.49023 0.15C6.29693 0.15 6.14023 0.3067 6.14023 0.5H6.84023ZM9.49045 8.07251C10.8058 8.09694 11.8523 9.18284 11.8283 10.4982L12.5281 10.511C12.5593 8.80919 11.2052 7.40424 9.50345 7.37263L9.49045 8.07251ZM11.8282 10.5046V10.7183H12.5282V10.5046H11.8282ZM11.8283 10.7247C11.8523 12.04 10.8058 13.1259 9.49045 13.1503L9.50345 13.8502C11.2052 13.8186 12.5593 12.4136 12.5281 10.7119L11.8283 10.7247ZM9.49695 13.1503H3.48445V13.8503H9.49695V13.1503ZM3.49095 13.1503C2.17563 13.1259 1.12905 12.04 1.15314 10.7247L0.453261 10.7119C0.422094 12.4136 1.77617 13.8186 3.47795 13.8502L3.49095 13.1503ZM1.1532 10.7183V10.5046H0.453202V10.7183H1.1532ZM1.15314 10.4982C1.12905 9.18284 2.17563 8.09694 3.49095 8.07251L3.47795 7.37263C1.77617 7.40424 0.422094 8.80919 0.453261 10.511L1.15314 10.4982ZM8.04821 9.61751L6.26964 11.0613L6.71082 11.6048L8.48939 10.161L8.04821 9.61751ZM6.71054 11.0614L4.9336 9.61761L4.49218 10.1609L6.26912 11.6047L6.71054 11.0614ZM6.84023 11.3331V0.5H6.14023V11.3331H6.84023Z" fill="#3B2E8C"/>
                    </svg>
                </div>
            </div>
        </div>
        <div className="table-rows-container">
        <div className="header-row">
            <div>Name</div>
            <div>E-mail</div>
            <div>Phone Number</div>
            <div style={{display:toggleDate?'block':'none'}}>Date</div>
            <div style={{display:toggleComp?'block':'none'}}>Company</div>
        </div>
            {sharedContacts.map((contact)=>
            {
                return(
                    <div
                        onClick={() => handleSelect(contact.id)}
                        className={contact.selected ? "table-row clicked" : "table-row "} 
                        key={contact.id}
                    >
                        <div>
                            <FontAwesomeIcon icon={contact.selected ?  faCheckSquare: faSquare } style={{paddingRight:"5px"}} />
                            <span style={{color:"#000"}}>{contact.name}</span>
                        </div>
                        <div>{contact.email}</div>
                        <div>{contact.phone}</div>
                        <div style={{display:toggleDate?'block':'none'}}>{contact.date}</div>
                        <div style={{display:toggleComp?'block':'none'}}>{contact.company}</div>
                    </div>    
                )
            })}   
            {
                archivedArray.map((contact)=>{
                    return(
                        <div
                        onClick={() => handleSelect(contact.id)}
                        className="archived-row"
                        key={contact.id}
                    >
                        <div>
                            <FontAwesomeIcon icon={faArchive} style={{paddingRight:"5px"}} />
                            <span style={{color:"#000"}}>{contact.name}</span>
                        </div>
                        <div>{contact.email}</div>
                        <div>{contact.phone}</div>
                        <div style={{display:toggleDate?'block':'none'}}>{contact.date}</div>
                        <div style={{display:toggleComp?'block':'none'}}>{contact.company}</div>
                    </div>    
                    )
                })
            }
        </div>
        <div>
        </div>
    </div>

  )
}

export default Table