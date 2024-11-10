import React from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';

function App(props) {
  return (
    <div>
      <Navbar></Navbar>
      <div className="container"><News pagesize= {5} country = {"us"} category ={"Entertainment"}/></div>
    </div>
  );
}

export default App;