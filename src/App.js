
import { Component } from 'react';
import PageWrapper from './components/PageWrapper'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Services from "./components/common/Services";
import Portfolio from "./components/common/Portfolio";
import Team from "./components/common/Team"
import Contact from "./components/pages/Contact"
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

class App extends Component{


    render(){

      return(

        <Router>
        <PageWrapper>

          

            <Route
            exact={true}
            path="/"
            component={Home}/>

            <Route
            
            path="/about"
            component={About}/>

            <Route
            
            path="/services"
            component={Services}/>
 
               <Route
            
            path="/portfolio"
            component={Portfolio}/>

               <Route
            
            path="/team"
            component={Team}/>

<Route
            
            path="/contact"
            component={Contact}/>
 
 


            
         
          </PageWrapper>
          </Router>

      );
    }


}
export default App;
