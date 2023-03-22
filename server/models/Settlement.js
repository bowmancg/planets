import { Schema } from "mongoose";

export const SettlementSchema = new Schema({
    type: { type: String, required: true, maxLength: 12 },
    population: { type: Number, required: true },
    dominantSpeciesId: { type: Schema.Types.ObjectId, required: true, ref: 'Species' },
    planetId: { type: Schema.Types.ObjectId, required: true, ref: 'Planet' }
},
    { timestamps: true, toJSON: { virtuals: true }}
)

SettlementSchema.virtual('planet', {
    localField: 'planetId',
    foreignField: '_id',
    justOne: true,
    ref: 'Planet'
})

SettlementSchema.virtual('dominantSpecies', {
    localField: 'speciesId',
    foreignField: '_id',
    justOne: true,
    ref: 'Species'
})