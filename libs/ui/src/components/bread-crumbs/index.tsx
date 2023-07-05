import { HomeIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export type TBreadCrumb = {
  title: string;
  href: string;
};

interface Props {
  items: (string | TBreadCrumb)[];
}

const isBreadCrumb = (item: string | TBreadCrumb): item is TBreadCrumb => {
  return typeof item !== 'string';
};
export const BreadCrumbs = ({ items }: Props) => {
  return (
    <div className="container py-5 flex items-center gap-3">
      <Link href="/" className="text-primary">
        <HomeIcon className="w-6 h-6" />
      </Link>
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-3">
          {items.length - 1 === index && typeof item === 'string' ? (
            <>
              <div className="text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
              <p className="text-gray-600 font-medium">{item}</p>
            </>
          ) : (
            <>
              <div className="text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
              {isBreadCrumb(item) && (
                <Link href={item.href} className="text-primary font-medium">
                  {item.title}
                </Link>
              )}
            </>
          )}
        </div>
      ))}
    </div>
  );
};
