import React, { Component } from 'react';
import Navbar from './components/Navbar'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Home from './components/Home'
import CreateTopic from './components/CreateTopic'
import TopicDetails from './components/TopicDetails'
import { BrowserRouter, Route, Switch } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>

            <Route exact path='/' component={Home} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/create' component={CreateTopic} />
            <Route patch='/topic/:id' component={TopicDetails} />

          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
