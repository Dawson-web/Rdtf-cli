"use client";

import { useState } from "react";
import { NavigationMenuItem } from "@radix-ui/react-navigation-menu";
import clsx from "clsx";
import { ToggleLeft, ToggleRight } from "lucide-react";
export const DarkMode = () => {
  const [dark, setDark] = useState<boolean>(true);

  return (
    <NavigationMenuItem
      className={clsx(
        " px-10 gap-8  group  h-14  flex items-end  bg-background dark:bg-gray-900 text-md font-semibold	 cursor-pointer "
      )}
    >
      <div
        className="text-nowrap flex gap-8"
        onClick={() => {
          setDark(!dark);
          localStorage.setItem("theme", dark ? "light" : "dark");
          if (
            dark ||
            (!("theme" in localStorage) &&
              window.matchMedia("(prefers-color-scheme: dark)").matches)
          ) {
            document.documentElement.classList.add("dark");
          } else {
            document.documentElement.classList.remove("dark");
          }
        }}
      >
        {!dark ? <ToggleRight /> : <ToggleLeft />}
        暗色模式
      </div>
    </NavigationMenuItem>
  );
};
