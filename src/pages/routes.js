import React from "react";
import Men from "./Men";
import LapTop from "./LapTop";
import Jweri from "./Jweri";
import Monitor from "./Monitor";
import Women from "./Women";
const routes = [
  {
    path: "/categorylist/لباس مردانه",
    exact: true,
    name: "لباس مردانه",
    sub: ["تیشرت ", "شلوار", "کت مردانه", "ساعت"],
    toolbar: () => <p>Invoices</p>,
    main: () => <Men />,
  },
  {
    path: "/categorylist/لپ تاپ",
    name: "لپ تاپ",
    sub: ["ایسر ", "ایسوس", "لنوو "],
    toolbar: () => <p>Purchase Orders</p>,
    main: () => <LapTop />,
  },
  {
    path: "/categorylist/لباس زنانه",
    name: "لباس زنانه",
    sub: ["تیشرت ", "شلوار", "کت زنانه"],
    toolbar: () => <p>Purchase Orders</p>,
    main: () => <Women />,
  },
  /*   {
    path: "/categorylist/جواهرات",
    name: "جواهرات",
    toolbar: () => <p>Purchase Orders</p>,
    main: () => <Jweri />,
  }, */
  {
    path: "/categorylist/مانیتور",
    name: "مانیتور",
    sub: ["ال جی ", "سونی", "سامسونگ "],
    toolbar: () => <p>Purchase Orders</p>,
    main: () => <Monitor />,
  },
];

export default routes;
