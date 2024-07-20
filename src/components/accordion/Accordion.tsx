import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type Props = {};

const AccordionComp = (props: Props) => {
  return (
    <div>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            Does Fina Store my banking account credentials?
          </AccordionTrigger>
          <AccordionContent>
            No, Fina does not store your banking account credentials. It
            securely interacts with your financial institutions to access
            necessary information without storing sensitive data like your
            banking credentials. This approach helps ensure your financial
            information remains protected and confidential.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            How many bank accounts are Supported?
          </AccordionTrigger>
          <AccordionContent>You can add up to 3 accounts.</AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Is my data safe?</AccordionTrigger>
          <AccordionContent>
            Yes. We never store or share your banking credentials.It's tottaly
            safe
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Can i cancel anytime?</AccordionTrigger>
          <AccordionContent>Yes. You can cancel anytime.</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default AccordionComp;
