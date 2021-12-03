import AdoptPage from "../../screens/Adopt";
import urls from "../../../utils/urls";

export async function getServerSideProps() {
    const res = await fetch(urls.baseUrl+urls.api.animals.animals)
    const animals = await res.json()
    return {
        props: { animals }
    }
}

export default AdoptPage;
