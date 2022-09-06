import { BrowserRouter, Routes, Route } from "react-router-dom";
import Breeds from "./components/Breeds";
import Fact from "./components/Fact";
import Facts from "./components/Facts";

function App() {
  return (
    <div className="container my-3">
      <h1>Cat Facts Explorer</h1>
      <p>This is a sample React application to learn about using Hooks, APIs, and Promises.</p>
      <hr />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Facts />}></Route>
          <Route path="/fact" element={<Fact />}></Route>
          <Route path="/breeds" element={<Breeds />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;