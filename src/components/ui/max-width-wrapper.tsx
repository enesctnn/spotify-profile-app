import { ReactNode } from 'react';
import { cn } from '../../lib/utils';

export const MaxWidthWrapper = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => (
  <div
    className={cn('mx-auto w-full max-w-screen-2xl px-2.5 md:px-10', className)}
  >
    {children}
  </div>
);
