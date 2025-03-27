import * as React from "react";

import { cn } from "@/lib/utils";

export const IconSkillVuejsDark = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      {...props}
      className={cn("icon-[skill-icons--vuejs-dark]", className)}
    ></span>
  );
};

export const IconSkillVuejsLight = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      {...props}
      className={cn("icon-[skill-icons--vuejs-light]", className)}
    ></span>
  );
};
