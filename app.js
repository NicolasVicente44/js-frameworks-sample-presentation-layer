import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.static(path.join(__dirname, "build")));

app.get("*", (_, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

export default app;
