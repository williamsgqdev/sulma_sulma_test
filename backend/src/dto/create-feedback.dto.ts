import  Joi from 'joi';

export const createFeedbackDtoSchema = Joi.object({
    who_are_your_customers: Joi.string().required(),
    are_they_any_special_requirements: Joi.string().required(),
    what_types_of_customers_should_be_excluded: Joi.string().required(),
    what_are_the_position_of_your_prospect: Joi.string().required(),
});

export interface ICreateFeedBackDto {
    who_are_your_customers: string;
    are_they_any_special_requirements: string;
    what_types_of_customers_should_be_excluded: string;
    what_are_the_position_of_your_prospect: string;
}