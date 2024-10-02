import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Dashboard from "./pages/admin/Dashboard";
import Livres from "./pages/admin/Livre";
import Membres from "./pages/admin/Membres";
import Message from "./pages/admin/Message";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/Livres" element={<Livres />}></Route>
          <Route path="/Membres" element={<Membres />}></Route>
          <Route path="/Message" element={<Message />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
