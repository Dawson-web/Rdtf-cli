"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@radix-ui/react-navigation-menu";
import { useState } from "react";
import { DarkMode } from "./DarkMode";
import { NavOpen } from "./NavOpen";
import UserAvatar from "../user_avatar";
import clsx from "clsx";
import { Link, useFormAction } from "react-router-dom";

interface OptionData {
  name: string;
  herf: string;
  icon: JSX.Element;
}


export default function NavMenu(props: {
  options: OptionData[];
  darkMode: boolean;
  avatar_show?: boolean;
  className?: string;
}) {
  const [open, setOpen] = useState<boolean>(false);
  const [option, setOption] = useState<string>("主页");
  const { options, darkMode, avatar_show } = props;

  // const {formData,setUserFormData} =   useFormContext()


  function menuOption(options: string) {
    setOption(options);
    setTimeout(() => setOpen(false), 400);
  }
  return (
    <div>
      {/* 移动端控制菜单打开按钮 */}
      <NavOpen open={open} setOpen={setOpen} />

      <aside
        className={clsx("bg-white dark:bg-gray-900 ", {
          "sm:relative sm:block  absolute z-50 ": open,
          "sm:relative sm:block  sm:h-full sm:w-auto  w-0 h-0 overflow-hidden":
            !open,
        })}
      >
        <NavigationMenu>
          <NavigationMenuList
            className={clsx(
              " sm:flex flex-col justify-start  sm:h-screen h-0 overflow-hidden pt-[40px] sm:pt-[30px]  bg-white dark:bg-gray-900 ",
              {
                " transition-[height] ease-in-out duration-500  h-screen  w-screen":
                  open,
                " transition-[height] ease-in-out duration-500  h-0  ": !open,
              }
            )}
          >
            {avatar_show && (
              <UserAvatar size="medium" className="mx-auto px-10" />
            )}
            {options.map((item: OptionData, index) => {
              return (
                <NavigationMenuItem
                  onClick={() => menuOption(item.name)}
                  key={index}
                >
                  <Link to={item.herf}>
                    <NavigationMenuLink
                      className={clsx(
                        " px-10 gap-8  group  h-14  flex items-end  bg-background dark:bg-gray-900 text-md font-semibold	 ",
                        {
                          "transition-[transform] duration-300 translate-x-6  border-l-4 border-l-blue-600":
                            option == item.name,
                          "transition-[transform] translate-x-0":
                            option !== item.name,
                        }
                      )}
                    >
                      {item.icon}
                      {item.name}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              );
            })}
            {darkMode && <DarkMode />}
          </NavigationMenuList>
        </NavigationMenu>
      </aside>
    </div>
  );
}
