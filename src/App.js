import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./screen/register";
import Login from "./screen/login";
import Home from "./screen/home";
import ProtectedRoute from "./component/ProtectedRoute";
import PublicRoute from "./component/PublicRoute";
import CreateProject from "./screen/CreateProject";
import PopupNotification from "./component/PopupNotification";
import CreateTask from "./screen/CreateTask";
import Project from "./screen/Project";

function App() {
  return (
    <div className="App">
      <PopupNotification />
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route element={<ProtectedRoute />}>
              <Route index element={<Home />} />
              <Route path="create-project" element={<CreateProject />} />
              <Route path="project/:id" element={<Project />} />
              <Route path="create-task" element={<CreateTask />} />
            </Route>
            <Route element={<PublicRoute />}>
              <Route path="register" element={<Register />} />
              <Route path="login" element={<Login />} />
            </Route>

            {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
