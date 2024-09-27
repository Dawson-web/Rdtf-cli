import clsx from "clsx";
import { Outlet, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { IUserFormData } from "@/types/home";
import { getUserInfo } from "@/service/home";
import NavMenu from "@/components/nav_menu";
import Loading from "@/components/loading";
import { themeConfig } from "@/config";

export default function Layout() {
  const navigate = useNavigate();
  const [userFormData, setUserFormData] = useState<IUserFormData>(
    null as unknown as IUserFormData
  );

  useEffect(() => {
    getUserInfo()
      .then((res) => {
        setUserFormData(res.data.data);
      })
      .catch(() => {
        navigate("/login");
      });
  }, []);
  if (!userFormData) return <Loading />;
  return (
    <div className={clsx("flex flex-col  sm:flex-row  w-full   ")}>
      <NavMenu
        options={themeConfig.menu.options}
        darkMode={themeConfig.menu.darkMode}
        avatar_show={themeConfig.menu.avatar_show}
        avatar_src={userFormData.avatar}
      />
      <main
        className={clsx(
          "flex-1 p-[1rem]  flex flex-col items-center  bg-gray-200 dark:bg-gray-800 min-h-screen"
        )}
      >
        <Outlet />
      </main>
    </div>
  );
}
