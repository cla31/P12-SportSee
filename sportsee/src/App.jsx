import logo from './logo.svg'
import './App.css'
import { userDatas } from './Services/model.js'
import { userActivity } from './Services/model.js'
import { userAverageSessions } from './Services/model.js'
import { userPerformance } from './Services/model.js'

const App = () => {
  userDatas(12)
  userActivity()
  userAverageSessions()
  userPerformance()
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
