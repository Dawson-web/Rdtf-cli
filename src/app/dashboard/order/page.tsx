"use client";

import { RenderComponent } from "@/components/client/RenderComponent";
import { useState } from "react";

export default function Page() {
  const [option, setOption] = useState<
    "AllOrders" | "SendOrders" | "AfterSale"
  >("AllOrders");
  return (
    <main className="flex flex-col w-full h-full items-center gap-4 ">
      <div className="row-span-1  w-[95%]  justify-self-center 	 "></div>
      <RenderComponent component={option} />
    </main>
  );
}