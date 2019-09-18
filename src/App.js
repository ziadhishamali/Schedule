import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 

    }
  }
  render() { 
    return ( 
      <div>
        <BrowserRouter>
          <Route exact path='/Schedule/' component={Home} />
        </BrowserRouter>
      </div>
    );
  }
}
 
export default App;
