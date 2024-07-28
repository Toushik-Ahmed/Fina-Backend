import CashOverFlow from '@/components/cashOverflow/CashOverFlow';

type Props = {};

const page = (props: Props) => {
  return (
    <div className='m-10 flex flex-col justify-center items-center text-center' >
      <div className='font-bold mb-10'>Here some  graph to help you visualize your exnpenses</div>
      <CashOverFlow />
    </div>
  );
};

export default page;
