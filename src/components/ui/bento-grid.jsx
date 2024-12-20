import { cn } from "../../utils/cn";
import React from "react";

export const BentoGrid = ({ className, children }) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[15rem] grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({ className, title, description, header, icon }) => {
  return (
    <div
  className={cn(
    "relative row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 justify-between flex flex-col space-y-4 font-hamlin",
    className
  )}
  style={{ border: '2px solid black' }}
>
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        <div className="flex justify-end">
          <div className="bg-black p-2 rounded">{icon}</div>
        </div>
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">{title}</div>
        {/* <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">{description}</div> */}
      </div>
    </div>
  );
};
