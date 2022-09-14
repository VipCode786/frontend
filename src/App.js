import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Create from "./Pages/Create";
import Home from "./Pages/Home";
import ContactUs from "./Pages/ContactUs"


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
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
