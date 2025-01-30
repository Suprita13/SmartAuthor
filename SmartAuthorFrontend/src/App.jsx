import "./App.css";
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SignUpPage from "./Pages/signupPage/signUpPage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import Header from "./components/Header/Header";
import SurveyForm from "./Pages/SurveyForm/SurveyForm";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/SignUp" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/surveyform" element={<SurveyForm />} />
        <Route path="/header" element={<Header />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
