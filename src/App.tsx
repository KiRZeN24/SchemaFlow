import React from 'react';
import SchemaForm from './schemaForm';
import Navbar from './navbar';

function App() {
  return (
    <div className="app-container">
      <div>
        <Navbar />
      </div>
      <div>
        <SchemaForm />
      </div>
    </div>
  );
}

export default App;

