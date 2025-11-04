import mongoose from "mongoose";    

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://dilseeratjassal:Internsaathi123@cluster1.ywbgnz5.mongodb.net/Internsaathi?retryWrites=true&w=majority&appName=Cluster1')
    .then(() => console.log("MongoDB connected successfully"))
}