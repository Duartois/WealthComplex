import React, { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/i18n.js';
import { loadNamespaces } from './styles/i18n.js';

import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from 'react-router-dom';

const App = React.lazy(() => import('./App.jsx'));
const Home = React.lazy(() => import('./pages/home.jsx'));
const Contact = React.lazy(() => import('./pages/contact.jsx'));

// garante i18n carregado antes do app
await loadNamespaces('translation');

// define UM router apenas
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },          // "/" (rota índice)
      { path: 'contact', element: <Contact /> },   // "/contact"
    ],
  },
  { path: '*', element: <Navigate to="/" /> },
]);

if (import.meta.env.DEV) {
  console.log(`
                            . .  ,  ,
                            |⠈⣆/ ⣆/ ⣆,',
                            ;          ⠈⣆/⣆,.
                           :               ⠈⣆,/
                           |                  /
                           ;                 :
                          :                  ;
                          |      ,---.      /
                         :     ,'     ⠈,-._ ⣆
                         ;    (   o    ⣆    '
                       _:      .      ,'  o ;
                      /,.⣠      .__,''-.__,
                      ⣆_  _               ⣆
                     ,'  / ⠈           ⠈.,'
               ___,'⠈-._ ⠈_/ ',._        ;
            __;_,'      ⠈-.'-'./ '--.____)
         ,-'           _,--⣆^-'
       ,⠈:_____      ,-'     ⣆
      (,'     ⠈--.  ⣆;-._    ;
      :    Y      ⠈-/    ⠈,  :
      :    :       :     /_;'
      :    :       |    :
       ⣆    ⣆      :    :
        ⠈-._ ⠈-.__, ⣆    '.
           ⣆   ⣆  '. ⣆     '.
         ,-;    ⣆---)_⣆ ,','/
         ⣆_ ⠈---'--'⠈ ,'^-;'
         (⠈     ---'⠈ ,-'⠈⠈
         / ⠈--.__,. ,-'    ⣆
-Gotcha-    )-.__,-- ||___,--' '-.
        /._______,|__________,'⣆
        '--.____,'|_________,-'
   ||                                              ||      
   ||   Hey there, curious one!                    ||      
   ||                                              ||      
   ||   You're probably wondering how cool         ||      
   ||   this site is.                              ||      
   ||   Bart is guarding the secrets of            || 
   ||   the source.                                || 
   ||                                              ||      
   ||   🔍 Want to unveil the code?               ||      
   ||   Feel free to check it out!                 ||      
   ||   👉 https://github.com/Duartois            ||      
   ||______________________________________________||
`);
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  </StrictMode>
);
