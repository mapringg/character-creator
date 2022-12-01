import React from 'react';

import CharacterEditor from './components/CharacterEditor';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <CharacterEditor />
        <Footer />
      </div>
      <div style={{
        height: '40%',
        position: 'fixed',
        bottom: '0px',
        width: '100%',
        background: 'hsl(195deg, 20%, 86%)',
      }} />
    </>
  );
}

export default App;
