import mongoDB from '../../../../server/mongodb/index'
import Cat from '../../../../server/mongodb/models/Animals'

export default async function find(req,res) {

    await mongoDB()
    
    console.log('Hello1')
    const params = req.query
    console.log(params)

    const cats = await Cat.find(params)
    console.log(cats)
    res.status(200).json(cats)
}