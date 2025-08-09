import { StrictMode } from 'react'
import { createRoot} from 'react-dom/client'
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import './styles/fonts.css'
import './styles/i18n.js'
import App from './App.jsx'
import Home from './pages/home.jsx'
import Contact from './pages/contact.jsx'

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
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/contact',
        element: <Contact />,
      }
    ],
  },
  {
    path: '*',
    element: <Navigate to="/" />,
  }
]
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
