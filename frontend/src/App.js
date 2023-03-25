import { BrowserRouter, Route, Routes } from "react-router-dom";
import CallList from "./pages/CallList";
import Home from "./pages/Home";
import Meeting from "./pages/Meeting2";
import Recording from "./pages/Recording";


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/calllist' element={<CallList />} />
        <Route path='/meeting' element={<Meeting />} /> 
        <Route path="/recording" element={<Recording />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
