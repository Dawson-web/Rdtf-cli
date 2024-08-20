"use client";

import { useState } from "react";
import {
  NavigationMenuItem,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import clsx from "clsx";
import { ToggleLeft, ToggleRight } from "lucide-react";
export const DarkMode = (props: any) => {
  const [dark, setDark] = useState<boolean>(true);

  return (
    <NavigationMenuItem
      className={clsx(navigationMenuTriggerStyle(), " cursor-pointer ")}
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
