import { Router } from "express";

const router = Router();

router.post('create-product', (req, res)=> {
    console.log('Hello world!')
});

export const ProductRouter = router;