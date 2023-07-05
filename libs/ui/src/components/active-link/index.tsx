import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { PropsWithChildren } from 'react';
import classnames from 'classnames';

interface Props extends PropsWithChildren<object> {
  href: string;
  className?: string;
}

export const ActiveLink = ({ children, href, className }: Props) => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      scroll={false}
      className={classnames(
        'hover:text-primary',
        pathname === href ? 'text-primary' : 'text-gray-800',
        className
      )}
    >
      {children}
    </Link>
  );
};

