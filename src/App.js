import React from "react";
import Create from "./components/create";
import Read from "./components/Read";
import {Routes, Route} from "react-router-dom";
import Edit from "./components/Edit";
function App(){

return(
  <div className="container">
    <Routes>
      <Route exact path='/' element={<Read/>}></Route>
      <Route exact path='/create' element={<Create/>}></Route>
      <Route exact path='/edit' element={<Edit/>}></Route>
    </Routes>
   
  </div>
)

}
export default App;