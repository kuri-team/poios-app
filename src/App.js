import { useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { PagesContext } from "./Pages";
import "./App.module.css";

const App = () => {
  const pages = useContext(PagesContext);

  return (
    <BrowserRouter>
      <Switch>
        {pages.map((page, key) => (
          <Route key={key} path={page.path}>
            {page.reactComponent}
          </Route>
        ))}
      </Switch>
    </BrowserRouter>
  );
};

export default App;
