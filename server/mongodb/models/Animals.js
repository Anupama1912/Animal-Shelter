import mongoose from "mongoose"

const { Schema } = mongoose;

const CatSchema = new Schema({
    Name: String,
    Image: String,
    Age: Number,
    Location: String,
    Breed: String,
    isAdopted: Boolean, //or String
});

export default mongoose.models.Cat ?? mongoose.model("Cat", CatSchema); //?????