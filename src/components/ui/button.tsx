import * as React from 'react';
import { cn } from '../../lib/utils';

export const Button = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => (
  <button
    {...props}
    ref={ref}
    className={cn(
      'text-md whitespace-nowrap rounded-full border bg-spotify-gray px-7 py-3 text-center text-lg font-bold text-white shadow-md transition-all duration-500 hover:bg-white hover:text-black uppercase',
      className
    )}
  />
));
