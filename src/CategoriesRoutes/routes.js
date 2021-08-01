import React from "react";

const routes = [
  {
    path: "/categorylist/لباس مردانه",
    exact: true,
    name: "لباس مردانه",
    sub: ["تیشرت ", "شلوار", "کت مردانه", "ساعت"],
  },
  {
    path: "/categorylist/لپتاپ",
    name: "لپتاپ",
    sub: ["ایسر ", "ایسوس", "لنوو "],
  },
  {
    path: "/categorylist/لباس زنانه",
    name: "لباس زنانه",
    sub: ["تیشرت ", "شلوار", "کت زنانه"],
  },

  {
    path: "/categorylist/مانیتور",
    name: "مانیتور",
    sub: ["ال جی ", "سونی", "سامسونگ "],
  },
];

export default routes;
