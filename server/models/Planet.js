import { Schema } from "mongoose";


export const PlanetSchema = new Schema({
    name: { type: String, required: true, maxLength: 12 },
    milkyWayId: { type: Schema.Types.ObjectId, required: true, ref: 'MilkyWay' },
    type: { type: String, enum: ['Hive World', 'Death World', 'War World', 'Pleasure World', 'Daemon World', 'Forge World', 'Tomb World', 'Shrine World', 'Civilized World'], default: 'Civilized World'},
    compliant: { type: Boolean, required: true, default: true },
    description: { type: String, required: true, maxLength: 100}
},
    { timestamps: true, toJSON: { virtuals: true }}
)

