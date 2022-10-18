import React from "react"
import { useState} from "react"
import { render } from "react-dom";
import "./user.css";
const Form1 = () => {
  const [Group,setGroup] = useState([{ID:["random"]},
                                        {NAME:["text"]}])
  const [Name,setName] = useState("")
  const [Email,setEmail] = useState("")
  const [EmployeeID,setEmployeeID] = useState([])
  const [PhoneNumber,setPhoneNumber] = useState("")
  const [Country,setCountry] = useState("")
  const [Password,setPassword] = useState("")
  const [ConfirmPass,setConfirmPass] = useState("")
const handleSubmit = (event) => {
    event.preventDefault();  
    console.log("Group:",Group);
    console.log("Name:",Name);
    console.log("Email:",Email);
    console.log("EmployeeID:",EmployeeID);
    console.log("PhoneNumbe:",PhoneNumber);
    console.log("Country:",Country);
    console.log("Password:",Password);
    console.log("ConfirmPass:",ConfirmPass);
}

return (
    <>
    <form  onSubmit={handleSubmit} class = "form" >
           {/* <input type="text" class="border-input" id = "Group" name="Group" placeholder = "Group" size = "50" value = {Group} onChange={(e) => setGroup(e.target.value)} />    */}
           <select name="Group" id="Group" class="Group" value={Group} onChange={(e) => setGroup(e.target.value)} >
            <option value = "Group">Group</option>
            <option value="ID">ID</option>
            <option value="NAME">NAME</option>
          </select>   
    <br></br><br></br>
          <input type="text" id="Name" class="border-input" name="Name" placeholder = "Name" value={Name} onChange={(e) => setName(e.target.value)} /> 
       
          <br></br><br></br>
          <input type="email" id="Email" class="border-input" name="Email" placeholder = "Email" value={Email} onChange={(e) => setEmail(e.target.value)} />
    <br></br><br></br>
          <input type="text" class="border-input" id = "EmployeeID" name="EmployeeID" placeholder = "EmployeeID" size = "50" value = {EmployeeID} onChange={(e) => setEmployeeID(e.target.value)}/>
    <br></br>
          <p>India</p>
          <select class="vat" id="phone"value={Country} onChange={(e)=>setCountry(e.target.value)}>
          <option label="+91">+91</option>
          <option label="+1"> +1</option>
          <option label="+7">+7</option>
          </select>&nbsp;&nbsp;&nbsp;
          <input type="number"  class="pn" placeholder=" PhoneNumbe" name="PhoneNumbe "  value={PhoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)} size="40"></input>
    <br></br>
    <br></br>
          <input type="text" class="border-input" id = "Password" name="Password" placeholder = "Create Password" size = "50" value = {Password} onChange={(e) => setPassword(e.target.value)} />
    <br></br><br></br>
          <input type="text" class="border-input" name="ConfirmPass" placeholder = "Confirm Password" value={ConfirmPass} onChange={(e) => setConfirmPass(e.target.value)} />
    <br></br>
    <br></br>
        <button  type="submit" class="submit" id="save-button">Send Verification Code</button>
           </form>
       </>
)}
  export default Form1
  