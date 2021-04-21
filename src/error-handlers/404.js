"use strict";

module.exports = (req, res, next) => {
  // res.status(404).redirect("https://http.cat/404");
  res.status(404).send('Page Not Found')
  next();
};
