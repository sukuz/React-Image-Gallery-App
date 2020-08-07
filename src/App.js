import React from "react";
import "./style.css";
import Images from "./components/images";
import { Route, Switch } from "react-router-dom";

class App extends React.Component {
  pageNotFound() {
    return <h1>page not found</h1>;
  }

  render() {
    return (
      <div className="app-container">
        <Switch>
          <Route path="/Homepage" component={Images} />
          <Route path="" component={this.pageNotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
