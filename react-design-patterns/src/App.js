
import React,{useEffect} from "react";
import {BrowserRouter as Router, Route, Switch, NavLink } from "react-router-dom";
import {CSSTransition} from "react-transition-group";

import Exampleone from "./components/Exampleone"
import Exampletwo from "./components/Examplethree"
import Examplethree from "./components/Exampletwo"



import "./App.scss";
import "./assets/fonts/fonts.scss";


const routes = [
  {path: "/", name: "Example One", Component: Exampleone},
  {path: "/exampleTwo", name: "Example Two", Component: Exampletwo},
  {path: "/exampleThree", name: "Example Three", Component: Examplethree}
]



function App() {


  return (

  <div id="app-container">

      <div className="left-section">

      <Router>
      <NavLink className={`  nav-btn `} activeclass={"colorThis"}  to={'/'}>
         Example One
      </NavLink>
      <NavLink className={`  nav-btn `} activeclass={"colorThis"}  to={'/exampleTwo'}>
         Example Two
      </NavLink>
      <NavLink className={`  nav-btn `} activeclass={"colorThis"}  to={'/exampleThree'}>
         Example Three
      </NavLink>

        <main className="dashboard">

          {routes.map(({path, Component}) => (
            <Route key={path} path={path} exact>
              {({match}) => (

                <CSSTransition
                  key={path}
                  in={match != null}
                  timeout={1000}
                  classNames="page"
                  unmountOnExit
                  mountOnEnter

                >
                <div className='page'>
                  <Component/>
                </div>

                </CSSTransition>
              )}
            </Route>

          ))}

        </main>



        </Router>
        </div>


  </div>

  );
}

export default App;
