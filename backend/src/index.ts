import { rootRequestHandler } from "#handler/requestHandler.js";
import express from "express";

const app = express();
const port = process.env.PORT ?? "9001";

app.get("/", rootRequestHandler);

app.listen(port, () => {
  console.log(`Listen to port ${port}`);
});
