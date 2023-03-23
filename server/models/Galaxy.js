import { Schema } from "mongoose";

export const GalaxySchema = new Schema({
    stars: { type: Number, required: true },
    name: { type: String, required: true, maxLength: 20 }
},
    { timestamps: true, toJSON: { virtuals: true }}
)
 
// GalaxySchema.virtual('planetCount', {
//     ref: 'Planet',
//     forei
// })

// CommentSchema.virtual('reportReplyCount', {
//     ref: 'Report',
//     localField: 'replies',
//     foreignField: 'reportModel',
//     justOne: false,
//     count: true,
//     options: {
//         match: {
//             reportType: 'Comment',
//         },
//     },
// });
