const { default: mongoose } = require("mongoose");


const OrderSchema = new mongoose.Schema(
    {
        userId: { type: String, required:true},
        products: [
            {
               productId:{
                   type:String,
               },
               quantity: {
                   type: Number,
                   dafault: 1,
               },
            },
        ],
        amount: { type: Number, required:true },
        address: { type:Object ,required: true},
        status: { typea: String, default: ""},
    },
    { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);
