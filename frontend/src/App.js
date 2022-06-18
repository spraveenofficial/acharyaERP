import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./Components";
import { Attendence, Error, Event, Home, Login } from "./Pages";
import { useSelector, useDispatch } from "react-redux";
import { getProfile } from "./Redux/Actions";
import { useEffect } from "react";
function App() {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token") ? true : false;
  const { isAuthenticated } = useSelector((state) => state.auth);
  useEffect(() => {
    if (token && !isAuthenticated) {
      dispatch(getProfile());
    }
  }, [dispatch, token]);
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<h1>About</h1>} />
        <Route path="contact" element={<h1>Contact</h1>} />
        <Route path="login" element={<Login />} />
        <Route path="events" element={<Event />} />
        <Route path="attendence" element={<Attendence />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
