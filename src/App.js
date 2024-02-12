import React from 'react';
import './App.css';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import Dashboard from './components/dashboard';
import Cart from './components/cart';
import RootLayout from './components/rootLayout';

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Dashboard />} />
      <Route path="/Cart" element={<Cart />} />
    </Route>
  ));

  return (
    <RouterProvider router={router} />
  );
}

export default App;