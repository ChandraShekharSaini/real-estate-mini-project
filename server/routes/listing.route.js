import express from 'express';
const router = express.Router();

import { createListing, deleteListing, updateListing, getListing, getListings } from '../controller/listing.controller.js'

import verifyUser from "../utilis/verifyuser.js"

router.post("/create", createListing);

router.delete('/delete/:id', deleteListing);

router.post('/update/:id', updateListing);

router.get('/get/:id', getListing);

router.get('/get', getListings);

export default router
