import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({

    originalUrl: {
        type: String,
        required: [true, "Original URL is required"]
    },
    shortUrl: {
        type: String,
        required: [true, "Short URL is required"],
        unique: [true, "Unique Short URL is required"]
    },
    clicks: {
        type: Number,
        default: 0,
    }
}, { timestamps: true })

export const UrlModel = mongoose.model('Url', urlSchema)