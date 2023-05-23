import express from "express";
import UserRoute from "./routes/user.js";
import cors from "cors";

const app = express();
const port = 5000;
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(UserRoute);

app.listen(port, () => console.log(`server up and running at port ${port}`));
