import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

type Props = {};

function AccountstopNavbar({}: Props) {
  return (
    <Tabs defaultValue="account" className="w-full">
      <TabsList className="w-full">
        <TabsTrigger value="account" className="flex-grow">
          Account
        </TabsTrigger>
        <TabsTrigger value="transaction" className="flex-grow">
          Transactions
        </TabsTrigger>
        <TabsTrigger value="categories" className="flex-grow">
          Categories
        </TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        Make changes to your account here.
      </TabsContent>
      <TabsContent value="transaction">
        <div>transaction tab </div>
        <div>transaction tab </div>
        <div>transaction tab </div>
        <div>transaction tab </div>
        <div>transaction tab </div>
      </TabsContent>
      <TabsContent value="categories">Categories</TabsContent>
    </Tabs>
  );
}

export default AccountstopNavbar;
