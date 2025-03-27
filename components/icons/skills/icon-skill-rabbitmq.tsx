import * as React from "react";

import { cn } from "@/lib/utils";

export const IconSkillRabbitmqDark = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      {...props}
      className={cn("icon-[skill-icons--rabbitmq-dark]", className)}
    ></span>
  );
};

export const IconSkillRabbitmqLight = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      {...props}
      className={cn("icon-[skill-icons--rabbitmq-light]", className)}
    ></span>
  );
};
