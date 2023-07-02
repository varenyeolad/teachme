import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store } from './store/store.js'
import { Provider } from 'react-redux'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import StorePage from './pages/StorePage/StorePage.jsx'
import LearningPage from './pages/LearningPage/LearningPage.jsx'
import MainPage from './pages/MainPage/MainPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <MainPage/>,
      },
      {
        path: 'study',
        element: <LearningPage/>
      },
      {
        path: 'store',
        element: <StorePage/>
      },
    ],
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
