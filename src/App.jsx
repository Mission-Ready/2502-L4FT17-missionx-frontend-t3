import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Yellow/Home";
import LoginAndSignup from "./pages/Yellow/LoginAndSignup";
import Instruction from "./pages/Pink/Instructions";
import LearningObjective from "./pages/Pink/LearningObjective";
import MakeProject from "./pages/Pink/MakeProject";
import VideoTutorial from "./pages/Pink/VideoTutorial";
import StudentProfileLibrary from "./pages/Green/StudentProfileLibrary";
import StudentProfileViewer from "./pages/Green/StudentProfileViewer";
import ProjectSubmission from "./pages/Brown/ProjectSubmission";
import SubmitProject from "./pages/Brown/SubmitProject";
import StudentProfile from "./pages/Blue/StudentProfile";
import ProgressTracker from "./pages/Blue/ProgressTracker";
import HelpRequest from "./pages/Turqoise/HelpRequest";
import TeacherProfileViewer from "./pages/Turqoise/TeacherProfileViewer";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/loginAndSignup"
          element={<LoginAndSignup></LoginAndSignup>}
        ></Route>
        <Route
          path="/instruction"
          element={<Instruction></Instruction>}
        ></Route>
        <Route
          path="/learningObjective"
          element={<LearningObjective></LearningObjective>}
        ></Route>
        <Route
          path="/makeProject"
          element={<MakeProject></MakeProject>}
        ></Route>
        <Route
          path="/videoTutorial"
          element={<VideoTutorial></VideoTutorial>}
        ></Route>
        <Route
          path="/studentProfileLibrary"
          element={<StudentProfileLibrary></StudentProfileLibrary>}
        ></Route>
        <Route
          path="/studentProfileViewer"
          element={<StudentProfileViewer></StudentProfileViewer>}
        ></Route>
        <Route
          path="/projectSubmission"
          element={<ProjectSubmission></ProjectSubmission>}
        ></Route>
        <Route
          path="/submitProject"
          element={<SubmitProject></SubmitProject>}
        ></Route>
        <Route
          path="/progressTracker"
          element={<ProgressTracker></ProgressTracker>}
        ></Route>
        <Route
          path="/studentProfile"
          element={<StudentProfile></StudentProfile>}
        ></Route>
        <Route
          path="/helpRequest"
          element={<HelpRequest></HelpRequest>}
        ></Route>
        <Route
          path="/teacherProfileViewer"
          element={<TeacherProfileViewer></TeacherProfileViewer>}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
