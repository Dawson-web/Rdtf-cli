import clsx from "clsx";
import NavMenu from "../../components/nav_menu";
import { themeConfig } from "../../config";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className={clsx("flex flex-col  sm:flex-row  w-full   ")}>
      <NavMenu
        options={themeConfig.menu.options}
        darkMode={themeConfig.menu.darkMode}
        avatar_show={themeConfig.menu.avatar_show}
      />
      <main
        className={clsx(
          "w-[clac(100vw-1rem] sm:w-[100vw] p-[1rem]  flex flex-col items-center  bg-gray-200 dark:bg-gray-800 min-h-screen"
        )}
      >
        <Outlet />
      </main>
    </div>
  );
}
