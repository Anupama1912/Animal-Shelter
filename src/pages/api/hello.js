export default function hello(req,res) {
    const helloWorld = "Hello World!"
    res.status(200).json(helloWorld)
}