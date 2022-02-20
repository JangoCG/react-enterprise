import React, { forwardRef, HTMLProps, ReactNode } from "react";
import { Helmet } from "react-helmet-async";

type Props = {
  children?: ReactNode;
  title?: string;
} & HTMLProps<HTMLDivElement>;

//  page 106... check this agai
// this is used for styles which we use on all components?
const Page = forwardRef<HTMLDivElement, Props>(
  // ref gives direkt access to dom element
  ({ children, title = "", ...rest }, ref) => {
    return (
      <div ref={ref as any} {...rest}>
        <Helmet>
          <title>{title}</title>
        </Helmet>
        {children}
      </div>
    );
  }
);
export default Page;
