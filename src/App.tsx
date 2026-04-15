import { useState } from "react";

export default function App() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <div className="size-full flex items-center justify-center bg-[#0A0A0A]">
      <div className="fade-in w-full  max-w-[360px] px-6">
        <form className="space-y-6">
          <div className="text-center mb-10">
            <h1
              className="text-[26px] font-semibold tracking-tight mb-2 text-[#FFFFFF]"
              style={{ fontWeight: 600 }}
            >
              {isSignUp ? "Create Account" : "Welcome Back!"}
            </h1>
            <p className="text-[14px] mt-2 text-[#A0A0A0]">
              {isSignUp
                ? "Enter your details to get started"
                : "Enter your credentials to continue"}
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="text-[#E0E0E0] text-[13px] mb-2"
                style={{ fontWeight: 600 }}
              >
                Email address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                className="bg-[#1A1A1A] border border-[rgba(255,255,255,0.15)] px-4 py-3 outline-none w-full text-[#FFFFFF] "
                placeholder="you@example.com"
                style={{
                  borderRadius: "8px",
                  borderWidth: "1px",
                }}
                required
              ></input>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
