import React from "react";
import Header from "../../Component/header/Header";
import Navbar from "../../Component/navbar/Navbar";
import Featured from "../../Component/featured/Featured";
import './home.css'
import MailList from "../../Component/mailList/MailList";
import Footer from "../../Component/footer/Footer";
import Slider from "../../Component/slider/Slider";
import OurMission from "../../Component/featuredProperties/ourmission";

const Home=() => {
    return (
        <div>
           
               <Slider/>
            <div>
                <Navbar></Navbar>
                <Header></Header>
                <div className="homeContainer">
                   <Featured/>
                   
                   <h1 className="homeTitle">Our Mission</h1>
                       
                <OurMission></OurMission>
                <MailList></MailList>
               <Footer></Footer>
                
                
                </div>
                
            </div>
        </div>
    )
}
export default Home