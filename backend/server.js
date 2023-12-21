import express from "express";
import router from "./routes/routes.js";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send('Successful response');
})

app.use("/", router);

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`)
})