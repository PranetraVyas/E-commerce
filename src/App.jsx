import Home from "./pages/Home"
import Gift from "./pages/Gift";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Gifting-with-boat" element={<Gift/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App
