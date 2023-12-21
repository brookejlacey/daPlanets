import { Schema } from "mongoose";

//planet (being the child) is a One to Many relationship because planets belong to only one galaxy but galaxies can house many planets
export const PlanetSchema = new Schema({
    name: { type: String, required: true, minLength: 3, maxLength: 25 },
    emoji: { type: String, required: true },
    galaxyId: { type: Schema.Types.ObjectId, ref: 'Galaxy', required: true }
}, { toJSON: { virtuals: true } }) //properties on an object that don't exist on the object in the db, they CAN exist on the object for the response

PlanetSchema.virtual('planet',
    {
        localField: 'planetId', //what HERE will match
        foreignField: '_id', //what THERE will match
        ref: 'Planet', //what is 'there'?
        justOne: true //keeps our return from being an array
    })