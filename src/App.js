import React, { Suspense } from "react";
import logo from "./logo.svg";
import "./App.css";
import Layout from "../src/components/layout";
import { BrowserRouter as Route, Switch } from "react-router-dom";
import NavBar from "../src/components/Navbar/navBar";

const TicketPage = React.lazy(() =>
  import("../src/components/Tickets/ticketPage")
);

function App() {
  return (
    <Layout>
      <Route>
        <NavBar />
        <Suspense fallback={<div>Loading....</div>}>
          <Switch>
            <TicketPage exact path="/tickets" />
          </Switch>
        </Suspense>
      </Route>
    </Layout>
  );
}

export default App;
