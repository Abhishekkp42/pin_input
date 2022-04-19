import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import PinInput from "react-pin-input";

export default function App() {
  return (
    <div className="App">     
      <PinInput length={5} focus type="text" inputMode="text" />
     
    </div>
  );
}
