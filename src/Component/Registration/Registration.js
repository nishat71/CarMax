import { useState } from 'react';
import useAuth from '../../Hooks/useAuth';
// import {processToRegister} from "../../Hooks/useFirebase"
function Registration() {
const {processToRegister} = useAuth();
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [conpass, setConpass] = useState("")
  // const [desc, setDesc] = useState("")
  // const [mobile, setMobile] = useState("")
  const handleName = (event) => {
    setName(event.target.value);

  }
  const handleEmail = (event) => {
    setEmail(event.target.value);
    
  }
  const handlePassword = (event) => {
    setPassword(event.target.value);
    
  }
  const handleConpass = (event) => {
    setConpass(event.target.value);
    
  }
  // const handleDesc = (event) => {
  //   setDesc(event.target.value);
    
  // }
  // const handleMobile = (event) => {
  //   setMobile(event.target.value);
    
  // }
  const handleSubmit = (event) => {
    event.preventDefault();
    if (name.length <1 )
    { alert("Enter a valid name") }
  

let validemail =/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if(!validemail.test(email))
{ 
  alert("Please enter a valid email") 
}

let validpass=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
if(!validpass.test(password))
{
  alert(" Invalid Password")
}
if(password!==conpass)
{
  alert(" Password doesn't match ")
}
// if(desc.length<20)
// {
//   alert("Please enter at least 20 digit")
// }

// let validmobile=/^(?:(?:\+|00)88|01)?\d{11}$/;
// if(!validmobile.test(mobile))
// {
//   alert("Invalid number for the Region")
// }
processToRegister(email,password)
  }


  return (
    <div>
        <div className='d-grid text-center p-5 '>
          <h1 className='text-danger'>Create Account Here</h1>

        <form onSubmit={handleSubmit} className='m-2'>
  
    <input onChange={handleName} type="text" placeholder="Username" className='m-2 border-0 rounded'/><br/>
    <input onChange={handleEmail} type="email"  placeholder='Email' className='m-2 border-0 rounded'/><br/>
    <input onChange={handlePassword} type="password" placeholder='Password' className='m-2 border-0 rounded'/><br/>
    <input onChange={handleConpass} type="password" placeholder='Confirm Password' className='m-2 border-0 rounded'/><br/>
    {/* <textarea onChange={handleDesc} placeholder='Description' id="" cols="30" rows="5"  className='m-2 border-0 rounded'></textarea>
    <span>{desc.length}/20</span><br/>
    
    <input onChange={handleMobile} type="text" placeholder="your mobile" className='m-2 border-0 rounded'/><br/> */}


    <input type="submit" value="Registration" className="m-5 bg-primary text-light border-0 rounded"/><br/>

 
</form>
        </div>
    </div>
  )
}

export default Registration;