import AccountstopNavbar from '@/components/accounts/AccountsTopNavbar';
import LeftNavbar from '@/components/accounts/LeftNavbar';


export default function AccountLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section className='flex'>
      <LeftNavbar />

      <div className='nested-routes flex-grow overflow-x-auto'>{children}</div>
    </section>
  );
}
