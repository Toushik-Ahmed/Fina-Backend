import LeftNavbar from './LeftNavbar';

import AccountstopNavbar from './AccountsTopNavbar';

type Props = {};

function Accounts({}: Props) {
  return (
    <div className="flex">
      <div className="w-20vw">
        <LeftNavbar />
      </div>
      <div className="w-full">
        <AccountstopNavbar />
      </div>
    </div>
  );
}

export default Accounts;
