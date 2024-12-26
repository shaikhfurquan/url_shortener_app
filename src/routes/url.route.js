import express from 'express';
import { UrlController } from '../controllers/url.controller.js';

const urlRouter = express.Router();

urlRouter.post('/shortener' , UrlController.createShortenerUrl)
urlRouter.get('/:shortUrl' , UrlController.redirectToOriginalUrl)

export default urlRouter