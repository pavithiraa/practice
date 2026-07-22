import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { GoogleOAuthProvider } from "@react-oauth/google";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId="898014212130-24k42om91lg7rgsk696v1npqe8q4q1vg.apps.googleusercontent.com">
      <App />
  </GoogleOAuthProvider>
  </StrictMode>,
)
