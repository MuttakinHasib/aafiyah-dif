import { PlusCircleIcon } from '@heroicons/react/24/outline';
import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';

export const metadata: Metadata = {
  title: 'Manage Addresses',
};
const AddressesPage = () => {
  return (
    <div className="flex gap-10 flex-wrap">
      <Link href='/account/manage-addresses/new' className="border w-[calc((100%_-_32px_-_1px)_/_3)] p-8 grid place-items-center space-y-3">
        <PlusCircleIcon className="w-20 h-20 text-gray-400 stroke-[1px]" />
        <button className="py-2 px-3 bg-gray-100 text-black font-medium">Add New</button>
      </Link>
    </div>
  );
};

export default AddressesPage;
