
import { useState } from "react";

export default function App() {
  const [isLogin, setIsLogin] = useState(true); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill out all fields.");
      return;
    }

    if (!isLogin && password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    if (isLogin) {
      if (email === "masotagleyn@gmail.com" && password === "1234567890") {
        setIsLoggedIn(true);
        setError("");
      } else {
        setError("Mali ang Password or Email niyo po! Sir/Ma'am");
      }
    } else {
    
      setIsLogin(true);
      setError("✅ Account created! You can now log in.");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setRememberMe(false);
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      {!isLoggedIn ? (
        <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
            {isLogin ? "Login" : "Sign Up"}
          </h2>
          {error && (
            <div className="mb-4 p-3 text-sm text-red-700 bg-red-100 rounded-lg">
              {error}
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-gray-600 text-sm mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-gray-600 text-sm mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your password"
              />
            </div>
            {!isLogin && (
              <div>
                <label className="block text-gray-600 text-sm mb-2">
                  Confirm Password
                </label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Confirm your password"
                />
              </div>
            )}
            {isLogin && (
              <div className="flex items-center justify-between">
                <label className="flex items-center text-sm text-gray-600">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="mr-2"
                  />
                  Remember Me
                </label>
                <button
                  type="button"
                  onClick={() => setForgotPassword(true)}
                  className="text-sm text-blue-500 hover:underline"
                >
                  Forgot Password?
                </button>
              </div>
            )}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-xl font-semibold hover:bg-blue-600 transition"
            >
              {isLogin ? "Login" : "Sign Up"}
            </button>
          </form>
          <p className="text-sm text-center mt-4 text-gray-600">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <button
              onClick={() => {
                setIsLogin(!isLogin);
                setError("");
              }}
              className="text-blue-500 hover:underline"
            >
              {isLogin ? "Sign Up" : "Login"}
            </button>
          </p>
        </div>
      ) : (
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">
            Welcome, {email} 🎉
          </h2>
          {rememberMe && (
            <p className="text-sm text-gray-500 mb-2">
              (We'll remember you next time)
            </p>
          )}
          <button
            onClick={handleLogout}
            className="px-6 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>
      )}

      
      {forgotPassword && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-xl shadow-lg p-6 w-96">
            <h3 className="text-lg font-bold text-gray-700 mb-4">
              Reset Password
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Palagay ako ng iyong Email Address Please!.
            </p>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
              placeholder="Your email"
            />
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setForgotPassword(false)}
                className="px-4 py-2 bg-gray-200 rounded-xl hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setForgotPassword(false);
                  alert("📧 Reset instructions sent!");
                }}
                className="px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
