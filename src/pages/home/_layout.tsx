import clsx from "clsx";
import NavMenu from "../../components/nav_menu";
import { themeConfig } from "../../config";
import { Outlet } from "react-router-dom";
import { IUserFormData ,IFormContext} from "../../types/home";
import { getUserInfo } from "../../service/home";
import { createContext,useContext,useState,useEffect } from "react";

const FormContext = createContext(null as unknown as IFormContext);
export const useFormContext = () => useContext(FormContext);
export default function Layout() {
  const [userFormData, setUserFormData] = useState<IUserFormData>({
    id: "",
    introduce: "",
    role: 0,
    username: "",
    avatar: "",
    school: "",
    createdAt: "",
    updatedAt: "",
    User: {
        email: ""
    }
})
  const updateFormData = (key: string, data: unknown) => {
    setUserFormData({
      ...userFormData,
      [key]: data,
    });
  };
  useEffect(() => {
    getUserInfo().then((res) => {
      setUserFormData(res.data.data)
      console.log(res.data.data)
    })
  },[])
  return (
    <FormContext.Provider value={{formData:userFormData,updateFormData}}>

    <div className={clsx("flex flex-col  sm:flex-row  w-full   ")}>
      <NavMenu
        options={themeConfig.menu.options}
        darkMode={themeConfig.menu.darkMode}
        avatar_show={themeConfig.menu.avatar_show}
      />
      <main
        className={clsx(
          "w-[clac(100vw-1rem] sm:w-[100vw] p-[1rem]  flex flex-col items-center  bg-gray-200 dark:bg-gray-800 min-h-screen"
        )}
      >
        <Outlet />
      </main>
    </div>
    </FormContext.Provider>

  );
}
