import { useState } from 'react';
import './App.css';
import EventBubbling from './components/EventBubbling';
import EventBubbling2 from './components/EventBubbling2';
import EventBubbling3 from './components/EventBubbling3';
import ReactHookFormEx1 from './components/ReactHookFormEx1';
import EventDelegationEx from './components/EventDelegationEx';

function App() {
  return (
    <>
      <ReactHookFormEx1 />
      <EventDelegationEx />
    </>
  );
}

export default App;
