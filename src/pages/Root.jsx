import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Home} from "./Home";
import {Scoreboard} from "./Scoreboard";
import {Product} from "./Product";
import {Menu} from "./Menu";
import {Index} from "./heroes/Index";

export const Root = (props) => {
  return (
    <BrowserRouter>
      <Menu></Menu>
      <div className="container" style={{backgroundColor: '#ffffff'}}>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/heroes" component={Index}></Route>
          <Route path="/scoreboard" component={Scoreboard}></Route>
          <Route path="/product" component={Product}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  )
}
