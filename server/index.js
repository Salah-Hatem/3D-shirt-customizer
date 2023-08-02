import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import dalleRoute from "./routes/dalle.routes.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: false }));
const PORT = process.env.PORT || 5000;

app.use("/api/v1/dalle", dalleRoute);

app.listen(PORT, () => console.log(`SERVER IS RUNNING AT PORT: ${PORT}`));
