import * as React from 'react';
import { cn } from '../../lib/utils';

export function Button({
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={cn(
        'text-md whitespace-nowrap rounded-full bg-spotify-green/80 px-7 py-3 text-center font-bold text-white shadow-md transition-all hover:bg-spotify-green',
        className
      )}
    />
  );
}
