"use client";
import {
  AlarmClock,
  Calendar,
  Home,
  Link,
  Mail,
  MapPinned,
  PhoneCall,
  ScanEye,
  User,
} from "lucide-react";

export const apiConfig = {
  baseUrl: "http://47.109.106.254:8080",
  unProtectedUrls: [
    "/user/verifyCode",
    "/user/token",
    "/user/register",
    "/user/forgetPassword",
    "/user/avatar",
  ],
};

export const themeConfig = {
  menu: {
    options: [
      {
        name: "用户",
        herf: "/home/me",
        icon: <User />,
      },
      {
        name: "主页",
        herf: "/home/me",
        icon: <Home />,
      },
      {
        name: "友链",
        herf: "/home/link",
        icon: <Link />,
      },
    ], // 菜单配置
    darkMode: true, // 是否开启暗黑模式按钮
    avatar_show: true, // 是否显示头像
  },
  profile: [
    {
      name: "用户名",
      value: "Dawson",
      icon: <User />,
    },
    {
      name: "ID",
      value: "XXXXXXXXX",
      icon: <ScanEye />,
    },
    {
      name: "电话",
      value: "17380333759",
      icon: <PhoneCall />,
    },
    {
      name: "住址",
      value: "成都市锦江区",
      icon: <MapPinned />,
    },
    {
      name: "邮箱",
      value: "3096567831@qq.com",
      icon: <Mail />,
    },
    {
      name: "生日",
      value: "04-21",
      icon: <Calendar />,
    },
  ],
};
