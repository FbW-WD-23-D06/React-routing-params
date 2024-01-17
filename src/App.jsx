import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import UserDetails from './pages/UserDetails'

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
      <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/user/:userId' element={<UserDetails />}/>

      </Routes>
      
    </>
  )
}

export default App
