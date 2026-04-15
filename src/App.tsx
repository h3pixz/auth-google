import { useState } from "react";

export default function App() {
  const [isSignUp, setIsSignUp] = useState(false);
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
        </form>
      </div>
    </div>
  );
}
