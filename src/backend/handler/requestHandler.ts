import { RequestHandler } from "express";

export const rootRequestHandler: RequestHandler = (req, res) => {
  res.send("Hello World!");
  console.log("Response sent");
};
