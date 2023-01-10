import { Route, Routes } from 'react-router-dom'
import Home from './Components/Routes/Home/Home.component'
import Navigation from './Components/Routes/Navigation/Navigation.component'
import Authentication from './Components/Authentication/Authentication.component'
import Shop from './Components/Routes/Shop/Shop.component'
import Checkout from './Components/Checkout/Checkout.component'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navigation/>}>
          <Route index element={<Home/>}/> 
          <Route path='/shop' element={<Shop/>}/>
          <Route path='auth' element={<Authentication/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
        </Route>
        
      </Routes>
    </div>
  )
}

export default App