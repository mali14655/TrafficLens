import express from "express"
import { ConnectToMongoDb } from "./connect.js";
import {userRouter} from "./routes/userRouter.js"
import cors from "cors";

const app=express();
const PORT=3000;

//Connection
ConnectToMongoDb("mongodb://127.0.0.1:27017/ClickAnaly")
.then(()=>{
    console.log("Successfully Connected !")
})
.catch((err)=>{
    console.log(err);
})


//middlewares
app.use(express.json());
app.use(cors({
    origin:"http://localhost:5173"
}))



app.use("/user",userRouter);



app.listen(PORT,()=>{
    console.log(`Server Started at port ${PORT}.`)
})
