import React from "react";
import Men from "./Men";
import Electronic from "./Electronic";
import Jweri from "./Jweri";
import Electronicis from "./Electronicis";
import Women from "./Women";

const routes = [
  {
    path: "/AllProductsInGroup/لباس مردانه",
    exact: true,
    name: "لباس مردانه",
    toolbar: () => <p>Invoices</p>,
    main: () => <Men />,
  },
  {
    path: "/AllProductsInGroup/الکترونیکی",
    name: "الکترونیکی",
    toolbar: () => <p>Purchase Orders</p>,
    main: () => <Electronic />,
  },
  {
    path: "/AllProductsInGroup/لباس زنانه",
    name: "لباس زنانه",
    toolbar: () => <p>Purchase Orders</p>,
    main: () => <Women />,
  },
  {
    path: "/AllProductsInGroup/جواهرات",
    name: "جواهرات",
    toolbar: () => <p>Purchase Orders</p>,
    main: () => <Jweri />,
  },
  /*   {
    path: "/AllProductsInGroup",
    name: "لباس مردانه",
    toolbar: () => <p>Purchase Orders</p>,
    main: () => <Men />,
  }, */
  {
    path: "/AllProductsInGroup/الکترونیک",
    name: "الکترونیک",
    toolbar: () => <p>Purchase Orders</p>,
    main: () => <Electronicis />,
  },
];

export default routes;
