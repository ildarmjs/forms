import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Signin from './components/Signin.tsx'
import Signup from './components/Signup.tsx'

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />
	},
	{
		path: '/signin',
		element: <Signin />
	},
	{
		path: '/signup',
		element: <Signup />
	}
])

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
