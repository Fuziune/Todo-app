import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Styling/StylePages.css';
import './Login.css'
interface SignInProps {
  onSignIn: (email: string, password: string) => Promise<void>; // Assuming onSignIn returns a Promise
}

const Login: React.FC<SignInProps> = ({ onSignIn }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleSignIn = async () => {
    // Basic validation
    if (!email || !password) {
      setError('Both fields are required.');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      await onSignIn(email, password);
      navigate('/Main');
    } catch (e) {
      setError('Sign-in failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    
    <div className="container mt-5 p-3 mb-2 bg-primary-subtle text-primary-emphasis shadow-xl ring-1 ring-slate-900/5 bg-white">
      <h2 className="primary font-xl">THIS IS THE LOG IN PAGE!</h2>

      {/* Input Group for Email */}
      <div className="input-group mb-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
          placeholder="Enter your email"
          aria-describedby="basic-addon2"
        />
        <span className="input-group-text" id="basic-addon2">@example.com</span>
      </div>

      {/* Input Group for Password */}
      <div className="input-group mb-3">
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-control"
          placeholder="Enter your password"
          aria-describedby="basic-addon2"
        />
        <span className="input-group-text" id="basic-addon2">password</span>
      </div>

      {error && <div className="text-danger">{error}</div>}

      {/* Log In Section */}
      <div className="mt-4">
        <button
          type="button"
          onClick={handleSignIn}
          className="btn btn-outline-primary mt-3"
          disabled={loading}
        >
          {loading ? 'Signing in...' : 'Go To Main'}
        </button>
      </div>
    </div>
    
  );
};

export default Login;
