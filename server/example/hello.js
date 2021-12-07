// 1,2
// export const helloFunc = async() => "Hello World!!"

// // 6, 7
// import mongoDB from "../mongodb";
// import Cat from "../../server/mongodb/models/Animals";

// export const helloFunc = async() => {
//     await mongoDB()
//     const result = await Cat.findOne()
//     return result
// }

import mongoDB from "../mongodb/index";
import Cat from "../../server/mongodb/models/Animals";
import Adopters from "../mongodb/models/Adopters";

export const helloFunc2 = async(entry) => {
    await mongoDB();
    // const animal = await Cat.create({
    //     Name: "Hello",
    //     Image: "google.com",
    //     Age: 17,
    //     Location: "Atlanta",
    //     Breed: "Human",
    //     isAdopted: true,
    // }).then((animal) => {
    //     console.log(animal)
    //     return animal
    // })
    const animal = await Adopters.create({
        name: entry.name,
        email: entry.email,
        phone: entry.phone,
        desc: entry.desc,
        which: entry.which,
        location: entry.location,
    }).then((animal2) => {
        console.log(animal2)
        return animal2
    })
}