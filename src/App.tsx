import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { FormikComponent } from "./components/Formik";
import { ErrorPage } from "./components/NotFound";

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route
            path="/"
            render={(props) => <FormikComponent {...props} />}
          />
          <Route path="*">
            <ErrorPage />
          </Route>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
