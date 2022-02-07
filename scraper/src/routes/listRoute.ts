import express from "express";
import getList from "../controllers/listController"
import Paste from "../db/models/Schema";
const listRouter = express.Router();

listRouter.get("/", async (req, res, next) => {
  try {
    const pasteList = await getList();
    res.send(pasteList);
    res.end();
  } catch (error) {
    next(error);
  }
});

export default listRouter;
