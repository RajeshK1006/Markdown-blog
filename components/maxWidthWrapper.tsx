import { cn } from "@/lib/utils";
import React from "react";

interface maxWidthWrapper {
  children: React.ReactNode;
}

const maxWidthWrapper = ({ children }: maxWidthWrapper) => {
  return (
    <div className={cn("mx-auto max-w-screen-xl w-full my -12")}>
      {children}
    </div>
  );
};

export default maxWidthWrapper;
