import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* 여기서 라우터 래핑 */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
