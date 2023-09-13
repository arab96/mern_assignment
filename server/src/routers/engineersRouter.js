import express from 'express';
import { getAllEngineers, getAllVerifiedEngineers, registerEngineers, update } from '../controllers/engineersController.js';



const EngineersRouter= express.Router()

EngineersRouter.post("/",registerEngineers)
EngineersRouter.get("/get-engineers",getAllEngineers)
EngineersRouter.get("/get-verified-engineers",getAllVerifiedEngineers)
EngineersRouter.post("/update-engineers/:id",update)

export default EngineersRouter;