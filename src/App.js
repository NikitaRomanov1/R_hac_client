import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./pages/Home";
import { BaseLayout } from "./layouts/Base";
import PostIdPage from "./pages/PostIdPage";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <BaseLayout>
            <Route path="/" exact component={Home} />
            <Route exact path="/companies/:INN">
              <PostIdPage />
            </Route>
            <Redirect to="/" />
          </BaseLayout>
        </Switch>
      </Router>
    </>
  );
}

export default App;
