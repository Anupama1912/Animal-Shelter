import mongoose from "mongoose"

const { Schema } = mongoose;

const AdopterSchema = new Schema({
    name: String,
    email: String,
    phone: Number,
    desc: String,
    which: String,
    location: String, //or String
});

export default mongoose.models.Adopter ?? mongoose.model("Adopter", AdopterSchema); //?????