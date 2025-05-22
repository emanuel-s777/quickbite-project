import mongoose from "mongoose";

export const  connectDB = async () =>{

   await mongoose.connect('mongodb+srv://quickbite:159753@cluster0.zwxqcit.mongodb.net/QuickBite').then(()=>console.log("DB Connected"));
   
}