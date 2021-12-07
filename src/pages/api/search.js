import Adopters from "../../../server/mongodb/models/Adopters"

export default async function (req,res) {
    const search = req.body ? req.body : {}
    // console.log(req.body)
    console.log(search)
    await Adopters.find(search)
        .then((data) => {
            console.log(data)
            res.status(200).json(data)
        })
}