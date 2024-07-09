type Props = {};

function SignUp({}: Props) {
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
          <form className="w-full">
            <div className="my-[2vh] font-sans w-full">
              <input
                type="text"
                placeholder="User Name"
                className="w-full px-[1vw] py-[1vh] rounded-lg bg-slate-800 text-white placeholder-slate-400 "
              />
            </div>
            <div className="my-[2vh] font-sans w-full">
              <input
                type="text"
                placeholder="Email address"
                className="w-full px-[1vw] py-[1vh] rounded-lg bg-slate-800 text-white placeholder-slate-400 "
              />
            </div>
            <div className="my-[2vh] font-sans w-full">
              <input
                type="password"
                placeholder="Password"
                className="w-full px-[1vw] py-[1vh] rounded-lg bg-slate-800 text-white placeholder-slate-400 "
              />
            </div>
            <button className="w-full px-[1vw] py-[1vh]  rounded-lg bg-green-400 text-slate-900 font-semibold hover:bg-green-300 transition">
              Sign Up
            </button>
          </form>
          <div className="text-slate-400 text-xs mt-[2vh]">
            By clicking the button above, you agree to our{' '}
            <a href="#" className="text-green-400 underline">
              Terms of Service
            </a>{' '}
            and{' '}
            <a href="#" className="text-green-400 underline">
              Privacy Policy
            </a>
          </div>
          <div className="text-slate-400 text-sm mt-[2vh]">
            Already have an account?{' '}
            <a href="#" className="text-green-400 underline">
              Log in
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
