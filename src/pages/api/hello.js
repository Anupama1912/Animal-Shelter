// 4,5
// import { helloFunc } from "../../../server/example/hello"
// export default async function hello(req,res) {
//     await helloFunc().then((data) => res.status(200).json(data))
// }

// 6, 7
import { helloFunc } from "../../../server/example/hello";

export default async function hello(req,res) {
    await helloFunc()
        .then((data) => 
            res.status(200).json(data)
        )
}



// import { helloFunc2 } from "../../../server/example/hello";

// export default async function hello2 (req,res) {
//     await helloFunc2()
//         .then((data) => {
//             console.log("success")
//             res.status(200).json(data)
//         })
// }

// export default function hello(req,res) {
//     const helloWorld = "Hello World!"
//     res.status(200).json(helloWorld)
// }