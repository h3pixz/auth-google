import { useState } from "react";

export default function App() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#0A0A0A]">
      <style>
        {`@keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .fade-in {
          animation: fadeIn 0.6s ease-out;
        }

        .input-field {
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .input-field:focus {
          border-color: #FFFFFF;
          box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.05);
        }

        .input-field:hover:not(:focus) {
          border-color: rgba(255, 255, 255, 0.3);
        }

        .primary-button {
          transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .primary-button:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(255, 255, 255, 0.15);
        }

        .primary-button:active {
          transform: translateY(0);
          box-shadow: 0 2px 4px rgba(255, 255, 255, 0.1);
        }

        .link-text {
          transition: color 0.15s ease;
          position: relative;
        }

        .link-text::after {
          content: '';
          position: absolute;
          width: 0;
          height: 1px;
          bottom: -2px;
          left: 0;
          background-color: #FFFFFF;
          transition: width 0.2s ease;
        }

        .link-text:hover::after {
          width: 100%;
        }

        .password-toggle {
          transition: opacity 0.15s ease;
        }

        .password-toggle:hover {
          opacity: 0.6;
        }`}
      </style>

      <div className="fade-in w-full max-w-[360px] px-6">
        <form className="space-y-6" onSubmit={handleSubmit}>
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
                className="block text-[#E0E0E0] text-[13px] mb-2"
                style={{ fontWeight: 600 }}
              >
                Email address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-field bg-[#1A1A1A] border border-[rgba(255,255,255,0.15)] px-4 py-3 outline-none w-full text-[#FFFFFF]"
                placeholder="you@example.com"
                style={{
                  borderRadius: "8px",
                  borderWidth: "1px",
                }}
                required
              ></input>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-[#E0E0E0] text-[13px] mb-2"
                style={{ fontWeight: 600 }}
              >
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input-field bg-[#1A1A1A] border border-[rgba(255,255,255,0.15)] px-4 py-3 outline-none w-full text-[#FFFFFF] pr-12"
                  placeholder="••••••••"
                  style={{
                    borderRadius: "8px",
                    borderWidth: "1px",
                  }}
                  required
                />
                <button
                  className="password-toggle absolute right-4 top-1/2 -translate-y-1/2 text-[#A0A0A0] text-[12px]"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{ fontWeight: 500 }}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>
          </div>

          {!isSignUp && (
            <div className="text-right -mt-2">
              <button
                type="button"
                className="link-text inline-block text-[#A0A0A0] text-[13px] hover:text-[#FFFFFF]"
              >
                Forgot password?
              </button>
            </div>
          )}

          <button
            className="primary-button text-[#0A0A0A] bg-[#FFFFFF] w-full py-3 font-semibold cursor-pointer"
            style={{ fontWeight: 600, borderRadius: "8px" }}
          >
            {isSignUp ? "Create Account" : "Log In"}
          </button>

          <div className="text-center pt-2">
            <p className="text-[#A0A0A0] text-[14px]">
              {isSignUp ? "Already have an account?" : "Dont have an account?"}{" "}
              <button
                className="link-text text-[#FFFFFF] inline-block"
                style={{ fontWeight: 500 }}
                onClick={() => setIsSignUp(!isSignUp)}
              >
                {isSignUp ? "Log In" : "Create account"}
              </button>
            </p>
          </div>
        </form>

        <div className="text-center mt-12">
          <p className="text-[#666] text-[12px]">
            By continuing, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
}
