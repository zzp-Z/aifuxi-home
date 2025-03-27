import * as React from "react";

import { cn } from "@/lib/utils";

export const IconSkillNuxtjsDark = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      {...props}
      className={cn("icon-[skill-icons--nuxtjs-dark]", className)}
    ></span>
  );
};

export const IconSkillNuxtjsLight = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      {...props}
      className={cn("icon-[skill-icons--nuxtjs-light]", className)}
    ></span>
  );
};
