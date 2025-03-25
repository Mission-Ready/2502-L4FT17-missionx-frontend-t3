import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Yellow/Home/Home";
import LoginAndSignup from "./pages/Yellow/LoginAndSignup/LoginAndSignup";
import Instruction from "./pages/Pink/Instructions/Instructions";
import LearningObjective from "./pages/Pink/LearningObjective/LearningObjective";
import MakeProject from "./pages/Pink/MakeProject/MakeProject";
import VideoTutorial from "./pages/Pink/VideoTutorial/VideoTutorial";
import ProjectLibrary from "./pages/Green/ProjectLibrary/ProjectLibrary";
import StudentProfileViewer from "./pages/Green/StudentProfileViewer/StudentProfileViewer";
import ProjectSubmission from "./pages/Brown/ProjectSubmission/ProjectSubmission";
import SubmitProject from "./pages/Brown/SubmitProject/SubmitProject";
import StudentProfile from "./pages/Blue/StudentProfile/StudentProfile";
import ProgressTracker from "./pages/Blue/ProgressTracker/ProgressTracker";
import HelpRequest from "./pages/Turqoise/HelpRequest/HelpRequest";
import TeacherProfileViewer from "./pages/Turqoise/TeacherProfileViewer/TeacherProfileViewer";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home></Home>}></Route>
        <Route path="/" element={<Home></Home>}></Route>
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
          path="/ProjectLibrary"
          element={<ProjectLibrary></ProjectLibrary>}
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
