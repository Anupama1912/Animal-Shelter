import AdoptPageScreen from "../../screens/AdoptForm/AdoptForm";
import urls from "../../../utils/urls";

export async function getServerSideProps(context) {
    console.log(context.params)
    console.log("BYE")
    const { query } = context.params
    console.log(`${urls.baseUrl+urls.api.animals.animals}?_id=${query}`)
    const res = await fetch(`${urls.baseUrl+urls.api.animals.animals}?_id=${query}`)
    const animal = await res.json()
    console.log(animal[0])

    return {
        props: {animal: animal[0]}
    }
}

export default AdoptPageScreen;