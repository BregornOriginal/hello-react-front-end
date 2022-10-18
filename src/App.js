import React from 'react';
import { Routes as Router, Route, BrowserRouter } from 'react-router-dom';
import ShowMessages from './components/Gretting';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Router>
          <Route path="/" element={<ShowMessages />} />
        </Router>
      </BrowserRouter>
    </div>
  );
}

export default App;
