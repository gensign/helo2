import React from 'react';
import NavBar from './components/NavBar/NavBar';
import router from './routes/router'

function App() {
  return (
    <div className="App">
      <NavBar />
      {router}
    </div>
  );
}

export default App;
