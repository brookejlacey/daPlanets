import { Schema } from "mongoose";

export const GalaxySchema = new Schema({
    name: { type: String, required: true, maxLength: 100 },
    size: { type: String, required: true, enum: ['large', 'mini', 'massive'] },
    emoji: { type: String, required: true, default: '🌍🌎🌏' }
})