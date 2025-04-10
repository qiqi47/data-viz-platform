import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import Login from './Login.tsx';
import AuthRoute from './AuthRoute.tsx';
const firebaseConfig = {
    apiKey: 'AIzaSyBPZ1GoTrQKlPp_OMln_wO-nToSMtEYdnY',
    authDomain: 'answerai-93907.firebaseapp.com',
    projectId: 'answerai-93907',
    storageBucket: 'answerai-93907.firebasestorage.app',
    messagingSenderId: '270487362193',
    appId: '1:270487362193:web:cb507fef831a6253c33d30',
    measurementId: 'G-6D8331C9C0',
};
initializeApp(firebaseConfig);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        <AuthRoute>
                            <App />
                        </AuthRoute>
                    }
                />
                <Route path="*" element={<Navigate to="/" />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    </StrictMode>,
);
