// import {BrowserRouter,Routes,Route,useNavigate} from 'react-router-dom'
// import Dashboard from './components/Dashboard'
// import Login from './components/Login'
// import Home from './components/Home'
// import Appbar from './components/Appbar'


// function App() {
//   return (
//     <>
//       <BrowserRouter>
//         <Appbar/>
//         <Routes>
//           <Route path='/dashboard' element=<Dashboard/> />
//           <Route path='/' element=<Home/> />
//           <Route path='/login' element=<Login/> />
//         </Routes>
//       </BrowserRouter>
//     </>
//   )
// }

// export default App




// using lazy loading
// we can also import lazy from react as well and use it directly

import {BrowserRouter,Routes,Route,useNavigate} from 'react-router-dom'
import { Suspense, lazy } from 'react'
import Appbar from './components/Appbar'
const  Login = lazy(() => import('./components/Login'))
const Dashboard = lazy(() => import('./components/Dashboard'))
const Home = lazy(() => import('./components/Home'))


function App() {

  
  //suspence API

  return (
    <>
      <BrowserRouter>
        <Appbar/>
        <Routes>
          <Route path='/dashboard' element={<Suspense fallback={"loading..."}><Dashboard/></Suspense>} />
          <Route path='/' element={<Suspense fallback={"loading..."}><Home/></Suspense>} />
          <Route path='/login' element={<Suspense fallback={"loading..."}><Login/></Suspense>}  />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

