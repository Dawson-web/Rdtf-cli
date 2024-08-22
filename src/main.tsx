import { Routes } from "@generouted/react-router/lazy";
import "@mantine/notifications/styles.css";
import "@mantine/core/styles.css";
import "./index.css";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import React from "react";
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineProvider>
      <Notifications position="top-center" />
      <Routes />
    </MantineProvider>
  </React.StrictMode>
);
