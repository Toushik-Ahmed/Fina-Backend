import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CardWithForm } from '../addCard/CardWithForm';

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
        <TabsTrigger value="addButton" className="flex-grow">
          <Button className="bg-green-600 text-white" variant="outline">
            Add account
          </Button>
        </TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        Make changes to your account here.
      </TabsContent>
      <TabsContent value="transaction">
        <div>transaction tab </div>
      </TabsContent>

      <TabsContent value="categories">Categories</TabsContent>
      <TabsContent value="addButton">
        <CardWithForm  />
      </TabsContent>
    </Tabs>
  );
}

export default AccountstopNavbar;
