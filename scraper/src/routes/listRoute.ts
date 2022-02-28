import express, { Handler, Response } from "express";

import getList from "../controllers/listController";
import Paste from "../db/models/Schema";
import start from "../scraper";
import { getStats } from "../services/dashboard/stats";
const listRouter = express.Router();
const url =
  "http://strongerw2ise74v3duebgsvug4mehyhlpa7f6kfwnas7zofs3kov7yd.onion/all"; // URL we're scraping

listRouter.get("/", async (req, res, next) => {
  try {
    const pasteList = await getList();
    res.send(pasteList);
    res.end();
  } catch (error) {
    next(error);
  }
});
listRouter.get("/delete-all", async (req, res, next) => {
  try {
    const deletedCount = await Paste.deleteMany({});
    res.send(deletedCount);
  } catch (error) {
    next(error);
  }
});
listRouter.get("/scrape", async (req, res) => {
  res.writeHead(200, {
    Connection: "keep-alive",
    "Content-Type": "text/event-stream",
  });
  start(url);
  let pastes1 = await Paste.find({});
  const pastes = pastes1.reverse();
  const stats = getStats(pastes);
  res.write(`data:${JSON.stringify({ pastes, stats })}\n\n`);
  setInterval(async () => {
    start(url);
    const pastes1 = await Paste.find({});
    const pastes = pastes1.reverse();
    res.write(`data:${JSON.stringify({ pastes, stats })}\n\n`);
  }, 120000);
});
listRouter.get("/scrape-once", async (req, res) => {
  res.writeHead(200, {
    Connection: "keep-alive",
    "Content-Type": "text/event-stream",
  });
  let pastes1 = await Paste.find({});
  const pastes = pastes1.reverse();
  res.write(`data:${JSON.stringify({ pastes })}\n\n`);
  setInterval(async () => {
    const pastes = await Paste.find({});
    res.write(`data:${JSON.stringify({ pastes })}\n\n`);
  }, 120000);
});

export default listRouter;
