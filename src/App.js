import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddPlayer from "./components/add.component";
import PlayersList from "./components/list.component";
import TopPlayers from "./components/top-players.component";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/players" className="navbar-brand">
            GameWeb App
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/players"} className="nav-link">
                Players
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Novo GamePlay
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/top-players"} className="nav-link">
                Top Players
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/players"]} component={PlayersList} />
            <Route exact path="/add" component={AddPlayer} />
            <Route exact path="/top-players" component={TopPlayers} />            
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
