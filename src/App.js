import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Detail from "./containers/Detail";
import List from "./containers/List";
import Search from "./containers/Search/search";
import Contact from "./containers/Contact";

const App = (props) => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/detail/:id" component={Detail} />
      <Route path="/list/:id" component={(props) => <List {...props} />} />
      <Route path="/search/:id" component={(props) => <Search {...props} />} />
      <Route path="/contact" component={Contact} />
    </Switch>
  );
};

export default App;
