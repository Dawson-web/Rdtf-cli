import { themeConfig } from "../../config";

interface OptionData {
  name: string;
  value: string;
  icon: JSX.Element;
}

export default function ProfileCard() {
  return (
    <main className=" gap-4  shadow-xl sm:mt-[8px] mt-[40px]">
      {themeConfig.profile.map((item: OptionData, index) => {
        return (
          <p className=" flex gap-2 items-end w-[260px]" key={index}>
            {item.icon}
            {item.name}：{item.value}
          </p>
        );
      })}
    </main>
  );
}
