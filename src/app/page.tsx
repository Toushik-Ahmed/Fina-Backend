import AccordionComp from "@/components/accordion/Accordion";
import Footer from "@/components/footer/Footer";
import HomePage from "@/components/homepage/HomePage";
import MyMarqueeComponent from "@/components/marquee/Marquee";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { IoIosRocket } from "react-icons/io";
import heroLeft from "../assets/hero-left.svg";
import heroRight from "../assets/hero-right.svg";
import Logo from "../assets/logo.png";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="h-fit bg-[#0f1111] p-4 text-black">
      <div className="fixed left-0 right-0 top-0 z-10 flex items-start justify-between bg-transparent p-4 backdrop-blur-[2px]">
        <div className="flex items-center gap-2">
          <Image
            width={64}
            height={64}
            src={Logo}
            alt="Fina Logo"
            className="rounded"
          />
          <div className="font-sans text-4xl font-bold text-white">Fina</div>
        </div>
        <div className="flex justify-center pl-4">
          <HomePage />
        </div>
        <div className="flex gap-4">
          <Link href="/login">
            <Button className="hover:text-[#3ef194]" variant="outline">
              Log In
            </Button>
          </Link>
          <Link href="/signup">
            <Button
              type="submit"
              className="gap-2 bg-[#3ef194]"
              variant="outline"
            >
              <IoIosRocket className="text-black" />
              Get Started
            </Button>
          </Link>
        </div>
      </div>
      <div className="h-[70vh]">
        <div className="mt-[10vh] flex items-center justify-center">
          <div className="w-fit rounded-2xl border-2 border-[#3ef194] p-2 text-white">
            For those who care about their future
          </div>
        </div>
        <div className="relative mt-[10vh] flex items-center justify-center">
          <div className="max-w-[80vw] p-1 text-center text-[64px] font-extrabold text-white lg:max-w-[45vw] lg:text-[76px]">
            Build Your Own Tracking System
          </div>
          <Image
            className="absolute left-[5vw] top-full lg:left-[22vw]"
            src={heroLeft}
            width={207}
            alt="none"
          />
          <Image
            className="absolute right-[5vw] top-full lg:right-[20vw]"
            src={heroRight}
            width={280}
            alt="none"
          />
        </div>
        <div className="mt-[4vh] flex justify-center">
          <div className="flex-col text-center">
            <Link href="/signup">
              <Button
                className="gap-2 bg-[#3ef194] px-4 py-8 text-2xl"
                variant="outline"
              >
                <IoIosRocket className="text-black" />
                Get Started For Free
              </Button>
            </Link>
            <p className="mt-4 text-white/80">no credit card required</p>
          </div>
        </div>
      </div>
      <MyMarqueeComponent />
      <div className="mb-[5vh] mt-[8vh] flex items-center justify-center">
        <div className="flex-col space-y-4 rounded-2xl p-1 text-center lg:max-w-[50vw]">
          <div className="text-xl font-medium text-[#3ef194]">How It Works</div>
          <div className="text-6xl text-white">Enjoy Peace Of Mind</div>
          <div className="text-xl text-white">
            <div>Build your own custom tracking system once,</div>
            <div>enjoy financial clarity forever.</div>
          </div>
          <div className="grid grid-cols-3 justify-between gap-10 pt-8 text-white">
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
        className="mb-[5vh] flex items-center justify-center pt-[120px]"
      >
        <div className="w-[70vw] flex-col space-y-4 rounded-2xl p-1 text-center">
          <div className="text-xl font-medium text-[#3ef194]">Features</div>
          <div className="text-6xl text-white">
            <div>The Pursuit Of </div>
            <div>Financial Freedom</div>{" "}
          </div>
          <div className="text-xl text-white">
            <div>No matter where you are on your journey, Fina can help.</div>
          </div>
          <div className="flex justify-between gap-10 text-white">
            <div className="rounded bg-white p-4 text-black hover:shadow-md hover:shadow-indigo-500">
              <div className="text-2xl font-bold">
                Unlimited Custom Categories
              </div>

              <div className="mt-4">
                Create as many categories as you need! Don't worry, we have
                emojis to give them some flare
              </div>
            </div>

            <div className="rounded bg-white p-4 text-black hover:shadow-md hover:shadow-indigo-500">
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
      <div className="mb-[5vh] mt-[10vh] flex items-center justify-center">
        <div className="w-[70vw] flex-col space-y-4 rounded-2xl p-1 text-center">
          <div className="text-xl font-medium text-[#3ef194]">Why Fina?</div>
          <div className="text-6xl text-white">
            <div>The Pursuit Of </div>
            <div>Financial Freedom</div>{" "}
          </div>
          <div className="text-xl text-white">
            <div>No matter where you are on your journey, Fina can help.</div>
          </div>
          <div className="flex justify-between gap-10 text-white">
            <div className="rounded bg-white p-4 text-black hover:shadow-md hover:shadow-indigo-500">
              <div className="text-2xl font-bold">
                Set categories by tranasction.
              </div>

              <div className="mt-4">
                Create as many categories as you need! Based on these categories
                you will be able to keep track your money.Based on categories
                you can set your budget.It's very easy to create categories and
                budgets.
              </div>
            </div>

            <div className="rounded bg-white p-4 text-black hover:shadow-md hover:shadow-indigo-500">
              <div className="text-2xl font-bold">
                There are various type of charts also which can help you to
                understand the flow .
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
        className="mb-[5vh] mt-[10vh] flex items-center justify-center"
      >
        <div className="w-[70vw] flex-col space-y-4 rounded-2xl pt-[120px] text-center">
          <div className="text-xl font-medium text-[#3ef194]">Testimonial</div>
          <div className="text-6xl text-white">
            <div>What The People Say</div>{" "}
          </div>
          <div className="text-xl text-white">
            <div>Join a community of like-minded individuals.</div>
          </div>
          <div className="grid grid-cols-[minmax(100px,_350px)_minmax(100px,_350px)] place-content-center gap-10 text-white">
            <div className="flex flex-col justify-between rounded border-4 bg-[#0f1111] bg-black text-black">
              {/* <div className="p-4"> */}
              <div className="p-8 text-white">
                Tracking my money helped me go from $260,000 debt to millionaire
                in 10 years. Fina is my new favorite financial tool.
              </div>
              <div className="mt-4 bg-white p-4 font-bold">
                {" "}
                <div>-Cori Arnold </div>
                <div>@iamcoriarnold</div>
                {/* </div> */}
              </div>
            </div>

            <div className="flex flex-col justify-between rounded border-4 bg-[#0f1111] bg-black text-black">
              {/* <div className="p-4"> */}
              <div className="p-8 text-white">
                It's not about what you make, it's about what you keep. I've
                been loving Fina so far.
              </div>
              <div className="mt-4 bg-white p-4 font-bold">
                {" "}
                <div>-Dividend Hero </div>
                <div>@HeroDividend</div>
                {/* </div> */}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-[minmax(100px,_350px)_minmax(100px,_350px)] place-content-center gap-10 text-white">
            <div className="flex flex-col justify-between rounded border-4 bg-[#0f1111] bg-black text-black">
              {/* <div className="p-4"> */}
              <div className="p-8 text-white">
                I went from never tracking my finances to checking Fina all the
                time. I feel so much more in control of my money now.
              </div>
              <div className="mt-4 bg-white p-4 font-bold">
                {" "}
                <div>-Matt King </div>
                <div>@mattking20</div>
                {/* </div> */}
              </div>
            </div>

            <div className="flex flex-col justify-between rounded border-4 bg-[#0f1111] bg-black text-black">
              {/* <div className="p-4"> */}
              <div className="p-8 text-white">
                I just started using Fina and it's amazing! I've been wanting to
                create a budget and this is the perfect tool for it.
              </div>
              <div className="mt-4 bg-white p-4 font-bold">
                {" "}
                <div>-Tommy Guta </div>
                <div>@tommyguta</div>
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="w-fit flex-col p-10 text-center">
          <div className="text-xl font-medium text-[#3ef194]">FAQ'S</div>
          <div className="mt-[6vh]">
            <div className="text-4xl font-bold text-white">
              Got Any Questions?
            </div>
            <div className="mt-[6vh] flex max-w-[30vw] items-center justify-center bg-white p-4 text-center text-black">
              <AccordionComp />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
