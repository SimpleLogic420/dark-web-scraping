import express from "express";
// eslint-disable-next-line import/no-extraneous-dependencies
import * as bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";
import morganHandler from "./middlewares/morgan";
import errorHandler from "./middlewares/errorHandlers";
import start from "./scraper";


const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.text());
app.use(
  morganHandler,
  morgan(":method :url :status :res[content-length] - :response-time ms :body")
);

app.get("/", (_req, res) => {
  res.send("hello world");

});
// setInterval(() => {
//   start();
//   console.log(`scraped at: ${new Date()}`);
// }, 5000);
start();
app.use(errorHandler);

export default app;