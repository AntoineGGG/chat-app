import React from 'react';
import Contact from './components/Contact';
import ContactList from './components/ContactList';

function App() {
  return (
    <div className='App'>
      <Contact
        avatar='https://randomuser.me/api/portraits/women/26.jpg'
        name='Tina Palmer'
        online='Online'
      />
      <Contact
        avatar='https://randomuser.me/api/portraits/men/88.jpg'
        name='Ken Wheeler'
        online=''
      />
      <Contact
        avatar='https://randomuser.me/api/portraits/men/14.jpg'
        name='Lee Walker'
        online=''
      />
      <ContactList />
    </div>
  );
}

export default App;
