import { Link } from "react-router-dom";

export default function Page() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="text-2xl sm:text-4xl font-bold flex gap-2 flex-col p-8 bg-gray-100 rounded-md ">
          <h1 className="text-blue-500 ">Rdtf.</h1>
          <h1>基于Vite的快速开发模板</h1>
          <h1>旨在低代码实现网页构建</h1>
          <ul className="text-sm mt-[10px] sm:text-lg font-medium text-gray-500">
            <li>— 快速构建</li>
            <li>— 功能丰富</li>
            <li>— 双端适配</li>
            <li>— 高度自定义</li>
            <li>— 高度适配的深色模式</li>
          </ul>
          <div className="text-sm mt-[10px] sm:text-xl font-medium text-gray-700 flex gap-2">
            页面跳转：
            <Link
              to={"/login"}
              className="px-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              登录
            </Link>
            <Link
              to={"/register"}
              className="px-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              注册
            </Link>
            <Link
              to={"/seekback"}
              className="px-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              找回
            </Link>
            <Link
              to={"/home"}
              className="px-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              首页
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
