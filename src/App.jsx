import Home from "./pages/Home"
import Gift from "./pages/Gift";
import Corp from "./pages/Corp";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Gifting-with-boat" element={<Gift/>}/>
        <Route path="/Corporate-Orders" element={<Corp/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App
