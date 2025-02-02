import { useState, useEffect } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
    const navigate = useNavigate();
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                navigate("/login");
            }
        });
        return () => unsubscribe();
    }, [navigate]);

    const handleRegister = async (e) => {
        e.preventDefault(); 
        setError("");
        setLoading(true);
        
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            alert("Registration Successful!");
            navigate("/login"); 
        } catch (err) {
            setError(err.message);
        }
        
        setLoading(false);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-800">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md w-full max-w-sm">
                <h1 className="text-xl font-semibold text-center text-gray-900 dark:text-white">Register</h1>

                {error && <p className="text-red-500 text-center text-sm mt-2">{error}</p>}

                <form onSubmit={handleRegister} className="mt-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-400">Email</label>
                        <input 
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="border rounded w-full p-2 mt-1 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                            required
                        />
                    </div>

                    <div className="mt-3">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-400">Password</label>
                        <input 
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="border rounded w-full p-2 mt-1 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                            required
                        />
                    </div>

                    <button 
                        type="submit"
                        className={`w-full mt-5 py-2 rounded text-white font-semibold ${
                            loading ? "bg-gray-400 cursor-not-allowed" : "bg-green-500 hover:bg-green-600"
                        }`}
                        disabled={loading}
                    >
                        {loading ? "Registering..." : "Register"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default RegisterPage;
