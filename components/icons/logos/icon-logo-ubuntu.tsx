import * as React from "react";

import { cn } from "@/lib/utils";

export const IconLogoUbuntu = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span {...props} className={cn("icon-[logos--ubuntu]", className)}></span>
  );
};
