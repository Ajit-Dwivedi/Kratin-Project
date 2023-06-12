import { Link, useNavigate } from "react-router-dom"
import "./featured.css"
import img1 from "./food-alergy.jpg"
import img2 from "./sport-diet.jpg"
import img3 from "./Thyroid.jpg"
import img4 from "./weight-management.jpg"
import img5 from "./Diabetes_Reversal.jpg"
import img6 from "./pcos.jpg"


const Featured = () => {
     
    return(
        <div className="featured">

            <div>
            <div className="featuredItem" >
               <img src={img1} alt="preview Not Available" className="featuredImg" height={200} width={200}/>
                <div className="featuredTitle">
            
                    <h2>Food Allergy</h2>

                    

                </div>
                </div>
            <div className="featuredItem" >
               <img src={img2} alt="preview Not Available" className="featuredImg" height={200} width={200}/>
                <div className="featuredTitle">
                    
                    <h2>Sports Nutrition Diet</h2>
                </div>
            </div>
            

            </div> 

            <div>
            <div className="featuredItem" >
               <img src={img3} alt="preview Not Available" className="featuredImg" height={200} width={200}/>
                <div className="featuredTitle">
            
                    <h2>Thyroid Control</h2>
                </div>
                </div>
            <div className="featuredItem" >
               <img src={img4} alt="preview Not Available" className="featuredImg" height={200} width={200}/>
                <div className="featuredTitle">
                    
                    <h2>Weight Management</h2>
                </div>
            </div>
            

            </div> 

            <div>
            <div className="featuredItem" >
               <img src={img5} alt="preview Not Available" className="featuredImg" height={200} width={200}/>
                <div className="featuredTitle">
            
                    <h2>Diabetes Reversal</h2>
                </div>
                </div>
            <div className="featuredItem" >
               <img src={img6} alt="preview Not Available" className="featuredImg" height={200} width={200}/>
                <div className="featuredTitle">
                    
                    <h2>PCOS Management</h2>
                </div>
            </div>
            

            </div> 

            

            


        </div>
    )
}
export default Featured;