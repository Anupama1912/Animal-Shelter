// 4,5
// import { helloFunc } from "../../../server/example/hello"
// export default async function hello(req,res) {
//     await helloFunc().then((data) => res.status(200).json(data))
// }

// 6, 7
// import { helloFunc } from "../../../server/example/hello";

// export default async function hello(req,res) {
//     await helloFunc()
//         .then((data) => 
//             res.status(200).json(data)
//         )
// }



import { helloFunc2 } from "../../../server/example/hello";

export default async function hello2 (req,res) {
    console.log(typeof req.body)
    await helloFunc2(req.body)
        .then((data) => {
            console.log(data)
            console.log("success")
            res.status(200).json(data)
        })
}

// export default function hello(req,res) {
//     const helloWorld = "Hello World!"
//     res.status(200).json(helloWorld)
// }