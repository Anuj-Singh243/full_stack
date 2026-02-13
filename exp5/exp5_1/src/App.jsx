import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { lazy,Suspense } from 'react'

const Dashboard = lazy(() => import('./components/Dashboard'))

function App() {
  return (
    <Suspense fallback={<h3>Loading...</h3>}>
      <Dashboard />
    </Suspense>
  );
}

export default App
