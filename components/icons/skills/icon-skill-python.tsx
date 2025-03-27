import * as React from "react";

import { cn } from "@/lib/utils";

export const IconSkillPythonDark = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      {...props}
      className={cn("icon-[skill-icons--python-dark]", className)}
    ></span>
  );
};

export const IconSkillPythonLight = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      {...props}
      className={cn("icon-[skill-icons--python-light]", className)}
    ></span>
  );
};
