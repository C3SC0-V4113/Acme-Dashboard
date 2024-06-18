import { Metadata, NextPage } from 'next';

interface Props {}

export const metadata: Metadata = {
  title: 'Customers',
};

const Page: NextPage<Props> = ({}) => {
  return <p>Customers Page</p>;
};

export default Page;
