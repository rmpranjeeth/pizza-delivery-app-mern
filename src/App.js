import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Homescreen from './screens/Homescreen';

export default function App() {
  return (
    <div>
      <Navbar />
      <Homescreen />
    </div>
  );
}
