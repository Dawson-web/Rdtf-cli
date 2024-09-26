import { useState, useEffect } from "react";
import { NavigationMenuItem } from "@radix-ui/react-navigation-menu";
import clsx from "clsx";
import { ToggleLeft, ToggleRight } from "lucide-react";

function darkFunction(dark: boolean) {
  if (
    dark ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}

export const DarkMode = () => {
  const [dark, setDark] = useState<boolean>(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    darkFunction(dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]); // Add dark to the dependency array

  return (
    <NavigationMenuItem
      className={clsx(
        "px-10 gap-8 group h-14 flex items-end bg-background dark:bg-gray-900 dark:text-gray-600 text-md font-semibold cursor-pointer"
      )}
    >
      <div
        className="text-nowrap flex gap-8"
        onClick={() => {
          setDark((prevDark) => !prevDark); // Use callback to avoid stale closure
        }}
      >
        {!dark ? <ToggleRight /> : <ToggleLeft />}
        暗色模式
      </div>
    </NavigationMenuItem>
  );
};
