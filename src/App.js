import './App.css';
import React from "react";
import {Route, Routes} from "react-router-dom";
import MainDashboard from "./components/MainDashboard";
import StudentDashboard from './components/StudentDashboard';
import TeacherDashboard from './components/Teacher/TeacherDashboard';
import OnlineTestPlatform from './components/OnlineTestPlatform';
import GettingStarted from "./components/Teacher/GettingStarted";
function App() {
  return (
      <Routes>
        <Route path="/" element = {<MainDashboard />} />
        <Route path="/student-dashboard" element = {<StudentDashboard />} />
        <Route path="/teacher-dashboard" element = {<TeacherDashboard />} />
        <Route path="/online-test-platform" element = {<OnlineTestPlatform />} />
        <Route path="/getting-started" element = {<GettingStarted />} />
      </Routes>
  );
}

export default App;
