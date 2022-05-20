import { createClient } from "redis";
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();

const host = process.env.HOST;
const port = process.env.PORT;

const app: Express = express();
const redis = createClient();

redis.on("error", (err) => {
  console.log(err);
});

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.get("/bugs", async (req: Request, res: Response) => {
  // Get all bugs and return here...may want to paginate?
  const bugs = await redis.hGetAll("bugs");

  return bugs;
});

app.listen(port, async () => {
  await redis.connect();
  console.log(`⚡️[server]: Server is running at ${host}:${port}`);
});
