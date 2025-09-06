
// import { createRoot } from 'react-dom/client'
// import react from 'react'
// import './index.css'
// import App from './App.jsx'
// import ShopContextProvider from './Context/ShopContext.jsx'
// import { BrowserRouter } from 'react-router-dom'

// createRoot(document.getElementById('root')).render(
//   <BrowserRouter>
//   <ShopContextProvider>
//     <App />
//     </ShopContextProvider>
//   </BrowserRouter>
    
  
// )

// import { createRoot } from 'react-dom/client'
// import React from 'react'
// import './index.css'
// import App from './App.jsx'
// import ShopContextProvider from './Context/ShopContext.jsx'
// import { BrowserRouter } from 'react-router-dom'

// createRoot(document.getElementById('root')).render(
//   <BrowserRouter basename="/trenzy">
//     <ShopContextProvider>
//       <App />
//     </ShopContextProvider>
//   </BrowserRouter>
// )


import { createRoot } from 'react-dom/client'
import React from 'react'
import './index.css'
import App from './App.jsx'
import ShopContextProvider from './Context/ShopContext.jsx'
import { HashRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <HashRouter>
    <ShopContextProvider>
      <App />
    </ShopContextProvider>
  </HashRouter>
)
