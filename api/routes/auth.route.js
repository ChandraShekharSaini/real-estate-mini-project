import path from 'path';
import express from 'express'
const router = express.Router();

import { postSignup, getSignin, postGoogleIn, signOut } from '../controller/auth.controller.js'


router.post('/signup', postSignup)

router.post('/signin', getSignin)

router.post('/google', postGoogleIn)

router.get('/signout/:id', signOut);


export default router