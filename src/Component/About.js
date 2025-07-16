import { useRef, useState } from "react";

function About(){

    const[username,setUsername] = useState('');
     const onhandlesubmit = (event)=>{
        event.preventDefault();
        // console.log(username);//object of input
        // console.log(username.current.value);//data
    }
    const onhandlchange = (event)=>{
          setUsername(event.target.value);
    }
    

    return(<>
    <p>About us page</p>
    <form onSubmit={onhandlesubmit}>
        <input
        name="username"
        value={username}
             onChange={onhandlchange}
             />
        
        <button type="submit">Submit</button>
    </form>
    </>);
}
export default About;