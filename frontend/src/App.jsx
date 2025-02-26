//

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Roadmap from "./pages/RoadmapLayout";
import Home from "./pages/Home";
import PublicLayout from "./layouts/public-layout";
import AuthLayout from "./layouts/AuthLayout";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import ProctedRoutes from "./layouts/ProctedRoutes";
import MainLayout from "./layouts/MainLayout";
import RoadmapLayout from "./pages/RoadmapLayout";
import AboutPage from "./pages/AboutPage";
import ResumeEditor from "./pages/ResumeBuilder/ResumeEditor";
import ResumeBuilder from "./pages/ResumeBuilder/ResumeBuilder";
import TemplateSelection from "./pages/ResumeBuilder/TemplateSelection";
import PreviewResume from "./pages/ResumeBuilder/PreviewResume";
import ResumeLanding from "./pages/ResumeLanding";
import ResumeAnalysis from "./components/resume/ResumeAnalysis";
import InterviewDashboard from "./components/interviewComponent/InterviewDashboard";
import Interview from "./components/interviewComponent/Interview";
import Start from "./components/interviewComponent/Start";
import { Toaster } from "@/components/ui/sonner"
import Feedback from "./components/interviewComponent/Feedback";
import EditProfile from "./components/profile/EditProfile";
import EditMentorProfile from "./components/profile/EditMentorProfile";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* public routes */}
          <Route element={<PublicLayout />}>
            <Route index element={<Home />} />
          </Route>

          {/* authentication layout */}
          <Route element={<AuthLayout />}>
            <Route path="/signin/*" element={<SignInPage />} />
            <Route path="/signup/*" element={<SignUpPage />} />
          </Route>

          {/* protected routes */}
          <Route
            element={
              <ProctedRoutes>
                <MainLayout />
              </ProctedRoutes>
            }
          >
            <Route path="/roadmap" element={<RoadmapLayout />} />
            <Route path="/AboutPage" element={<AboutPage />} />
            <Route path="/ResumeLanding" element={<ResumeLanding />} />
            <Route path="/ResumeEditor" element={<ResumeEditor />} />

            {/* Resume Builder Routes */}
            <Route path="/resume/builder/*" element={<ResumeBuilder />} />
            <Route path="/resume/templates" element={<TemplateSelection />} />
            <Route path="/resume/preview" element={<PreviewResume />} />
            <Route path="/resume/analysis" element={<ResumeAnalysis />} />

            {/* Interview Routes */}
            <Route path="/interviewDashboard"  element={<InterviewDashboard />} />
            <Route path="/interviewDashboard/interview/:id"  element={<Interview />} />
            <Route path="/interviewDashboard/interview/:id/start"  element={<Start />} />
            <Route path="/interviewDashboard/interview/:id/feedback"  element={<Feedback />} />

            {/* Profile */}
            <Route path="/edit-profle"  element={<EditProfile />} />
            <Route path="/be-mentor"  element={<EditMentorProfile />} />


          </Route>
        </Routes>

        <Toaster/>
      </Router>
    </>
  );
}

export default App;
