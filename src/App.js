import React, { useState } from "react";
import './App.scss';
import 'font-awesome/css/font-awesome.min.css'
import Header from './components/Header';
import Footer from './components/Footer';
import Banner from './components/Banner';
import About from './pages/About';
import Home from './pages/Home';
import Login from './pages/Login';
import Detail from './components/Home/Detail';

import {
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [item, setItem] = useState({});

  const sendDetailHome = (item) => {
    setItem(item)
  }


  // const [token, setToken] = useState(true);

  // if(!token) {
  //   return <Login />
  // }

  return (
    <div>
      <Header />
      <div className="main">
        <Switch>
          <Route exact path="/Login">
            <Login />
          </Route>
          <Route path="/About">
            <Banner />
            <About />
          </Route>
          <Route path="/:id">
            <Banner />
            <Detail item={item}/>
          </Route>
          <Route path="/">
            <Banner />
            <Home sendDetailHome={sendDetailHome}/>
          </Route>
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
