import Marquee from "react-fast-marquee";
import {
  FaGoogle,
  FaHackerNews,
  FaMicrosoft,
  FaProductHunt,
  FaReddit,
  FaYCombinator,
} from "react-icons/fa";
import { SiTindie } from "react-icons/si";

type Props = {};

const MyMarqueeComponent = (props: Props) => {
  return (
    <div>
      <Marquee>
        <div className="flex items-center gap-14 text-white">
          <div className="flex items-center justify-center">
            <FaReddit size={60} />
            <div className="ml-8 text-2xl">Reddit</div>
          </div>

          <div className="flex items-center justify-center">
            <FaProductHunt size={60} />
            <div className="ml-8 text-2xl">Product Hunt</div>
          </div>

          <div className="flex items-center justify-center">
            <FaGoogle size={60} />
            <div className="ml-8 text-2xl">Google</div>
          </div>

          <div className="flex items-center justify-center">
            <FaMicrosoft size={60} />
            <div className="ml-8 text-2xl">Microsoft</div>
          </div>

          <div className="flex items-center justify-center">
            <FaYCombinator size={60} />
            <div className="ml-8 text-2xl">Y Combinator</div>
          </div>

          <div className="flex items-center justify-center">
            <FaHackerNews size={60} />
            <div className="ml-8 text-2xl">Hacker News</div>
          </div>

          <div className="flex items-center justify-center">
            <SiTindie size={60} />
            <div className="ml-8 text-2xl">Tindie</div>
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default MyMarqueeComponent;
