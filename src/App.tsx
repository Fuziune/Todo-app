import React from "react";
import ErrorPage from "./Pages/ErrorPage";
import Login from "./Pages/Login";
import Main from "./Pages/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const handleSignIn = async (email: string, password: string): Promise<void> => {
    try {
      // Simulate an asynchronous operation like an API call
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Example delay
      console.log(`Signed in with email: ${email}, password: ${password}`);
    } catch (error) {
      console.error("Sign-in failed", error);
      // Handle error appropriately
    }
  };

  return (
    <Router>
      <Routes>
        <Route path="/Main" element={<Main />} />
        <Route path="/" element={<Login onSignIn={handleSignIn} />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
