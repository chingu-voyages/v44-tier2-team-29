import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import AppContext from './contex.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <AppContext>
    <App />
  </AppContext>
  // </React.StrictMode>
);
