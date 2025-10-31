import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PresentationDeck from "./PresentationDeck.jsx";
import "./App.css";

function App() {
  return (
    <Router>
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<PresentationDeck />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
