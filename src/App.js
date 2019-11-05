import React, { Component } from "react";
import "./App.css";
import Contacts from "../src/Components/contacts";
import Header from "../src/Components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider} from "./context";

class App extends Component {
  render() {
    return (
        <Provider>
      <div className="App">
        <Header title="Contact Manager" />
        <div className="container">
          <Contacts />
        </div>
      </div>
        </Provider>
    );
  }
}

export default App;
