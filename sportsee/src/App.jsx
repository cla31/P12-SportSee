import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import Page404 from './Pages/Page404'
import Home from './Pages/Home'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<Dashboard />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Router>
  )
}

export default App
