import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Heroes} from "./heroes/Heroes";
import {Home} from "./Home";
import {Scoreboard} from "./Scoreboard";
import {Product} from "./Product";
import {Menu} from "./Menu";
import {Hero} from "./hero/Hero";

export const Root = (props) => {
  return (
    <BrowserRouter>
      <Menu></Menu>
      <div className="container" style={{backgroundColor: '#ffffff'}}>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/heroes" component={Heroes}></Route>
          <Route path="/hero/:id" component={Hero}></Route>
          <Route path="/scoreboard" component={Scoreboard}></Route>
          <Route path="/product" component={Product}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  )
}
