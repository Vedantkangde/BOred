import React, {Component} from "react";
import Teammembers from "./Teammembers";
import Header from"./Header";
import image from '../assets/img/header-bg.jpg';
import img1 from "../assets/img/team/1.jpg";
import img2 from "../assets/img/team/2.jpg";
import img3 from "../assets/img/team/3.jpg";

const team=[

    {title:'Kay Garland',subtitle:'Lead Designer',image:img1},
    {title:'Larry Parker',subtitle:'Lead Marketer',image:img2},
    {title:'Diana Peterson',subtitle:'Lead Developer',image:img3},
];

class Team extends Component{



    render(){



        return(

            <div>
  
            <section class="page-section bg-light" id="team">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">Our Amazing Team</h2>
                    <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <div class="row">
                    
                    
                    {team.map((person,index) =>{

                        return <Teammembers {...person} key={index} />
                    })
                }


                </div>
                <div class="row">
                    <div class="col-lg-8 mx-auto text-center"><p class="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p></div>
                </div>
            </div>
        </section>
        </div>
        )


    }
}

export default Team;