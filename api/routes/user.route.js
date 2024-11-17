import path from 'path'
import express from 'express'
const router = express.Router();

import { getUser, postUpdateUser, deleteUser, getUserListing, getUserData } from '../controller/user.controller.js'



router.post("/update/:id", postUpdateUser);

router.delete("/delete/:id", deleteUser);

router.get('/listing/:id', getUserListing);

router.get('/get/:id', getUserData)

export default router
