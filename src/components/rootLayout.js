import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./navbar";
import {Provider} from 'react-redux';
import Store from '../store/store'
const RootLayout = () => {
  return (
    <>
    <Provider store={Store}>
      <Navbar />
      <main>
        <Outlet />
      </main>
      </Provider>
    </>
  );
};

export default RootLayout;
