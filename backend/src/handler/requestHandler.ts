import { RequestHandler } from "express";

export const rootRequestHandler: RequestHandler = (req, res) => {
  res.send("Hello World2!");
  console.log("Response sent");
};
