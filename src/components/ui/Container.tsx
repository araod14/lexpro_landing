import type { HTMLAttributes } from "react";

type ContainerProps = HTMLAttributes<HTMLDivElement>;

export function Container({ className = "", children, ...rest }: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8 ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}
