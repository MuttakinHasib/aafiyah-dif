import Image from 'next/image';
import Link from 'next/link';
import { BreadCrumbs } from '@aafiyah/ui';

const NotFoundScreen = () => {
  return (
    <>
      <BreadCrumbs items={['404']} />
      <div className="container py-16 flex flex-col gap-8 items-center justify-center">
        <div className="max-w-lg mx-auto relative h-80 w-full">
          <Image src="/images/404.svg" alt="" fill />
        </div>
        <h2 className="text-lg md:text-3xl text-center">
          The page you&apos;ve requested is not available
        </h2>
        <Link
          href="/"
          className="py-3 px-8 text-white bg-primary font-medium rounded"
        >
          Back to home
        </Link>
      </div>
    </>
  );
};

export default NotFoundScreen;
