import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import ContactUs from "./Pages/ContactUs";
import Home from "./Pages/Home";



function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/about" element={<About/>} />
     <Route path="/contactus" element={<ContactUs />} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
