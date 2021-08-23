import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Page2 from "./pages/Page2";
import "./App.module.css";
import StudentProfile from "./pages/StudentProfile";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/profile">
        <StudentProfile />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default App;
