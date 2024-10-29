import { useState } from "react"
import Navbar from "./components/navbar/Navbar"
import AddLink from "./pages/Link/AddLink"

import "./App.css"
import Profile from "./pages/profile/Profile"

function App() {
  const [isActive, setIsActive] = useState(2)

  const handleIsActive = (id: number) => {
    setIsActive(id)
  }

  return (
    <div className="container">
        <Navbar onIsActive={handleIsActive}/>
        {
          isActive == 1 ? <AddLink /> : <Profile />
        }
    </div>
  )
}

export default App
