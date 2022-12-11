import { Route, Routes } from "react-router-dom";
import "./App.scss";
import { Camera } from "./components/camera/Camera";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<Camera />} />
      </Routes>
    </div>
  );
}

export default App;
