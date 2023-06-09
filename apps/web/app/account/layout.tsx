'use client';

import { startCase } from 'lodash';
import Image from 'next/image';
import React, { useState } from 'react';
import { useMediaQuery } from '@react-hook/media-query';
import { Bars4Icon } from '@heroicons/react/24/outline';
import { Transition } from '@headlessui/react';
import { AccountSidebar, BreadCrumbs } from '@aafiyah/ui';
import { usePathname } from 'next/navigation';
import { useProfileQuery } from '@aafiyah/client';

type Props = React.PropsWithChildren<object>;

const AccountLayout = (props: Props) => {
  const { data } = useProfileQuery();
  const isLargeDevice = useMediaQuery('only screen and (min-width: 992px)');
  const [isOpen, setIsOpen] = useState(isLargeDevice);
  const pathname = usePathname();
  const paths = pathname.split('/');

  if (paths) {
    paths.shift();
  }

  const breadCrumbs = paths.map((path, index) =>
    paths.length - 1 === index
      ? startCase(path)
      : {
          title: startCase(path),
          href: path !== 'account' ? `/account/${path}` : `/${path}`,
        }
  );
  return (
    <React.Fragment>
      <BreadCrumbs items={breadCrumbs} />

      <div className="relative container grid lg:grid-cols-12 gap-5 pb-16 items-start">
        <div className="lg:col-span-3">
          <div className="flex px-4 py-2 shadow-box items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="border border-gray-200 p-1 rounded-full">
                <div className="w-10 h-10 rounded-full relative">
                  {data?.me?.avatar && (
                    <Image
                      src={data?.me.avatar}
                      alt={data?.me.name}
                      fill
                      className="object-cover"
                    />
                  )}
                </div>
              </div>
              <div>
                <p className="text-gray-600 text-sm">Hello,</p>
                <h3 className="text-lg font-medium capitalize">
                  {data?.me.name}
                </h3>
              </div>
            </div>
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="lg:hidden focus:outline-none p-3"
            >
              <Bars4Icon className="w-6" />
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
          <div className="shadow-box p-6">{props.children}</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AccountLayout;
