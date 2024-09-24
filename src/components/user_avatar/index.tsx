"use client";

import clsx from "clsx";
import { apiConfig } from "../../config";
import { FC } from "react";

interface Props {
  src?: string;
  size: "small" | "medium" | "large";
  className?: string;
}

 const UserAvatar:FC<Props> = ({ src, size, className }) =>{
  
  return (
    <div className={className}>
      <div
        className={clsx("relative w-[60px] h-[60px] ", {
          "w-[40px] h-[40px]": size === "small",
          "w-[60px] h-[60px]": size === "medium",
          "w-[80px] h-[80px]": size === "large",
        })}
      >
        <img
          src={apiConfig.baseUrl+src || "https://www.betula.space/images/avatar.png"}
          alt="avatar"
          className="rounded-full  "
        />
        <div
          className={clsx(
            "bg-green-500 border-white border-4 rounded-full w-[20px] h-[20px] absolute bottom-[0px] right-[0px]",
            {
              "w-[12px] h-[12px] border-1": size === "small",
            }
          )}
        ></div>
      </div>
    </div>
  );
}

export default UserAvatar