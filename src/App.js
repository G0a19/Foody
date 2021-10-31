import { Fragment } from "react";
import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";

import MainHome from "./Pages/Home/MainHome";
import Contact from "./Pages/Contact/Contact";

function App() {
  return (
    <Fragment>
      <Route path="/" exact>
        <MainHome />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
    </Fragment>
  );
}

export default App;
