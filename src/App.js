import "./App.css";
import { Switch, Route } from "react-router";
import CadUser from "./components/CadUser/cadUser";
import Card from "./components/Card/card";
import { useState } from "react";

function App() {
  const [dateForm, setDateForm] = useState("");
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact path="/">
            <CadUser setDateForm={setDateForm} />
          </Route>
          <Route exact path="/card">
            <Card dateForm={dateForm} />
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
