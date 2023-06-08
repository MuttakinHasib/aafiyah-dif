import React, { useState } from 'react';
import { useMediaQuery } from '@react-hook/media-query';
import { useRouter } from 'next/router';
import Image from 'next/image';

type Props = React.PropsWithChildren<object>;

const AccountLayout = (props: Props) => {
  const isLargeDevice = useMediaQuery('only screen and (min-width: 992px)');
  const [isOpen, setIsOpen] = useState(isLargeDevice);
  const pathname = usePathname

  return (
    <div className="relative container grid lg:grid-cols-12 gap-5 pb-16 items-start">
      <div className="lg:col-span-3">
        <div className="flex px-4 py-2 shadow-box items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="border border-gray-200 p-1 rounded-full">
              <div className="w-10 h-10 rounded-full relative">
                <Image src={user.avatar} alt="" fill className="object-cover" />
              </div>
            </div>
            <div>
              <p className="text-gray-600 text-sm">Hello,</p>
              <h3 className="text-lg font-medium capitalize">{user.name}</h3>
            </div>
          </div>
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="lg:hidden focus:outline-none p-3"
          >
            <MenuIcon className="w-6" />
          </button>
        </div>
        <Transition
          appear={true}
          show={isOpen}
          as="div"
          enter="transition-opacity duration-500 ease-transition"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-500 ease-transition"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          className={`bg-white px-4 pb-6 shadow-box overflow-hidden ${
            !isLargeDevice
              ? 'max-w-[300px] absolute z-10 top-20 left-[15px]'
              : ''
          }`}
        >
          <AccountSidebar />
        </Transition>
      </div>
      <div className="lg:col-span-9">
        <div className="shadow-box p-6">{children}</div>
      </div>
    </div>
  );
};

export default AccountLayout;
