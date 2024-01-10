import React from "react";

const Login = () => {
  return (
    <div className="flex justify-center mt-[4em]">
      <div className="font-poppins bg-black/[.5] pb-[3em] px-5 rounded-2xl">
        <h1 className="text-center text-white my-[1em] text-[1.5rem]">Login</h1>
        <input
          type="email"
          className="mb-4 px-2 py-1 border rounded-xl bg-black/[0] border-one w-[19em]"
          placeholder="Email"
        />
        <br />
        <input
          type="password"
          className="mb-4 px-2 py-1 border rounded-xl bg-black/[0] border-one w-[19em]"
          placeholder="Password"
        />
        <br />
        <div className="login py-1 mb-2 bg-six text-center border-none rounded-xl">
          <button>Login</button>
        </div>
        <div className="login py-1 bg-six text-center border-none rounded-xl">
          <button>Reset password</button>
        </div>
        <p className="pt-4 text-white">
          Don't have an account?{" "}
          <a
            href=""
            className="underline hover:text-six transition duration-400 ease-in-out font-bold"
          >
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
