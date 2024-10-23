import { useState } from "react"
import Navbar from "./components/navbar/Navbar"
import AddLink from "./pages/Link/AddLink"

import "./App.css"

function App() {
  const [isActive, setIsActive] = useState(1)

  const handleIsActive = (id: number) => {
    setIsActive(id)
  }

  return (
    <div className="container">
        <Navbar onIsActive={handleIsActive}/>
        {
          isActive == 1 ? <AddLink /> : null
        }
    </div>
  )
}

export default App
