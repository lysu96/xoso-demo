// src/app.js
import express from "express";
import bodyParser from "body-parser";
import webhookRoutes from "./routes/webhook.routes.js";
import bot from "./config/telegram.js";

const app = express();

// Middleware parse JSON
app.use(bodyParser.json());

// Inject bot instance vào app (nếu cần gọi trong route)
app.set("bot", bot);

// Routes
app.use("/webhook", webhookRoutes);

// Route kiểm tra server có chạy không
app.get("/", (req, res) => {
  res.send("✅ Xoso Bot Server is running...");
});

export default app;
