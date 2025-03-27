import * as React from "react";

import { cn } from "@/lib/utils";

export const IconVscodeGoZero = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      {...props}
      className={cn("icon-[vscode-icons--file-type-goctl]", className)}
    ></span>
  );
};
