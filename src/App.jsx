import MyForm from './form'
import './index.css'
import MyForm2 from './form2'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MyForm3 from './form3'

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/Form1" element={<MyForm />}></Route>
        <Route exact path="/Form2" element={<MyForm2 />}></Route>
        <Route exact path="/" element={<MyForm3/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
