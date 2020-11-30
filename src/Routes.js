import React, { useEffect } from "react";
import { Route, useLocation } from "react-router-dom";
import SignIn from './components/SignIn/SignIn';
import Home from './components/Home/Home';
import CreateExam from './components/Exams/CreateExam/CreateExam';
import CreateSections from './components/Exams/CreateSections/CreateSections';
import ChooseFromQuestionBank from './components/Exams/CreateQuestions/ChooseFromQuestionBank/ChooseFromQuestionBank';
import CreateNewQuestion from './components/Exams/CreateQuestions/CreateNewQuestion/CreateNewQuestion';
import CompletedExam from './components/Exams/Completed/CompletedExam';

const Routes = props => {
  {/*const location = useLocation();

  useEffect(() => {
    props.setPathname(location.pathname);
  }, [location]);*/}

  return (
    <>
      <Route path="/sign-in" component={SignIn} />
      <Route path="/create-exam" component={CreateExam} />
      <Route path="/create-sections" component={CreateSections} />
      <Route path="/choose-from-question-bank" component={ChooseFromQuestionBank} />
      <Route path="/create-new-question" component={CreateNewQuestion} />
      <Route path="/completed-exam" component={CompletedExam} />
      <Route path="/home" component={Home} />
    </>
  );
}

export default Routes;
