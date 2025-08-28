import { Router } from "express";
import results from "./results.routes.js";

const v1 = Router();

v1.use("/api", results);

export default v1;
