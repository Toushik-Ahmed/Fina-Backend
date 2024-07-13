import { signUp } from "@/services/authServices";
import { setToken } from "@/services/TokenService";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { z } from "zod";
import { Button } from "../ui/button";
import { CiLogin } from "react-icons/ci";
import Image from "next/image";
import logo from "@/assets/logo.png";

type Props = {};

function SignUp({}: Props) {
  const router = useRouter();
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userName, setUserName] = useState("");

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [signUpError, setSignUpError] = useState(false);

  const passwordSchema = z.string().min(8);
  const emailSchema = z.string().email();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const _emailError = !emailSchema.safeParse(userEmail).success;
    const _passwordError = !passwordSchema.safeParse(userPassword).success;
    setEmailError(_emailError);
    setPasswordError(_passwordError);
    if (_emailError || _passwordError) {
      return;
    }

    const userData = {
      username: userName,
      email: userEmail,
      password: userPassword,
    };
    try {
      const accessTokenResponse = await signUp(userData);
      setToken(accessTokenResponse.accessToken);
      router.push("/l/accounts");
    } catch (err) {
      setSignUpError(true);
      console.error(err);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-[#242526]">
      <div className="text-center p-[4vh]">
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center mb-[1vh] gap-2">
            <Image
              width={64}
              height={64}
              src={logo}
              alt="Fina Logo"
              className="rounded"
            />
            <div>
              <div className="text-4xl font-sans font-bold text-green-400 flex">
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
          <form onSubmit={handleSubmit} className="w-full">
            <div className="my-[2vh] font-sans w-full">
              <input
                onChange={(e) => {
                  setUserName(e.target.value);
                  setSignUpError(false);
                }}
                type="text"
                value={userName}
                placeholder="User Name"
                className="w-full px-[1vw] py-[1vh] rounded-lg bg-slate-800 text-white placeholder-slate-400 "
              />
            </div>
            <div className="my-[2vh] font-sans w-full">
              <input
                onChange={(e) => {
                  setUserEmail(e.target.value);
                  setEmailError(false);
                  setSignUpError(false);
                }}
                value={userEmail}
                type="text"
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
                onChange={(e) => {
                  setUserPassword(e.target.value);
                  setPasswordError(false);
                  setSignUpError(false);
                }}
                type="password"
                value={userPassword}
                placeholder="Password"
                className={
                  "w-full px-[1vw] py-[1vh] rounded-lg bg-slate-800 placeholder-slate-400 " +
                  (passwordError ? "text-red-500" : "text-white")
                }
              />
              {passwordError && (
                <div className="text-left text-red-500 px-2 pt-1">
                  Password needs to be at least 8 characters long
                </div>
              )}
            </div>
            <Button
              type="submit"
              className="w-full px-[1vw] py-[1vh]  rounded-lg bg-green-400 text-slate-900 font-semibold hover:bg-green-300 transition"
            >
              <CiLogin className="w-4 h-4 mr-2" /> Sign Up
            </Button>
            {signUpError && (
              <div className="text-center text-red-500 px-2 pt-1">
                Error signing up
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
            Already have an account?{" "}
            <Link href="/login" className="text-green-400 underline">
              Log in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
