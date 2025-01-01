const express = require("express");
const path = require("path");

const viewEngine = (app) => {
  app.set("view engine", "ejs");
  app.set("views", "./src/views/");

  //khai bao static file
  app.use(express.static(path.join(__dirname, "../public")));
};

module.exports = viewEngine;
