import { useState } from "react"
import Navbar from "./components/navbar/Navbar"
import AddLink from "./pages/Link/AddLink"
import Profile from "./pages/Profile/Profile"
import Preview from "./pages/Preview/Preview"

import "./App.css"

function App() {
  const [isActive, setIsActive] = useState(1);

  const handleIsActive = (id: number) => {
    setIsActive(id)
  };

  return (
    <div className="container">
        {isActive === 1 && <>
          <Navbar onIsActive={handleIsActive} isActive={isActive}/>
          <AddLink />
        </>}
        {isActive === 2 && <>
          <Navbar onIsActive={handleIsActive} isActive={isActive}/>
          <Profile />
        </>}
        {isActive === 3 && <Preview />}
    </div>
  )
};

export default App;
