import { logIn } from "@/services/authServices";
import { setToken } from "@/services/TokenService";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { z } from "zod";

type Props = {};

function LogIn({}: Props) {
  const router = useRouter();

  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const [emailError, setEmailError] = useState(false);
  const [loginError, setLoginError] = useState(false);

  const emailSchema = z.string().email();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const _emailError = !emailSchema.safeParse(userEmail).success;
    setEmailError(_emailError);
    if (_emailError) {
      return;
    }
    const userData = { email: userEmail, password: userPassword };
    try {
      const accessTokenResponse = await logIn(userData);
      setToken(accessTokenResponse.accessToken);
      setUserEmail("");
      setUserPassword("");
      router.push("/l/accounts");
    } catch (err) {
      setLoginError(true);
      console.log(err);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-[#242526]">
      <div className="text-center bg-[#242528] p-[4vh] rounded-lg shadow-lg">
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center mb-[1vh]">
            <div>
              <div className="text-4xl font-sans font-bold text-green-400">
                Fina
              </div>
              <div className="font-sans font-normal text-sm text-slate-400">
                Money management made easy
              </div>
            </div>
          </div>
          <div className="font-sans text-2xl font-semibold text-white mb-[0.5vh]">
            Sign Up to start your free trial
          </div>
          <div className="font-sans text-slate-400 mb-[2vh]">
            Start with no payment, cancel anytime.
          </div>
          <form onSubmit={handleSubmit} className="w-full  ">
            <div className="my-[2vh] font-sans w-full">
              <input
                onChange={(e) => {
                  setUserEmail(e.target.value);
                  setEmailError(false);
                  setLoginError(false);
                }}
                type="text"
                value={userEmail}
                placeholder="Email address"
                className={
                  "w-full px-[1vw] py-[1vh] rounded-lg bg-slate-800 placeholder-slate-400 " +
                  (emailError ? "text-red-500" : "text-white")
                }
              />
              {emailError && (
                <div className="text-left text-red-500 px-2 pt-1">
                  Invalid Email
                </div>
              )}
            </div>
            <div className="my-[2vh] font-sans w-full">
              <input
                type="password"
                value={userPassword}
                placeholder="Password"
                className="w-full px-[1vw] py-[1vh] rounded-lg bg-slate-800 text-white placeholder-slate-400"
                onChange={(e) => {
                  setUserPassword(e.target.value);
                  setLoginError(false);
                }}
              />
            </div>
            <button
              type="submit"
              className="w-full px-[1vw] py-[1vh] rounded-lg bg-green-400 text-slate-900 font-semibold hover:bg-green-300 transition"
            >
              Sign in
            </button>
            {loginError && (
              <div className="text-center text-red-500 px-2 pt-1">
                Invalid Email or password
              </div>
            )}
          </form>
          <div className="text-slate-400 text-xs mt-[2vh]">
            By clicking the button above, you agree to our{" "}
            <Link href="#" className="text-green-400 underline">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="#" className="text-green-400 underline">
              Privacy Policy
            </Link>
          </div>
          <div className="text-slate-400 text-sm mt-[2vh]">
            Don't have an account?{" "}
            <Link href="/signup" className="text-green-400 underline">
              Create one
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
