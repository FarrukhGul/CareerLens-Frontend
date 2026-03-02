import React from 'react'
import {router} from '../src/app.routes.jsx'
import{RouterProvider} from "react-router"
import { AuthProvider } from './features/auth/auth.context.jsx'

export const App = () => {
  return (
    <AuthProvider>
      <RouterProvider router={router}/>
    </AuthProvider>
  )
}

export default App;
