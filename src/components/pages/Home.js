import React,{Component  } from "react";
import   Header from "../common/Header";
import image from "../assets/img/header-bg.jpg"
import Services from '../common/Services'
import Portfolio from '../common/Portfolio'
import Team from '../common/Team';
import Contact from '../pages/Contact';

class Home extends Component{
  

    render(){

      return(
             
           <div>
       <Header
       
        title="welcome to our Studio!"
        subtitle="ITS NICE TI MEET YOU"
        buttonText="Tell me more"
        link="/services"
        showbutton={true}
        image={image}

       
       />

       <Services/>
       <Portfolio/>
       <Team/>
       <Contact/>
       
       </div>
      )

    }

}
export default Home;