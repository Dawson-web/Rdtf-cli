import { IWSMessage } from "@/types/websocket";
import clsx from "clsx";
import { FC, useMemo, useState } from "react";

let time: NodeJS.Timeout | null = null;

const ScoketMessage: FC<{
  message: IWSMessage | undefined;
  className?: string;
}> = ({ message, className }) => {
  const [show, setShow] = useState(false);
  useMemo(() => {
    setShow(true);
    if (!time) {
      time = setTimeout(() => {
        setShow(false);
      }, 2000);
    } else {
      clearTimeout(time);
      time = setTimeout(() => {
        setShow(false);
      }, 2000);
    }
  }, [message]);
  return (
    <div
      className={clsx(
        "flex items-center justify-center w-80 h-10 bg-theme_gray rounded-md shadow-lg z-50 overflow-hidden ",
        className,
        {
          "transition-[width] duration-500 ease-in-out w-80 h-10 border-[1px] border-theme_zinc":
            show,
          "transition-[width] duration-400 ease-in-out w-0 ": !show,
        }
      )}
    >
      {show && message?.content}
    </div>
  );
};
export default ScoketMessage;
