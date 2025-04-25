import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Inputs/Input.component";
import { validateEmail } from "../../utils/helper.util";

const Login = ({ setCurrentPage }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!password) {
      setError("Please enter your password to log in.");
      return;
    }

    setError("");

    try {

    } catch (e) {
      setError("Login failed. Please check your credentials and try again.");
    }
  };
  return (
    <div className="w-[90vw] md:w-[33vw] p-7 flex flex-col justify-center">
      <h3 className="text-lg font-semibold text-black">Welcome Back, Trailblazer!</h3>
      <p className="text-xs text-slate-700 mt-[5px] mb-6">
        Ready to continue crafting your masterpiece? Log in to unlock your next
        move.
      </p>
      <form onSubmit={handleLogin}>
        <Input 
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          label="Email Address"
          placeholder="john@example.com"
          type="text"
        />
        <Input 
          value={password}
          onChange={({ target }) => setPassword(target.value)}
          label="Password"
          placeholder="******"
          type="password"
        />
        {error && <p className="text-red-500 text-xs pb-2.5">{error}</p>}

        <button type="submit" className="btn-primary">Login</button>
        <p className="text-[13px] text-slate-800 mt-3">
          Don't have an account? {" "}
          <button
            className="font-medium text-primary underline cursor-pointer"
            onClick={() => {
              setCurrentPage("signup")
            }}
          >
            SignUp
          </button>
        </p>
      </form>
    </div>
  );
};

export default Login;
