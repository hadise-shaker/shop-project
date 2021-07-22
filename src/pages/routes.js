import React from "react";
import Men from "./Men";
import Electronic from "./Electronic";
import Jweri from "./Jweri";
import Electronicis from "./Electronicis";
import Women from "./Women";
import LapTop from "./LapTop";
const routes = [
  {
    path: "/test",
    exact: true,
    name: "لباس مردانه",
    toolbar: () => <p>Invoices</p>,
    main: () => <Men />,
  },
  {
    path: "/test/الکترونیکی",
    name: "الکترونیکی",
    toolbar: () => <p>Purchase Orders</p>,
    main: () => <Electronic />,
  },
  {
    path: "/test/لباس زنانه",
    name: "لباس زنانه",
    toolbar: () => <p>Purchase Orders</p>,
    main: () => <Women />,
  },
  {
    path: "/test/جواهرات",
    name: "جواهرات",
    toolbar: () => <p>Purchase Orders</p>,
    main: () => <Jweri />,
  },
  {
    path: "/test/لپتاپ",
    name: "لپتاپ",
    toolbar: () => <p>Purchase Orders</p>,
    main: () => <LapTop />,
  },
  {
    path: "/test/الکترونیک",
    name: "الکترونیک",
    toolbar: () => <p>Purchase Orders</p>,
    main: () => <Electronicis />,
  },
];

export default routes;
