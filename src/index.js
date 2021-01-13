import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router, // we are aliasing this module for a cleaner call
  Route,
  Link
  // etc.
} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import './index.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

// Home component

class Home extends Component {
  render(){
    return(
      <div class='home'>
        <h1>React Router Restaurant</h1>
        <h4>Serving up URLs like Momma used to make!</h4>
        <img src="https://i0.wp.com/68.media.tumblr.com/159d31bca61108d5bd1a8dedf5c14dfe/tumblr_otlasg917I1ql7xb0o6_1280.gif?" />
      </div>
    );
  }
}

// About component

class About extends Component {
  render(){
    return(
      <div>
        <h1>About Us</h1>
        <p>We here at the Triple-R love fresh URLs, especially ones tied to awesome React Components.</p>
        <p>It's even better when you can switch between those URLs with ease and share them with friends and family</p>
      </div>
    );
  }
}

// Menu component

class Menu extends Component {
  render(){
    return(
      <div>
        <h1>Menu</h1>
        <p>Check out our amazing 24/7 menu:
          <ul>
            <li>Lazy Loading</li>
            <li>Dynamic Route Matching</li>
            <li>Location Transition Handling</li>
          </ul>
        </p>
      </div>
    );
  }
}

class Location extends Component {
  render (){
    return(
      <div>
       <button
    type="button"
    onClick={(e) => {
      e.preventDefault();
      window.location.href='http://google.com/maps';
      }}
> Click for map</button>
      </div>
    )
  }
}

class List extends Component {
  constructor(){
    super();
    this.state={
      mealList:[],
      mealName:""
    }
  }
  handleNameInput=(e)=>{
    this.setState({mealName:e.target.value});
  }
  handleClick=()=>{
    let mealObj = {mealName:this.state.mealName};
    this.setState({mealList: [...this.state.mealList, mealObj], mealName:""});
  }
  render(){
    let mealElementArr = this.state.mealList.map((meal, index)=>{
      return(
        <li key={index}>
          <div>{meal.mealName}</div>
        </li>
      )
    })
    return(
      <div>
        List
        <ul>
            <li>Breakfast</li>
            <li>Lunch</li>
            <li>Dinner</li>
            
            {mealElementArr}    
        <input value={this.state.mealName} 
          onChange={this.handleNameInput} 
          placeholder="Meal Name"/>
            <button onClick={this.handleClick}>Add Meal</button>
           
            
        </ul>
      </div>
    )
  }
}


class Events extends Component{
  render (){
    return(
      <div>

      </div>
    )
  }
}
class Navigation extends Component {
  render(){
    return(
      // <div className="nav">
      //   <Link to="/">Home</Link> | 
      //   <Link to="menu">Menu</Link> | 
      //   <Link to="about">About</Link> | 
      //   <Link to="location">Location</Link> | 
      //   <Link to="list">List</Link> | 
      //   <Link to="events">Events</Link>
      // </div>

<Navbar bg="light" expand="lg">
  
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      
      <Nav.Link href="/">Home</Nav.Link> | 
        <Nav.Link href="menu">Menu</Nav.Link>  |
       <Nav.Link href="about">About</Nav.Link> |
        <Nav.Link href="location">Location</Nav.Link> | 
         <Nav.Link href="list">List</Nav.Link>  |
         <Nav.Link href="events">Events</Nav.Link> |

    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>

    );
  }
}



class Routes extends Component {
  render(){
    return(
      <Router>
        <div>
          <Navigation />
          <hr />
          <Route name="Home" exact path="/" component={Home}/>
          <Route name="Menu" path="/menu" component={Menu}/>
          <Route name="About" path="/about" component={About} />
          <Route name="Location" path="/location" component={Location}/>
          <Route name="List" path="/list" component={List}/>
          <Route name="Events" path="/events" components={Events}/>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<Routes />, document.getElementById('root'));

