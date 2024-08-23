import clsx from "clsx";
import React from "react";

export default function LinkCard(props: any) {
  const { link, url, descr, name } = props;
  const [isHovered, setIsHovered] = React.useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="mx-auto w-[90%] sm:w-[45%] min-w-[320px]  p-4 rounded-lg shadow-md bg-white dark:bg-gray-900 border-transparent hover:border-blue-600 border-2 hover:shadow-sm transition-all duration-300 ease-in-out"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex  items-center justify-around"
      >
        <aside
          className={clsx("w-[90px] h-[90px]  relative ", {
            "animate-bounce 	": isHovered,
          })}
        >
          <img
            src={url || "https://www.betula.space/images/avatar.png"}
            alt="avatar"
            className="rounded-full"
          />
          <div className="bg-green-500 border-white border-4 rounded-full w-[20px] h-[20px] absolute bottom-[0px] right-[0px]"></div>
        </aside>
        <main className="w-[70%] text-center text-gray-600 font-medium p-2 flex flex-col items-start">
          <div className="text-lg font-bold">{name || "这个人很懒未留名"}</div>
          <div className="text-sm">{descr || "这个人很懒未留简介"}</div>
        </main>
      </a>
    </div>
  );
}
