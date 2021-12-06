// 1,2
// export const helloFunc = async() => "Hello World!!"

// // 6, 7
import mongoDB from "../mongodb";
import Cat from "../../server/mongodb/models/Animals";

export const helloFunc = async() => {
    await mongoDB()
    const result = await Cat.findOne()
    return result
}

// import mongoDB from "../mongodb/index";
// import Cat from "../../server/mongodb/models/Animals";

// export const helloFunc2 = async() => {
//     await mongoDB()
//     const animal = await Cat.create({
//         Name: "Hello",
//         Image: "google.com",
//         Age: 17,
//         Location: "Atlanta",
//         Breed: "Human",
//         isAdopted: true,
//     }).then((animal) => {
//         console.log(animal)
//         return animal
//     })
// }