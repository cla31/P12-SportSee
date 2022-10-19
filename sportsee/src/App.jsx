import './App.css'
// import { userDatas } from './Services/model.js'
// import { userActivity } from './Services/model.js'
// import { userAverageSessions } from './Services/model.js'
// import { userPerformance } from './Services/model.js'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Dashboard from './Pages/Dashboard'

const App = () => {
  // userDatas()
  // userActivity()
  // userAverageSessions()
  // userPerformance()
  return (
    <Router>
      <Routes>
        <Route path="/" />
        <Route path="/user/:id" element={<Dashboard />} />
        {/* <Route path="*" element={<Error/>} /> */}
      </Routes>
    </Router>
  )
}

export default App
