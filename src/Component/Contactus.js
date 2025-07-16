import { useState } from "react";

function ContactUs(){

    const[formdata,setFormdata] = useState({
        "fname":'',
        "lname":'',
        "email":'',
        "password":'',
        "address":'',
        "subscribe":false
    });
    const [errors,setErrors] = useState({});

    const onhangehandler = (event)=>{
           setFormdata({
             ...formdata,
            [event.target.name]: event.target.type === 'checkbox'?event.target.checked : event.target.value
           })
    }
       
    const onhandlesubmit = (event)=>{
        event.preventDefault();
        console.log(formdata);
        setErrors({});
        if(formdata.fname === '' || formdata.fname === null || !isNaN(formdata.fname)){
             setErrors({
                err1:"first name cannot be blank or number"
             })
        }
       else if(formdata.password.length >=3  || formdata.password.length <=9){
             setErrors({
                err1:"password sould be in range of 3 to 9"
             })
        }
    }
    return(<>
    <p>contact us</p>
    <form onSubmit={onhandlesubmit}>
        <input 
        name="fname"
        value={formdata.fname}
        onChange={onhangehandler}/>
        {errors && <span style={{color:'red'}}>{errors.err1}</span>}
        <br/><br/>

         <input
         name="lname"
         value={formdata.lname}
          onChange={onhangehandler}
         /><br/><br/>

          <input 
          name="email"
          value={formdata.email}
          onChange={onhangehandler}
          /><br/><br/>

           <input
           name="password"
           value={formdata.password}
            onChange={onhangehandler}
           />
           {errors && <span style={{color:'red'}}>{errors.err1}</span>}<br/><br/>

           <textarea
           rows={5}
           cols={10}
           name="address"
           value={formdata.address}
           onChange={onhangehandler}/>
           <br/><br/>

           <select
           name="country"
           value={formdata.country}
           onChange={onhangehandler}
           >
            
            <option value="USA">USA</option>
             <option value="UK">UK</option>
              <option value="INDIA">INDIA</option>
               <option value="JAPAN">JAPAN</option>
               </select>
               <br/><br/>

               <input
               type="checkbox"
               name="subscribe"
            //    value={formdata.subscribe}
            checked={formdata.subscribe}
               onChange={onhangehandler}
               /><br/><br/>

           <button type="submit">Submit</button>
           <p>{JSON.stringify(formdata)}</p>
    </form>
    </>);
}
export default ContactUs;