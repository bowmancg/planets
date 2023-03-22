import { Schema } from "mongoose";

export const MilkyWaySchema = new Schema({
    stars: { type: Number, required: true },
    name: { type: String, required: true, maxLength: 12 }
},
    { timestamps: true, toJSON: { virtuals: true }}
)

