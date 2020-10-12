import React from 'react';
import Contact from './components/Contact';

function App() {
  return (
    <div className='App'>
      <Contact
        img='https://randomuser.me/api/portraits/women/26.jpg'
        name='Tina Palmer'
        status='Online'
        statusText='Online'
      />
      <Contact
        img='https://randomuser.me/api/portraits/men/88.jpg'
        name='Ken Wheeler'
        status=''
        statusText='Offline'
      />
      <Contact
        img='https://randomuser.me/api/portraits/men/14.jpg'
        name='Lee Walker'
        status=''
        statusText='Offline'
      />
    </div>
  );
}

export default App;
