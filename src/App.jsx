import * as React from 'react';
import Theme from './Theme'
import ButtonTest from './ButtonTest'
import Button2 from './Button2.jsx'
import './App.css'
import Navbar from './navbar.jsx'
import './navbar.css'
export default function App() {
  return (
    <Theme>
       <div>
      <Navbar />
      <main style={{ padding: "20px", color: "#003F66" }}>
        <h1>Welcome to Graduation 25 🎓</h1>
        <p>This is your page content!</p>
      </main>
    </div>
    </Theme>
  );
}
