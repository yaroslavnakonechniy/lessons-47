import { RouterProvider } from 'react-router-dom'
import './App.css'
import { router } from './router/routers'
import { AuthProvider } from './auth/AuthContext'

function App() {

  return (
    <>  
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </>
  )
}

export default App
