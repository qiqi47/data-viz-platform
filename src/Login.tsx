import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signInWithEmailAndPassword,
} from 'firebase/auth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    // Initialize Firebase Auth
    const auth = getAuth();
    const navigate = useNavigate();

    // Initialize Google Auth Provider
    const googleProvider = new GoogleAuthProvider();

    const [authing, setAuthing] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const signInWithGoogle = async () => {
        setAuthing(true);

        signInWithPopup(auth, googleProvider)
            .then((res) => {
                console.log(res.user.uid);
                navigate('/');
            })
            .catch((err) => {
                console.log(err);
                setAuthing(false);
            });
    };

    const signInWithEmail = async () => {
        setAuthing(true);

        signInWithEmailAndPassword(auth, email, password)
            .then((res) => {
                console.log(res.user.uid);
                navigate('/');
            })
            .catch((err) => {
                console.log(err);
                setAuthing(false);
                setError(err.message);
            });
    };

    return (
        <div className="w-screen h-screen flex">
            {/* Left half of the screen - background styling */}
            <div className="w-1/2 h-full flex flex-col bg-[#282c34] items-center justify-center"></div>

            {/* Right half of the screen - login form */}
            <div className="w-1/2 h-full bg-[#1a1a1a] flex flex-col p-20 justify-center">
                <div className="w-full flex flex-col max-w-[450px] mx-auto">
                    {/* Header section with title and welcome message */}
                    <div className="w-full flex flex-col mb-10 text-white">
                        <h3 className="text-4xl font-bold mb-2">Login</h3>
                        <p className="text-lg mb-4">Welcome! Please enter your details.</p>
                    </div>

                    {/* Input fields for email and password */}
                    <div className="w-full flex flex-col mb-6">
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full text-white py-2 mb-4 bg-transparent border-b border-gray-500 focus:outline-none focus:border-white"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full text-white py-2 mb-4 bg-transparent border-b border-gray-500 focus:outline-none focus:border-white"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    {/* Button to log in with email and password */}
                    <div className="w-full flex flex-col mb-4">
                        <button
                            className="w-full border bg-black border-white my-2 text-white font-semibold rounded-md p-4 text-center flex items-center justify-center cursor-pointer"
                            onClick={signInWithEmail}
                            disabled={authing}
                        >
                            Log In With Email and Password (Not available yet)
                        </button>
                    </div>

                    {/* Display error message if there is one */}
                    {error && <div className="text-red-500 mb-4">{error}</div>}

                    {/* Divider with 'OR' text */}
                    <div className="w-full flex items-center justify-center relative py-4">
                        <div className="w-full h-[1px] bg-gray-500"></div>
                        <p className="text-lg absolute text-gray-500 bg-[#1a1a1a] px-2">OR</p>
                    </div>

                    {/* Button to log in with Google */}
                    <button
                        className="w-full bg-white text-black font-semibold rounded-md p-4 text-center flex items-center justify-center cursor-pointer mt-7"
                        onClick={signInWithGoogle}
                        disabled={authing}
                    >
                        Log In With Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
