import React from 'react';
import ReactDOM from 'react-dom/client';



import { Home } from './pages/Home';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Details } from './pages/Details';
import { GlobalStyle } from './global';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
   <Routes>
     <Route path="/" element={<Home/>} />
     <Route path="/details/:id" element={<Details/>} />
   </Routes>
   <GlobalStyle/>
  </BrowserRouter>
);

