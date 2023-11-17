import { signIn } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";

const LoginFrom = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const initialState = {
    username: "",

    email: "",
    phone: "",
    password: "",
  };

  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!username || !email || !phone || !password) {
      setError("All fields are necessary.");
      return;
    }
    if (isSignUp) {
      try {
        const resUserExists = await fetch("api/existUser", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        });

        const { user } = await resUserExists.json();

        if (user) {
          setError("User already exists.");
          return;
        }

        const res = await fetch("api/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            email,
            phone,
            password,
          }),
        });

        if (res.ok) {
          const form = e.target;
          form.reset();
          router.push("/");
        } else {
          console.log("User registration failed.");
        }
      } catch (error) {
        console.log("Error during registration: ", error);
      }
    } else {
      try {
        const res = await signIn("credentials", {
          email,
          password,
          redirect: false,
        });
        if (res?.error) {
          setError("Invalid  Credentials!");
          return;
        }
        router.replace("/Home");
      } catch (error) {
        console.log("message is :", error);
      }
    }
  };

  return (
    <div className="flex justify-center h-full text-black">
      <div className="cursor-text">
        <h1 className="text-4xl font-medium w-[400px] ">
          {isSignUp ? "Create an account" : "Log in to Buyer’s Edge"}
        </h1>
        <p className="p-2">enter your details below</p>

        <form className="mt-8 space-y-8" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm space-y-px">
            <div className=" flex gap-2 items-center border-b  border-gray-600 ">
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                required
                value={username}
                onChange={(e) => setUserName(e.target.value)}
                className="appearance-none rounded-none relative bg-transparent w-full py-2  placeholder-gray-500 text-gray-800 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Username"
              />
            </div>

            <div className=" flex gap-2 items-center border-b   border-gray-600 ">
              <input
                id="email"
                name="email"
                type="text"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="appearance-none rounded-none relative bg-transparent w-full py-2 mt-4 placeholder-gray-500 text-gray-800 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email"
              />
            </div>
            {/* this is user */}

            <div className=" flex gap-2 items-center border-b   border-gray-600 ">
              <input
                id="phone"
                name="phone"
                type="Number"
                autoComplete="phone"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="appearance-none rounded-none relative bg-transparent w-full py-2 mt-4 placeholder-gray-500 text-gray-800 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Enter Your Phone Number"
              />
            </div>

            <div className=" flex gap-2 items-center border-b  border-gray-600 ">
              <input
                id="password"
                name="password"
                type="text"
                autoComplete="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none rounded-none relative bg-transparent w-full py-2 mt-4  placeholder-gray-500 text-gray-800 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          {error ? (
            <div className="p-1 bg-[#DB4444]  text-black border-white float">
              {error}
            </div>
          ) : (
            <></>
          )}
          <div className="flex flex-col gap-2">
            <button
              placeholder="Create Account"
              type="submit"
              //   disabled={loading}
              className={
                "group relative w-full flex justify-center py-3 rounded-md px-4 border border-transparent text-sm font-medium  text-white bg-[#DB4444]  hover:bg-[#DB4444] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#DB4444]"
              }>
              {" "}
              Create Account
              {/* {loading ? "Loading..." : isSignUp ? "SignUp" : "Login"} */}
            </button>
            <button
              placeholder="Create Account"
              type="submit"
              //   disabled={loading}
              className={
                "group relative w-full flex justify-center py-2 rounded-md px-4 border border-gray-500 text-base font-medium  text-black  items-center gap-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#DB4444]"
              }>
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtjk6gBYhwVFwlqxFxV4aAQ8nP5Ogtr7En6_xrWv0dnA&s"
                className="flex gap-1 items-center"
                width={30}
                height={30}
                alt=""
              />
              Sign up with Google
              {/* {loading ? "Loading..." : isSignUp ? "SignUp" : "Login"} */}
            </button>
          </div>
          <div>
            <span
              className="relative bg-transparent flex items-center justify-start py-2 gap-1 font-normal text-xs"
              style={{
                fontSize: "13px",
                cursor: "pointer",
                textDecoration: "none",
              }}
              onClick={() => {
                //   resetForm();
                setIsSignUp((prev) => !prev);
              }}>
              {isSignUp ? (
                <div>
                  Already have an account ?{" "}
                  <span className="text-gray-800 border-b border-gray-800 py-1 font-semibold  ">
                    Login
                  </span>
                </div>
              ) : (
                <div className=" ">
                  Don`t have an account ?{" "}
                  <span className="text-gray-800 border-b py-1  border-gray-800 font-semibold ">
                    SignUp
                  </span>
                </div>
              )}
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginFrom;
