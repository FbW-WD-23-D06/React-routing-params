import { Link } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/user/1'>User 1</Link>
        </li>
        <li>
          <Link to='/user/2'>User 2</Link>
        </li>
      </ul>
      
    </>
  )
}

export default App
