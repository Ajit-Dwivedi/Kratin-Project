
import Navbar from "../../Component/navbar/Navbar"
import LoginForm from "./LoginForm"
import { useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


const Login = () => {

  const location = useLocation();
  const obj = location.state?.obj;
  console.log(obj);


  if (!obj) {
    return <div>No user data received</div>;
  }

  // Access user data and render accordingly
  return (
    <div>
      <h1 style={{textAlign :"center",color:"rgb(2, 52, 92)"}}>Hello {obj.name}, Welcome to Kratin HealthCare</h1>



             <div className='ontainer'>
  <table className='table table-bordered table-striped' >
  <thead style={{backgroundColor:"darkgray"}}>
    <tr>
      <th scope="col" rowspan="2">Day</th>
                <th  scope="col" colspan="3">Food</th>
                <th  scope="col" colspan="3">Medicine</th>
    </tr>
       <tr >
                <th>Breakfast</th>
                <th>Lunch</th>
                <th>Dinner</th>
                <th>Morning</th>
                <th>Afternoon</th>
                <th>Evening</th>
            </tr>
  </thead>
  <tbody>
            <tr >
                <td scope="row" class="day">Monday</td>
                <td>Apple ,Buttermilk</td>
                <td>Mixed Sambar , idli</td>
                <td>Cut Fruits, Buttermilk </td>
                <td>Lisinopril</td>
                <td>Metformin</td>
                <td>Azithromycin</td>
            </tr>
            <tr >
                <td class="day">Tuesday</td>
                <td>Mixed Sambar , idli</td>
                <td>Mixed Sambar , idli</td>
                <td>Cut Fruits, Buttermilk</td>
                <td>Azithromycin</td>
                <td>Metformin</td>
                <td>Lisinopril</td>
            </tr>
            <tr >
                <td class="day">Wednesday</td>
                <td>Fruit and Nuts Yogurt Smoothie</td>
                <td>Lentil Curry (0.75 bowl) </td>
                <td>Palak Chole (1 bowl)</td>
                <td>Lisinopril</td>
                <td>Azithromycin</td>
                <td>Lisinopril</td>
            </tr>
            <tr >
                <td class="day">Thursday</td>
                <td>Egg Omelette</td>
                <td>Steamed Rice</td>
                <td>Methi Rice</td>
                <td>Omeprazole</td>
                <td>Amlodipine besylate</td>
                <td>-</td>
            </tr>
            <tr >
                <td class="day">Friday</td>
                <td>Lentil Curry </td>
                <td>Palak Chole </td>
                <td>Steamed Rice</td>
                <td>-</td>
                <td>Omeprazole</td>
                <td>Metformin</td>
            </tr>
            <tr >
                <td class="day">Saturday</td>
                <td>Steamed Rice</td>
                <td>Palak Chole</td>
                <td>Steamed Rice</td>
                <td>-</td>
                <td>-</td>
                <td>Azithromycin</td>
            </tr>
            </tbody>
</table>
 </div>

    </div>
  );
    


};

export default Login;