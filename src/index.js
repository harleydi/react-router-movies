import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Home';
import CreateMovie from './Components/CreateMovie.js'
import MovieDetails from './Components/MovieDetails';
import EditMovie from './Components/EditMovie';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/movie/:id/details",
        element: <MovieDetails />
      },
      {
        path: "/movies/create",
        element: <CreateMovie />
      },
      {
        path: "/movies/:id/edit",
        element: <EditMovie />
      }
    ]
  },
  {
    path: "home",
    element: <Home />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
