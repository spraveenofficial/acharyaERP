import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Footer } from "./Components";
import {
  AddEvent,
  Attendence,
  Classes,
  Error,
  Event,
  Home,
  Login,
  Profile,
} from "./Pages";
import { useSelector, useDispatch } from "react-redux";
import { getProfile } from "./Redux/Actions";
import { useEffect } from "react";
import { Spinner } from "@chakra-ui/react";
import {
  AdminAndModRoutes,
  GuestRoutes,
  ProtectedRoutes,
} from "./Utils/customRoutes";

function App() {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token") ? true : false;
  const { isAuthenticated, loading } = useSelector((state) => state.auth);
  useEffect(() => {
    if (token && !isAuthenticated) {
      dispatch(getProfile());
    }
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Spinner size="xl" />
      </div>
    );
  }
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<h1>About</h1>} />
        <Route path="contact" element={<h1>Contact</h1>} />
        <Route path="events" element={<Event />} />
        <Route path="*" element={<Error />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="attendance" element={<Attendence />} />
          <Route path="profile" element={<Profile />} />
          <Route path="class" element={<Classes />} />
        </Route>
        <Route element={<GuestRoutes />}>
          <Route path="login" element={<Login />} />
        </Route>
        <Route element={<AdminAndModRoutes />}>
          <Route path="/admin/add-event" element={<AddEvent />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
