import * as React from 'react';
import { cn } from '../../lib/utils';
import { MaxWidthWrapper } from './max-width-wrapper';

interface CardProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  maxHeightScreen?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ maxHeightScreen, children, className, ...props }, ref) => (
    <div
      {...props}
      ref={ref}
      className="w-full rounded-md bg-spotify-gray py-6  overflow-y-auto"
      id="card"
    >
      <MaxWidthWrapper
        className={cn(
          className,
          !!maxHeightScreen && 'h-full'
        )}
      >
        {children}
      </MaxWidthWrapper>
    </div>
  )
);
