import { BrowserRouter, Switch, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Home from "./pages/Home";
import Page2 from "./pages/Page2";
import "./App.module.css";

const App = () => (
  <BrowserRouter>
    <Nav />
    <Switch>
      <Route path="/page2">
        <Page2 />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default App;
