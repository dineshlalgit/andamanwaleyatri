import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import './index.css';
import router from './routes/routes.jsx';
import { PrimeReactProvider } from 'primereact/api';
import Whatsapp from './components/WhatsappContact/Whatsapp.jsx';
import './components/WhatsappContact/Whatsapp.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PrimeReactProvider>
      <div className="relative">
        <div className="tablet-desktop-whatsapp mobile-whatsapp">
          <Whatsapp />
        </div>
        <div className='fixed z-40 bottom-24 left-4 md:bottom-20 md:left-5 w-14 h-14 aspect-square rounded-full shadow-md border-4 border-white'>
          <a href="tel:7063516120">
            <img src="https://i.pinimg.com/originals/c1/00/d4/c100d4c70bc17365a2a42ac22ef782da.png" alt="" className='w-full h-full'/>
          </a>
        </div>
      </div>
      <RouterProvider router={router} />
    </PrimeReactProvider>
  </React.StrictMode>
);
