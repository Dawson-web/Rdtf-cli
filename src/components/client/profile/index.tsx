"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { themeConfig } from "@/config";

interface OptionData {
  name: string;
  value: string;
  icon: JSX.Element;
}

export default function ProfileCard() {
  return (
    <main className=" gap-4  shadow-xl sm:mt-[8px] mt-[40px]">
      <Card className="cursor-default ">
        <CardHeader>
          <CardTitle className="flex flex-row items-center sm:gap-8 gap-2 text-zinc-700 flex-wrap"></CardTitle>
        </CardHeader>
        <CardContent
          className="flex gap-x-10 gap-y-2 text-zinc-500  text-sm flex-wrap 
"
        >
          {themeConfig.profile.map((item: OptionData, index) => {
            return (
              <p className=" flex gap-2 items-end w-[260px]" key={index}>
                {item.icon}
                {item.name}：{item.value}
              </p>
            );
          })}
        </CardContent>
      </Card>
    </main>
  );
}
