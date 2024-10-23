import clsx from "clsx";
import { FC } from "react";

const AppLogo: FC<{ className: string }> = ({ className }) => {
  return (
    <div className={clsx("flex items-center gap-2 text-2xl", className)}>
      <div className="font-comfortaa font-semibold">
        Ises
        <span className="text-theme_blue">.</span>
      </div>
    </div>
  );
};
export default AppLogo;
