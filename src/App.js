import { Route, Routes } from 'react-router-dom'
import Home from './Components/Routes/Home/Home.component'
import Navigation from './Components/Routes/Navigation/Navigation.component'
import SignIn from './Components/Sign-in/Sign-in.component'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navigation/>}>
          <Route index element={<Home/>}/> 
          <Route path='signIn' element={<SignIn/>}/>
        </Route>
        
      </Routes>
    </div>
  )
}

export default App