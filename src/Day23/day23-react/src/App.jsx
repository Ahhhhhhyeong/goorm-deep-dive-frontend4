import { useState } from 'react';
import './App.css';
import EventBubbling from './components/EventBubbling';
import EventBubbling2 from './components/EventBubbling2';
import EventBubbling3 from './components/EventBubbling3';

function App() {
  return (
    <>
      <EventBubbling />
      <EventBubbling2 />
      <EventBubbling3 />
    </>
  );
}

export default App;
