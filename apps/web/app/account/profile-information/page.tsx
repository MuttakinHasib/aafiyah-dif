import { Metadata } from 'next';
import React from 'react';
import ProfileInformation from './profile-information.component';

// export const metadata: Metadata = {
//   title: { absolute: 'Profile Information' },
// };

// export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Profile Information',
};

const Page = () => {
  return <ProfileInformation />;
};

export default Page;
