import  express   from "express";
import { port } from "./config/config.js";
import connectDB from "./config/db.js";
import EngineersRouter from "./routers/engineersRouter.js";
import cors from 'cors';
import path  from "path";


const PORT = port || 8000

const app = express();

app.use(express.json())

var whitelist = ['http://localhost:9000', 'http://localhost:5173'];

var corsOptionsDelegate = function (req, callback) {
    var corsOptions;
    if (whitelist.indexOf(req.header('Origin')) !== -1) {
        corsOptions = { origin: true };
    } else {
        corsOptions = { origin: false };  
    }
    callback(null, corsOptions);  
};

app.use(cors(corsOptionsDelegate));






app.use("/api/v1/test",EngineersRouter);


if (process.env.NODE_ENV === 'production') {

    const __dirname = path.resolve();
    app.use(express.static(path.join(__dirname, '/client/dist')));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'));
    });
} else {
    app.get('/api', (req, res) => {
        res.send('API is running');
    });
}


app.use((req, res, next) => {
    next(customError(404, `${req.originalUrl} the page that you're looking is not found`));
});

app.use((error, req, res, next) => {

    res.status(500).send({status: false, message: "Internal Server Error"});

});

connectDB()

app.listen(PORT, ()=>{
    console.log(`Server is listening on port ${PORT}`);
});