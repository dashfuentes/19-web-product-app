import express from "express";
import morgan from "morgan";
import pkg from "../package.json" assert { type: "json" };

import { createRoles } from "./libs/initialSetup.js"; 

import productsRoutes from "./routes/products.routes.js";
import authRoutes from './routes/auth.routes.js';
import userRoutes from './routes/user.routes.js';

const app = express();
createRoles() //crea los roles al iniciar la aplicación

app.set("pkg", pkg);

app.use(morgan("dev"));

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    name: app.get("pkg").name,
    author: app.get("pkg").author,
    description: app.get("pkg").description,
    version: app.get("pkg").version,
  });
});

app.use('/api/products',productsRoutes)
app.use('/api/auth',authRoutes)
app.use('/api/users',userRoutes)

export default app;
