import  express  from 'express';
 
import cors from "cors"
import authRouter from './routes/authRoute.js';
import { connection } from './database/db.js';
import blogRouter from './routes/blogRouter.js';


 


const app = express();
app.use(cors());
app.use(express.json());


app.use("/", authRouter)
app.use("/", blogRouter)



app.listen(8000, async() => {
  try{
   
    await connection;
    console.log("Server is runnign on port 8000 connect");
  }catch(err){
    console.log(err);
  }
  
});




 