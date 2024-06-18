import { TableRowSkeleton } from '@/app/ui/skeletons';
import { Metadata, NextPage } from 'next';
import { Suspense } from 'react';
import Table from '@/app/ui/customers/table';
import { fetchFilteredCustomers } from '@/app/lib/data';

interface Props {
  searchParams?: {
    query?: string;
    page?: string;
  };
}

export const metadata: Metadata = {
  title: 'Customers',
};

const Page: NextPage<Props> = async ({ searchParams }) => {
  const query = searchParams?.query || '';

  const customers = await fetchFilteredCustomers(query);
  return (
    <div className="w-full">
      <Suspense fallback={<TableRowSkeleton />}>
        <Table customers={customers} />
      </Suspense>
    </div>
  );
};

export default Page;
