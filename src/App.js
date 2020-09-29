import React, {Component} from 'react';
import Navigation from './components/Navigation/Navigation';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import Home from './components/Home/Home';
import './App.css';


const initialState = {
  route: 'signin',
  isSignedIn: false,
  user: {
    id: '',
    name: '',
    email: '',
    joined: ''
  },
  total: 0
}

class App extends Component {
  constructor(){
    super();
    this.state = initialState;
  }

  loadUser = (data) => {
    this.setState({ user: {
      id: data.id,
      name: data.name,
      email: data.email,
      joined: data.joined
    }})
  }

onRouteChange = (route) => {
  if(route === 'signout'){
    this.setState(initialState)
  } else if(route === 'home'){
    this.setState({isSignedIn: true});
    console.log(this.state.isSignedIn);
  }
  this.setState({route: route});
}

  render(){
    const {isSignedIn, route} = this.state;
    return (
     <div className="App">
       <Navigation onRouteChange={this.onRouteChange} isSignedin={isSignedIn}/>
     { route === 'home'
     ? <div>
       <Home/>
      </div>
    : (
      route   === 'signin'
      ? <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
      : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
    )
     }
     </div>
   );
  }
}


{/*signInOrNot = (route) => {
  switch(route){
     case 'home':
        return <Home/>;
      case 'signing':
        return <Signin/>;
      default:
        return <Register/>;
   }
}*/}


{/* "Welcome (name)" and title to the right, "Subscriptions:
and top-down components with name, price, and date of pay"
return (all this ??) do I use return or break? react  */}


export default App;
