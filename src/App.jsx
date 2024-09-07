import { BrowserRouter, Routes, Route } from 'react-router-dom'

import {
  HomePage,
  MathSixThGradePage
} from "./routes/publicRoute.js"

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/enginnering/programming" element={<MathSixThGradePage/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
