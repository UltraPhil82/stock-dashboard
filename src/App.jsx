import React from 'react';
import './App.css'
import StockForm from './components/StockForm';
import { useState } from 'react'
import AppContext from "./AppContext.js";

function App() {

  return (
    <>
      <h1>Finance Dashboard</h1>
      <StockForm />
    </>
  )
}

export default App;
