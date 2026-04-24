// import { Routes, Route } from 'react-router-dom'
// import React from 'react'
// import Home from './pages/Home'
// import Auth from './pages/Auth'

// const App = () => {
//   return (
//     <Routes>
//       <Route path='/' element={<Home/>} />
//       <Route path='/auth' element={<Auth/>} />
//     </Routes>
//   )
// }

// export default App
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Auth from './pages/Auth'

const App = () => {
  return (
  
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/auth' element={<Auth />} />
      </Routes>
   
  )
}

export default App;