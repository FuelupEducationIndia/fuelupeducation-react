import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import "./style/App.scss";
import EditPage from "./pages/EditPage";
import { Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path={["/","/editpage/:signways"]}>
          <EditPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
