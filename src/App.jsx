import './App.css'
import { RouterProvider } from 'react-router'
import { createBrowserRouter } from 'react-router-dom'
import DashboardLayout from './components/Dashboard/DashboardLayout'
import Dashboard from './pages/Dashboard/Dashboard'
import Clients from './pages/Dashboard/Clients/Clients'
import Payment from './pages/Dashboard/Payment/Payment'
import Task from './pages/Dashboard/Task/Task'
import Messages from './pages/Dashboard/Messages/Messages'
import Appointments from './pages/Dashboard/Appointments/Appointments'
import Reports from './pages/Dashboard/Reports/Report'
import ClientDetails from './pages/Dashboard/Clients/ClientDetails'
import SignIn from './pages/LogIn/LogIn'
import { useEffect, useState } from 'react'

function App() {
  // Check if the user is authenticated
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    // You can implement your authentication check here.
    // For simplicity, I'm checking a flag in localStorage.
    const isAuthenticated = localStorage.getItem('authenticated') === 'true';
    setAuthenticated(isAuthenticated);
  }, []);


  const router = createBrowserRouter(
    [

      {

        element: authenticated ? <DashboardLayout /> : <SignIn />, // Render DashboardLayout if authenticated, otherwise render Login
        children: [
          {
            path: 'workspace',
            element: <Dashboard />
          },
          {
            path: 'clients',
            element: <Clients />
          },
          {
            path: 'schedule',
            element: <Appointments />
          },
          {
            path: 'payment',
            element: <Payment />
          },
          {
            path: 'task',
            element: <Task />
          },
          {
            path: 'message',
            element: <Messages />,
          },
          {
            path: 'reports',
            element: <Reports />
          },
          {
            path: 'client-details',
            element: <ClientDetails />
          }
        ]
      },
      {
        path: '/', // Define a route for the login page
        element: <SignIn />
      },
      {
        path: 'login', // Define a route for the login page
        element: <SignIn />
      }
    ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
