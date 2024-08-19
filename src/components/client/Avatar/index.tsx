"use client";

import clsx from "clsx";
import React from "react";

export default function Avatar(props: any) {
  const { avatar_url } = props;

  return (
    <div className={clsx("w-[90px] h-[90px]  relative ")}>
      <img
        src={avatar_url || "https://www.betula.space/images/avatar.png"}
        alt="avatar"
        className="rounded-full  "
      />
      <div className="bg-green-500 border-white border-4 rounded-full w-[20px] h-[20px] absolute bottom-[0px] right-[0px]"></div>
    </div>
  );
}
