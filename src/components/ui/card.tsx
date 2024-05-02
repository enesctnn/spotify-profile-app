import * as React from 'react';
import { MaxWidthWrapper } from './max-width-wrapper';

interface CardProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  maxHeightScreen?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ maxHeightScreen, children, className, ...props }, ref) => (
    <div
      {...props}
      ref={ref}
      className={`relative w-full overflow-y-auto rounded-md bg-spotify-gray px-10 py-6 ${maxHeightScreen ? ' h-full' : ''}`}
      id="card"
    >
      <MaxWidthWrapper className={className}>{children}</MaxWidthWrapper>
    </div>
  )
);
