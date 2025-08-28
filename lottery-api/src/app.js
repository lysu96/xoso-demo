import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import v1 from "./routes/index.js";
import { errorHandler } from "./middlewares/error.js";

const app = express();

// Middleware cơ bản
app.use(helmet()); // bảo mật header
app.use(cors()); // cho phép CORS
app.use(express.json({ limit: "1mb" })); // parse JSON
app.use(morgan("dev")); // log request

// Health check
app.get("/health", (req, res) => res.json({ status: "ok" }));

// Routes chính
app.use(v1);

// Middleware xử lý lỗi
app.use(errorHandler);

export default app;
