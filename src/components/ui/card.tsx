import * as React from 'react';
import { MaxWidthWrapper } from './max-width-wrapper';

export const Card = React.forwardRef<
  HTMLDivElement,
  React.HtmlHTMLAttributes<HTMLDivElement>
>(({ children, className, ...props }, ref) => (
  <div
    {...props}
    ref={ref}
    className="w-full rounded-md bg-spotify-gray px-10 py-6"
  >
    <MaxWidthWrapper className={className}>{children}</MaxWidthWrapper>
  </div>
));
