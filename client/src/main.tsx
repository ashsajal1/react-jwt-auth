import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes.tsx';
import { AuthProvider } from './context/AuthContext.tsx';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <Theme>
        <RouterProvider router={router} />
      </Theme>
    </AuthProvider>
  </React.StrictMode>,
)
