import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Page2 from "./pages/Page2";
import "./App.module.css";
import TutorList from "./pages/TutorList";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/tutorlist">
        <TutorList />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default App;
