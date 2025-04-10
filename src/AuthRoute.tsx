import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const AuthRoute = ({ children }: { children: React.ReactNode }) => {
    const navigate = useNavigate();
    const auth = getAuth();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setIsLoading(false);
                navigate('/');
            } else {
                setIsLoading(false);
                navigate('/login');
            }
            setIsLoading(false);
        });
        return () => unsubscribe();
    }, [auth, navigate]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return <div>{children}</div>;
};

export default AuthRoute;
