import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import * as helpers from "./utils/authsHelpers";
import { Auth } from "./components/Auth";

const defMonth = helpers.formatMonth(new Date());

function App() {
  const [month, setMonth] = useState(defMonth);
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route component={ErrorPage} />
      </Switch>

      <Auth />
    </div>
  );
}

export default App;
