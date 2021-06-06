import express from "express";
import helmet from "helmet";
import cors from "cors";

const port = process.env.PORT || 3000;
const app = express();
const router = express.Router();

app.use(helmet());
app.use(cors());
app.use(express.json());

router.all("*", cors()); // allow cors

router.use(require("./api/get-live-statistics"));
router.use(require("./api/post-game-statistic"));

app.use("/api", router);
app.listen(port);

console.log("Server started");
