import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Page2 from "./pages/Page2";
import Login from "./pages/Login";
import "./App.module.css";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/page2">
        <Page2 />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default App;
