import { BrowserRouter, Routes, Route } from "react-router-dom";
import Fact from "./components/Fact";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/fact" element={<Fact />} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
