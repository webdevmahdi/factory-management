import { Router } from "express";
import { ProductRouter } from "../modules/product/product.router";

const router = Router();
const moduleRoutes = [
    {
        path: '/',
        route: ProductRouter
    },
]

moduleRoutes.forEach(route => router.use(route.path, route.route))