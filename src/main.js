import "./styles/main.pcss";

if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

import "slick-carousel";
import "./scripts/slider";
import "./scripts/humburger-menu";