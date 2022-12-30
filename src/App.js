import { Route, Routes } from 'react-router-dom'
import Home from './Components/Routes/Home/Home.component'
import Navigation from './Components/Routes/Navigation/Navigation.component'
import Authentication from './Components/Authentication/Authentication.component'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navigation/>}>
          <Route index element={<Home/>}/> 
          <Route path='auth' element={<Authentication/>}/>
        </Route>
        
      </Routes>
    </div>
  )
}

export default App