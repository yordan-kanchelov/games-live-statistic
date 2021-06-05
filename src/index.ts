import express from "express";
import helmet from "helmet";
import cors from "cors";
import bodyParser from "body-parser";

const port = process.env.PORT || 3000;
const app = express();
const router = express.Router();

app.use(helmet());
app.use(cors());
app.use(express.json());

router.all("*", cors()); // allow cors
router.use(require("./api/post-user-statistic"));

app.use("/api", router);
app.listen(port);
