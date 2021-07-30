import React from "react";
import ProductCategory from "../pages/Categories/ProductCategory";
import LapTop from "../pages/Categories/LapTop";
/* import LapTop from "../pages/Categories/LapTop"; */
import Monitor from "../pages/Categories/Monitor";
import Women from "../pages/Categories/Women";

const routes = [
  {
    path: "/categorylist/لباس مردانه",
    exact: true,
    name: "لباس مردانه",
    sub: ["تیشرت ", "شلوار", "کت مردانه", "ساعت"],
    /*     toolbar: () => <p>Invoices</p>,
    main: () => <Men />, */
  },
  {
    path: "/categorylist/لپتاپ",
    name: "لپتاپ",
    sub: ["ایسر ", "ایسوس", "لنوو "],
    /*     toolbar: () => <p>Purchase Orders</p>,
    main: () => <LapTop />, */
  },
  {
    path: "/categorylist/لباس زنانه",
    name: "لباس زنانه",
    sub: ["تیشرت ", "شلوار", "کت زنانه"],
    /*     toolbar: () => <p>Purchase Orders</p>,
    main: () => <Women />, */
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
    /*     toolbar: () => <p>Purchase Orders</p>,
    main: () => <Monitor />, */
  },
];

export default routes;
