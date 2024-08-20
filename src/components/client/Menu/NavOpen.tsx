"use client";

import clsx from "clsx";
import { AlignLeft, X } from "lucide-react";

export const NavOpen = (props: any) => {
  const { open, setOpen } = props; // Assuming the component prop is a string that represents the component to render
  return (
    <div id="nav" className=" bg-white sm:hidden h-[40px]">
      <div
        className={clsx(
          "flex absolute z-50 top-2 left-4 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200",
          {
            "transition-transform duration-500 rotate-90": open,
            "transition-transform duration-500 rotate-0": !open,
          }
        )}
      >
        <AlignLeft
          className={clsx("absolute", {
            "z-0 transition duration-500	opacity-0  ": open,
            "z-20 transition duration-500	deley-200 opacity-1": !open,
          })}
          onClick={() => setOpen(true)}
        />
        <X
          className={clsx({
            "z-20 transition-opacity duration-500 deley-200	opacity-1": open,
            "transition-opacity duration-500	opacity-0": !open,
          })}
          onClick={() => setOpen(false)}
        />
      </div>
    </div>
  );
};
