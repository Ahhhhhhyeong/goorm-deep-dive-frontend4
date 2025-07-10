import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { Provider } from 'react-redux';
import store from './app/store.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Provider : 리엑트 앱에서 리덕스 저장소(store)를 연결해주는 컴포넌트 */}
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
