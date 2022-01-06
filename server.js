import express from "express";
import path from "path";
import { router } from "./public/router/router.js";

const app = express();
const port = 8080;
app.use(express.static(path.resolve("public")));
app.use("/", router);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
