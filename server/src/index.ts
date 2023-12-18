import express, { Express, Request, Response} from "express";
import bodyParser from "body-parser";
import cors from "cors"

const app: Express = express();
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req:Request, res:Response) => {
    res.json({
        ok:true
    })
});

app.listen(4000, () => {
    console.log("im wokring")
});


