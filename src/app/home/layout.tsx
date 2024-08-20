"use client";
import NaMenu from "@/components/client/nav_menu";
import { themeConfig } from "@/config";
import clsx from "clsx";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className={clsx("flex flex-col  sm:flex-row  w-full   ")}>
      <NaMenu
        options={themeConfig.menu.options}
        darkMode={themeConfig.menu.darkMode}
        avatar_show={themeConfig.menu.avatar_show}
      />

      <section
        className={clsx(
          "w-[clac(100vw-1rem] sm:w-[100vw] p-[1rem]  flex flex-col items-center  bg-gray-200 dark:bg-gray-800 min-h-screen"
        )}
      >
        {children}
      </section>
    </main>
  );
}
