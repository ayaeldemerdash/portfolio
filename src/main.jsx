import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css'; // ده اللي بيحمل الألوان!

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// أضيفي ده في النهاية (بعد render) عشان تختبري الـ dark mode مؤقتًا
document.documentElement.classList.add('dark');