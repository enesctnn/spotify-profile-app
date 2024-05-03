import * as React from 'react';
import { MaxWidthWrapper } from './max-width-wrapper';
import { cn } from '../../lib/utils';

interface CardProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  maxHeightScreen?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ maxHeightScreen, children, className, ...props }, ref) => (
    <div
      {...props}
      ref={ref}
      className="w-full overflow-y-auto rounded-md bg-spotify-gray px-10 py-6"
      id="card"
    >
      <MaxWidthWrapper
        className={cn(className, !!maxHeightScreen && ' h-full')}
      >
        {children}
      </MaxWidthWrapper>
    </div>
  )
);
