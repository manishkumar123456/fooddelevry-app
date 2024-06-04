import mongoose from "mongoose";


export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://manishkumar2282000:uzgf0aJavF9SC5BU@cluster0.ltrylrw.mongodb.net/food-ordering-app').then(()=>console.log("DB Connected"));
}