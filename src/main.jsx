import 'modern-normalize/modern-normalize.css';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { Global } from '@emotion/react';
import { GlobalStyles } from './styles/GlobalStyles.js';


ReactDOM.createRoot(document.getElementById('root')).render(

  <>
        <BrowserRouter basename="/CarsRent">
          <Global styles={GlobalStyles} />
          <App />
        </BrowserRouter>
    <ToastContainer
      autoClose={2000}
      position="top-center"
      progressStyle={{ height: '1px' }}
      hideProgressBar={true}
      theme="light"
      toastStyle={{
        backgroundColor: `rgb(22, 31, 55)`,
      }}
    />
  </>

);