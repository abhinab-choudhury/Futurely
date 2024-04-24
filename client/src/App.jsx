import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./components/Home"
import Programs from "./components/Programs"
import About from "./components/About"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/apps" element={<Programs />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App