import logo from './logo.svg';
import './App.css';
import Search from './components/Search'
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from './components/Nav'
import JobDetail from './components/JobDetail'
import React from "react";
import { Route } from "react-router-dom";
import Fav from "./components/Fav";

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Nav />
        <Route path="/" exact render={(props) => <Search {...props} />} />
        <Route path="/details/" render={(props) => <JobDetail {...props} />} />
        <Route path="/favourites/" exact component={Fav} />
      </div>
    );
  }
}

export default App;
