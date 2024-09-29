import clsx from "clsx";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { IUserFormData } from "@/types/user";
import { getUserInfo } from "@/service/user";
import NavMenu from "@/components/nav_menu";
import Loading from "@/components/loading";
import { themeConfig } from "@/config";

export default function Layout() {
  const navigate = useNavigate();
  const location = useLocation(); // 引入 useLocation 钩子

  const [userFormData, setUserFormData] = useState<IUserFormData>(
    null as unknown as IUserFormData
  );
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadings, setIsLoadings] = useState(true);

  useEffect(() => {
    getUserInfo()
      .then((res) => {
        setUserFormData(res.data.data);
      })
      .catch(() => {
        navigate("/login");
      });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, [navigate]);

  useEffect(() => {
    setIsLoadings(true);
    const timer = setTimeout(() => {
      setIsLoadings(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [location]);

  if (isLoading) return <Loading />;

  return (
    <div className={clsx("flex flex-col  sm:flex-row  w-full sm:h-full ")}>
      <NavMenu
        options={themeConfig.menu.options}
        darkMode={themeConfig.menu.darkMode}
        avatar_show={themeConfig.menu.avatar_show}
        avatar_src={userFormData.avatar}
      />
      <main
        className={clsx(
          "flex-1 p-[1rem]  flex flex-col items-center  bg-gray-200 dark:bg-gray-800 min-h-screen h-screen overflow-y-auto mt-[40px] sm:[mt-0]"
        )}
      >
        {isLoadings ? <Loading /> : <Outlet />}
      </main>
    </div>
  );
}
