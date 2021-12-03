import AdoptPageScreen from "../../screens/AdoptForm/AdoptForm";

export async function getServerSideProps(context) {
    console.log(context.params)
    const { query } = context.params
    const res = await fetch(`http://localhost:3000/api/animals/animals?id=${query}`)
    const animal = await res.json()
    console.log(animal[0])

    return {
        props: {animal: animal[0]}
    }
}

export default AdoptPageScreen;