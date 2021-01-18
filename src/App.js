import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Dashboardbar from "./components/Dashboardbar";
import Selectbar from "./components/Selectbar";
import Grades from "./components/Grades";
import ExamsSummary from "./components/ExamsSummary";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Reviews from "./components/Reviews";
import CreateAssignements from "./components/CreateAssignements";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Dashboardbar />
        <Switch>
          <Route path="/exams">
            <Selectbar
              option1="Create Exams"
              option2="Exams Summary"
              component2={<ExamsSummary />}
            />
          </Route>
          <Route path="/assignements">
            <Selectbar
              option1="Create Assignements"
              option2="Reviews and Grades"
              option3="Grades"
              component1={<CreateAssignements />}
              component2={<Reviews />}
              component3={<Grades />}
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
