import React from 'react'
import {router} from '../src/app.routes.jsx'
import{RouterProvider} from "react-router"

export const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App;
