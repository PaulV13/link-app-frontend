import AddLink from "./pages/Link/AddLink"
import Profile from "./pages/Profile/Profile"
import Preview from "./pages/Preview/Preview"

import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  return (
    <div className="container">
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<AddLink />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/preview" element={<Preview />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
};

export default App;
