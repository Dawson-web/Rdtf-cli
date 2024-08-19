"use client";
import Menu from "@/components/client/Menu";
import clsx from "clsx";
import { useState } from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <main
      className={clsx(
        "flex flex-col  sm:flex-row  w-full  overflow-x-hidden ",
        {
          "h-screen": open,
        }
      )}
    >
      <Menu open={open} setOpen={setOpen} className="sm:w-[30vw] w-screen" />

      <section
        className={clsx(
          " grow w-screen sm:w-[70vw]  flex flex-col items-center  bg-gray-200 dark:bg-gray-900 min-h-screen"
        )}
      >
        {children}
      </section>
    </main>
  );
}
