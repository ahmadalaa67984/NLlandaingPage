
import { useEffect, useState } from 'react';
import './App.css';
import Center from './components/Center.js';
import Feature from './components/Feature.js';
import Footer from './components/Footer.js';
import Header from './components/Header.js';
import Massage from './components/Massage.js';
import Navbar from './components/Navbar.js';
import Packages from './components/Packages.js';
import Target from './components/Target.js';
import AddPerson from './tableComponent/AddPerson.js';
import NavbarTable from './tableComponent/NavBarTable.js';
import Table from './tableComponent/Table.js';
import { Contacts } from './tableComponent/Data.js';
import { Routes,BrowserRouter as Router, Route,Link } from 'react-router-dom';
import HomePage from './pages/HomePage.js';
import DashBoard from './pages/DashBoard.js'

function App() {
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
    <div className="App">
      {
        /*
            <Navbar></Navbar>
      <Massage></Massage>
      <Header></Header>
      <Center></Center>
      <Feature></Feature>
      <Target></Target>
      <Packages></Packages>
      <Footer></Footer>
       
      <NavbarTable></NavbarTable>
      <Table sharedContacts={sharedContacts} handleAdd={toggle} setSharedContacts={setSharedContacts}></Table>
      {isOpen && <AddPerson sharedContacts={sharedContacts} count={count} handleClose={toggle} handleIncreaseCount={increaseCounter}/>}
         */ 
      }

      <Router>
        <Routes>
          <Route path="/"  element={<HomePage/>} />
          <Route path="/dash"  element={<DashBoard/>} />
        </Routes>
      </Router>
      </div>
  );
}

export default App;
