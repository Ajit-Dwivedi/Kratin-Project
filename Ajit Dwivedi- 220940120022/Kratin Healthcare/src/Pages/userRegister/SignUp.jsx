import {useState} from 'react';
import { Navigate, useNavigate,  useParams } from 'react-router-dom';
import Navbar from '../../Component/navbar/Navbar';
import "./SignUp.css";
import Featured from '../../Component/featured/Featured';




const SignUp = () => {

    const navigate = useNavigate();
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [bloodGroup, setbloodGroup] = useState('');
    const [age , setMyDate] = useState('');

   // const history = useHistory();
   // const { id } = useParams();

    
    function submitHandler(event){
        event.preventDefault();
        
       
            const obj = {
                 name,
                 email,
                 age,
                 bloodGroup,
                 phoneNumber,
               };

            console.log(obj);

           

           navigate('/login', { state: { obj} });          
   
    }


    function nameHandler (event){
        setName(event.target.value);
    }

    const handlePhoneNumberChange = (event) => {
        setPhoneNumber(event.target.value);
    };
    
    function ageHandler(event){
        setMyDate(event.target.value);
        
    }

    function bgHandler(event){
        setbloodGroup(event.target.value);
        
    }

    function emailHander(event) {
        setEmail(event.target.value);
    }


    return (
        <>
        
        <Navbar/>
        <div className="container">
            
            
		<h2 className='header2'>Registration Form</h2>
		<form className='signUpForm' onSubmit={submitHandler}>
			<label>Name:</label>
			<input type="text" id="name" name="name" placeholder="Enter your name" onChange={nameHandler} required/>
            <br></br>
            <span id="nameMsg"></span>
            <br></br>

			<label>Email:</label>
			<input type="email" id="email" name="email" placeholder="Enter your email" onChange={emailHander} required/>
                <br></br>

                <label>
        Phone Number:
        <input type="tel" value={phoneNumber} onChange={handlePhoneNumberChange} required />
                </label>
                <br />

			<label>Age:</label>
			<input type="number" id="age" name="age" onChange={ageHandler} required/>
                <br></br>
                <span id="dobMsg"></span>
               <br/><br/>
            <label>Blood Group:</label>
			<input type='text' id="bg" name="bg" onChange={bgHandler} required/>
                <br></br>
                <span id="bgMsg"></span>

            <br/><br/>
            <input type="submit" value="Save" />
                    
		</form>

        

      

        
            </div>
            </>
    )
 
    
}
export default SignUp;