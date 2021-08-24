import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Page2 from "./pages/Page2";
import OwnProfile from "./pages/OwnProfile";
import TutorProfile from "./pages/TutorProfile";

import "./App.module.css";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/studentprofile">
        <OwnProfile />
      </Route>
      <Route path="/tutorprofile">
        <TutorProfile />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default App;
