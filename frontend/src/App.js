import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Footer } from "./Components";
import { Attendence, Error, Event, Home, Login } from "./Pages";
import { useSelector, useDispatch } from "react-redux";
import { getProfile } from "./Redux/Actions";
import { useEffect } from "react";
import { Spinner } from "@chakra-ui/react";
function App() {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token") ? true : false;
  const { isAuthenticated, loading } = useSelector((state) => state.auth);
  useEffect(() => {
    if (token && !isAuthenticated) {
      dispatch(getProfile());
    }
  }, [dispatch, token]);

  if (loading) {
    return (
      <div class="flex justify-center items-center min-h-screen">
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
        <Route path="login" element={<Login />} />
        <Route path="events" element={<Event />} />
        <Route path="attendance" element={<Attendence />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
