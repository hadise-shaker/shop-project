import React from "react";
import Men from "./Men";
import Electronic from "./Electronic";
import Jweri from "./Jweri";
import Electronicis from "./Electronicis";
import Women from "./Women";
import LapTop from "./LapTop";
const routes = [
  {
    path: "/categorylist/لباس مردانه",
    exact: true,
    name: "لباس مردانه",
    toolbar: () => <p>Invoices</p>,
    main: () => <Men />,
  },
  {
    path: "/categorylist/مانیتور",
    name: "مانیتور",
    toolbar: () => <p>Purchase Orders</p>,
    main: () => <Electronic />,
  },
  {
    path: "/categorylist/لباس زنانه",
    name: "لباس زنانه",
    toolbar: () => <p>Purchase Orders</p>,
    main: () => <Women />,
  },
  {
    path: "/categorylist/جواهرات",
    name: "جواهرات",
    toolbar: () => <p>Purchase Orders</p>,
    main: () => <Jweri />,
  },
  {
    path: "/categorylist/لپتاپ",
    name: "لپتاپ",
    toolbar: () => <p>Purchase Orders</p>,
    main: () => <LapTop />,
  },
  {
    path: "/categorylist/الکترونیک",
    name: "الکترونیک",
    toolbar: () => <p>Purchase Orders</p>,
    main: () => <Electronicis />,
  },
];

export default routes;
