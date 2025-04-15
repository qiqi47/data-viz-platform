import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { Provider } from 'react-redux';
import { store } from './store';
import Login from './Login.tsx';
import AuthRoute from './AuthRoute.tsx';
import Dashboard from './screens/Dashboard.tsx';
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};
initializeApp(firebaseConfig);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <AuthRoute>
                                <Dashboard />
                            </AuthRoute>
                        }
                    />
                    <Route path="*" element={<Navigate to="/" />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </Router>
        </Provider>
    </StrictMode>,
);
