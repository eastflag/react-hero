import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Heroes} from "./Heroes";
import {Home} from "./Home";
import {Scoreboard} from "./Scoreboard";
import {Product} from "./Product";

export const Root = (props) => {
  return (
    <BrowserRouter>
      <p>공통메뉴 영역</p>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/heroes" component={Heroes}></Route>
        <Route path="/scoreboard" component={Scoreboard}></Route>
        <Route path="/product" component={Product}></Route>
      </Switch>
    </BrowserRouter>
  )
}
