import HomePage from '@/components/homepage/HomePage';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { IoIosRocket } from 'react-icons/io';
import Logo from '../assets/logo.png';

type Props = {};

const page = (props: Props) => {
  return (
    <div className="bg-[#0f1111] h-fit p-4">
      <div className="flex justify-between items-start fixed top-0 left-0 right-0 p-4 bg-transparent backdrop-blur-[2px]">
        <div className="flex items-center gap-2 ">
          <Image
            width={64}
            height={64}
            src={Logo}
            alt="Fina Logo"
            className="rounded"
          />
          <div className="text-4xl font-sans font-bold text-white">Fina</div>
        </div>
        <div className=" flex justify-center pl-4 ">
          <HomePage />
        </div>
        <div className="flex gap-4">
          <Link href="/login">
            <Button
              className="bg-inherit text-white hover:text-[#3ef194]"
              variant="outline"
            >
              Log In
            </Button>
          </Link>
          <Link href="/signup">
            <Button
              type="submit"
              className="bg-[#3ef194] gap-2"
              variant="outline"
            >
              <IoIosRocket className="text-black" />
              Get Started
            </Button>
          </Link>
        </div>
      </div>
      <div className="flex justify-center items-center mt-[10vh]">
        <div className="w-fit p-1 text-white border-2 border-[#3ef194] rounded-2xl">
          For those who care about their future
        </div>
      </div>
      <div className="flex justify-center items-center mt-[10vh]">
        <div className="w-fit p-1 text-white text-6xl text-center font-extrabold">
          <p>Build Your</p>
          <p>Own Tracking</p>
          <p>System</p>
        </div>
      </div>

      <div className="flex justify-center mt-[4vh]">
        <div className="flex-col text-center">
          <Link href="/signup">
            <Button
              className="bg-[#3ef194] gap-2 p-[2vw] text-2xl"
              variant="outline"
            >
              <IoIosRocket className="text-black" />
              Get Started For Free
            </Button>
          </Link>
          <p className="text-white mt-4">no credit card required</p>
        </div>
      </div>
      <div className="flex justify-center items-center mt-[10vh] mb-[5vh]">
        <div className="w-[70vw] p-1  rounded-2xl flex-col text-center space-y-4">
          <div className="text-[#3ef194] font-medium text-xl">How It Works</div>
          <div className="text-white text-6xl">Enjoy Peace Of Mind</div>
          <div className="text-white text-xl">
            <div>Build your own custom tracking system once,</div>
            <div>enjoy financial clarity forever.</div>
          </div>
          <div className="text-white flex justify-between  gap-10">
            <div>
              <div className="text-8xl">1</div>
              <div className="text-2xl">Add</div>
              <div>
                Connect live data from 12,000+ financial institutions &
                integrations or import your data manually.
              </div>
            </div>
            <div>
              <div className="text-8xl">2</div>
              <div className="text-2xl">Build</div>
              <div>
                Set categories, rules, & clean transactions with ease. Build
                custom tracking scenarios with unique formulas.
              </div>
            </div>
            <div>
              <div className="text-8xl">3</div>
              <div className="text-2xl">share</div>
              <div>
                Publish your financial tracking system and help others manage
                their money how you do. Fina is like lego blocks for your
                finances.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="features"
        className="flex justify-center items-center mt-[10vh] mb-[5vh]"
      >
        <div className="w-[70vw] p-1  rounded-2xl flex-col text-center space-y-4">
          <div className="text-[#3ef194] font-medium text-xl">Features</div>
          <div className="text-white text-6xl">
            <div>The Pursuit Of </div>
            <div>Financial Freedom</div>{' '}
          </div>
          <div className="text-white text-xl ">
            <div>No matter where you are on your journey, Fina can help.</div>
          </div>
          <div className="text-white flex justify-between  gap-10">
            <div className="bg-white text-black p-4 max-w-[25vw] h-fit">
              <div className="text-2xl font-bold ">
                Unlimited Custom Categories
              </div>

              <div className="mt-4">
                Create as many categories as you need! Don't worry, we have
                emojis to give them some flare
              </div>
            </div>

            <div className="bg-white text-black p-4 max-w-fit ">
              <div className="text-2xl font-bold">
                Flexible Budgeting & Scenario Planning
              </div>

              <div className="mt-4">
                Create budgets or forecasts in ways that match your lifestyle.
                Fina supports all kinds of unique budgeting scenarios from
                simple budgets, to zero-based, rollovers, and more. You can even
                set budgets and goals for custom metrics beyond categories. Get
                any level of insight you need based on your current stage of
                life.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-[10vh] mb-[5vh]">
        <div className="w-[70vw] p-1  rounded-2xl flex-col text-center space-y-4">
          <div className="text-[#3ef194] font-medium text-xl">Why Fina?</div>
          <div className="text-white text-6xl">
            <div>The Pursuit Of </div>
            <div>Financial Freedom</div>{' '}
          </div>
          <div className="text-white text-xl ">
            <div>No matter where you are on your journey, Fina can help.</div>
          </div>
          <div className="text-white flex justify-between  gap-10">
            <div className="bg-white text-black p-4">
              <div className="text-2xl font-bold ">
                Unlimited Custom Categories
              </div>

              <div className="mt-4">
                Create as many categories as you need! Don't worry, we have
                emojis to give them some flare
              </div>
            </div>

            <div className="bg-white text-black p-4">
              <div className="text-2xl font-bold">
                Flexible Budgeting & Scenario Planning
              </div>

              <div className="mt-4">
                Create budgets or forecasts in ways that match your lifestyle.
                Fina supports all kinds of unique budgeting scenarios from
                simple budgets, to zero-based, rollovers, and more. You can even
                set budgets and goals for custom metrics beyond categories. Get
                any level of insight you need based on your current stage of
                life.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="testimonial"
        className="flex justify-center items-center mt-[10vh] mb-[5vh]"
      >
        <div className="w-[70vw] p-1  rounded-2xl flex-col text-center space-y-4">
          <div className="text-[#3ef194] font-medium text-xl">Testimonial</div>
          <div className="text-white text-6xl">
            <div>What The People Say</div>{' '}
          </div>
          <div className="text-white text-xl">
            <div>Join a community of like-minded individuals.</div>
          </div>
          <div className="text-white flex justify-around  gap-10">
            <div className="bg-black text-black bg-[#0f1111] border-4 max-w-[20vw]">
              {/* <div className="p-4"> */}
              <div className=" text-white p-4">
                Tracking my money helped me go from $260,000 debt to millionaire
                in 10 years. Fina is my new favorite financial tool.
              </div>
              <div className="bg-white mt-4 font-bold">
                {' '}
                <div>-Cori Arnold </div>
                <div>@iamcoriarnold</div>
                {/* </div> */}
              </div>
            </div>

            <div className="bg-black text-black bg-[#0f1111] border-4 max-w-[20vw]">
              {/* <div className="p-4"> */}
              <div className=" text-white p-4">
                It’s not about what you make, it’s about what you keep. I've
                been loving Fina so far.
              </div>
              <div className="bg-white mt-4 font-bold">
                {' '}
                <div>-Dividend Hero </div>
                <div>@HeroDividend</div>
                {/* </div> */}
              </div>
            </div>
          </div>
          <div className="text-white flex justify-around  gap-10">
            <div className="bg-black text-black bg-[#0f1111] border-4 max-w-[20vw]">
              {/* <div className="p-4"> */}
              <div className=" text-white p-4">
                I went from never tracking my finances to checking Fina all the
                time. I feel so much more in control of my money now.
              </div>
              <div className="bg-white mt-4 font-bold">
                {' '}
                <div>-Matt King </div>
                <div>@mattking20</div>
                {/* </div> */}
              </div>
            </div>

            <div className="bg-black text-black bg-[#0f1111] border-4 max-w-[20vw]">
              {/* <div className="p-4"> */}
              <div className=" text-white p-4">
                I just started using Fina and it's amazing! I've been wanting to
                create a budget and this is the perfect tool for it.
              </div>
              <div className="bg-white mt-4 font-bold">
                {' '}
                <div>-Tommy Guta </div>
                <div>@tommyguta</div>
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
