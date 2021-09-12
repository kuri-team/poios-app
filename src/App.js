import { useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { DataProvider } from "./GlobalState";

import { PagesContext } from "./Pages";
import "./App.module.css";

const App = () => {
  const pages = useContext(PagesContext);

  return (
    <DataProvider>
      <BrowserRouter>
        <Switch>
          {pages.map((page, key) => (
            <Route key={key} path={page.path}>
              {page.reactComponent}
            </Route>
          ))}
        </Switch>
      </BrowserRouter>
    </DataProvider>
  );
};

export default App;
