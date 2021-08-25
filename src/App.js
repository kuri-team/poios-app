import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Page2 from "./pages/Page2";
import "./App.module.css";
import Chatroom from "./pages/Chatroom";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/chatroom">
        <Chatroom />
      </Route>
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
