import React from "react";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateData from "./companents/CreateData/CreateData";

import NavbarRouter from "./companents/Navbar/NavbarRouter";
import EditPage from "./EditPage/EditPage";
import TableList from "./TableList/TableList";
import "./app.css"

 






const App = () => {



return(
  <>

 <div className="red">
 <Router>
  <NavbarRouter/>
    <Routes>
     
      <Route path="/create" element={<CreateData/>} />
      <Route path="/table" element={<TableList/>} />
      <Route path="/table/edit/:id" element={<EditPage/>} />

    </Routes>
  </Router>



 </div>
 </>


 

 
)
}
export default App