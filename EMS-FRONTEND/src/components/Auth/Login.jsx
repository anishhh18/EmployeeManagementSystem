import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("email:",email);
    console.log("password:",password);
    setEmail("")
    setPassword("")
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="border-2 border-black p-15 rounded-xl">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col items-center justify-center gap-4"
        >
          <input
            className="border-2 rounded-full px-5 py-3 outline-none bg-transparent"
            type="email"
            required
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
            placeholder="Enter your email"
          />
          <input
            className="border-2 rounded-full px-5 py-3 outline-none bg-transparent"
            type="password"
            required
            value={password}
            onChange={(e)=>{setPassword(e.target.value)}}
            placeholder="Enter your password"
          />
          <button className="border-none rounded-full px-5 py-3 outline-none bg-emerald-600 text-white">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
