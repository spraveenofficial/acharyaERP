import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./Components";
import { Error, Event, Home, Login } from "./Pages";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/contact" element={<h1>Contact</h1>} />
        <Route path="login" element={<Login />} />
        <Route path="events" element={<Event />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
