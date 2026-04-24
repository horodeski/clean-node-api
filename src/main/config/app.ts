import express from "express";
import setutMiddlewares from "./middlewares";
import setupRoutes from "./routes";

const app = express();
setutMiddlewares(app);
setupRoutes(app);
export default app;
