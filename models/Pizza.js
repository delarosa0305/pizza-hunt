const { Schema, model } = require("mongoose");

const PizzaSchema = new Schema(
    {
        pizzaName: {
            type: String
        },
        createdBy: {
            type: String
        },
        createdAt: {
            type: String,
            default: Date.now
        },
        size: {
            type: String,
            defalut: 'large'
        },
        topping: [],
        comments: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Comment'
            }
        ]
    },
    {
        toJson: {
            virtuals: true,
        },
        id: false
    }
);

// get total count of comments and replies on retrieval
PizzaSchema.virtual('commmentCount').get(function () {
    return this.comments.length;
})

const Pizza = model('Pizza', PizzaSchema);

module.exports = Pizza;