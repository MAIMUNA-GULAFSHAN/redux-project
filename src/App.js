// import Product from './components/product'
import './App.css';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import Dashboard from './components/dashboard';
import Cart from './components/cart';
import RootLayout from './components/rootLayout';
function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    
    <Route path="/" element={< RootLayout />}>
      <Route index element = {<Dashboard />}></Route>
      <Route path="/Cart" element = {<Cart/>}></Route>
    </Route>
  ))
  return (
    <div>
     <RouterProvider router={router}/>
    </div>
  );
}

export default App;
