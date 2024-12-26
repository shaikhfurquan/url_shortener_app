
import { UrlModel } from "../models/url.model.js";
import { UrlShortener } from "../utils/urlShortener.js";

export class UrlController {
    static async createShortenerUrl(req, res, next) {
        try {
            const { originalUrl , shortUrl } = req.body;

            if (!originalUrl) {
                return res.status(400).json({ message: "Original URL is required" });
            }

            // Check if the URL is already shortened
            let url = await UrlModel.findOne({ originalUrl });
            if (url) {
                return res.json(url);
            }

            // Generate a new short URL
            // const shortUrl = UrlShortener.generateShortUrl();

            // Save to the database
            url = new UrlModel({ originalUrl, shortUrl });
            await url.save();
            res.status(200).json(url);
        } catch (error) {
            console.error("Error in createShortenerUrl:", error);
            return next(error);
        }
    }

    static async redirectToOriginalUrl(req, res, next) {
        try {
            const { shortUrl } = req.params;

            // Find the original URL
            const url = await UrlModel.findOne({ shortUrl });
            if (!url) {
                return res.status(404).json({ message: "URL not found" });
            }

            // Increment click count
            url.clicks += 1;
            await url.save();

            res.redirect(url.originalUrl);
        } catch (error) {
            console.error("Error in redirectToOriginalUrl:", error);
            return next(new Error(`Error finding shortUrl: ${shortUrl}, ${error.message}`));
        }
    }
}

