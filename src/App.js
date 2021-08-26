import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Page2 from "./pages/Page2";
import OwnProfile from "./pages/OwnProfile";
import TutorProfile from "./pages/TutorProfile";

import "./App.module.css";
import TutorList from "./pages/TutorList";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/profile">
        <OwnProfile />
      </Route>
      <Route path="/tutorprofile">
        <TutorProfile />
      <Route path="/tutors">
        <TutorList />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default App;
