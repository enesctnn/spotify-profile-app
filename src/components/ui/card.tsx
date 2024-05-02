import * as React from 'react';
import { cn } from '../../lib/utils';

export const Card = React.forwardRef<
  HTMLDivElement,
  React.HtmlHTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    {...props}
    ref={ref}
    className={cn('w-full rounded-md bg-spotify-gray px-10 py-6', className)}
  />
));
