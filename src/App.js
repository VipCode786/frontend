import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Create from "./Pages/Create";
import Home from "./Pages/Home";
import ContactUs from "./Pages/ContactUs"
import Data from "./Pages/Items"
import Group1 from "./Pages/Groups/Group1"

function App() {
  return (
    <div>
      hiii
      <BrowserRouter>
     <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/about" element={<About/>} />
    <Route path="/contactus" element={<ContactUs/>}></Route>
     <Route path="/create" element={<Create/>}/>
     <Route path="/Items" element={<Data/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
