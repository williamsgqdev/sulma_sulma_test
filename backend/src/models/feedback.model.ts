import { Schema, model } from "mongoose";

const feedbackSchema = new Schema({
    who_are_your_customers: {
        type: String,
        required: true
    },
    are_they_any_special_requirements: {
        type: String,
        required: true
    },
    what_types_of_customers_should_be_excluded: {
        type: String,
        required: true
    },
    what_are_the_position_of_your_prospect:{
        type: String,
        required: true
    }

}, {timestamps: true})

export const Feedback = model('Feedback', feedbackSchema);