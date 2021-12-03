import AdoptPage from "../../screens/Adopt";
// import urls from "../../../utils/urls";

export async function getServerSideProps() {
    // console.log(urls.baseUrl)
    const res = await fetch("http://localhost:3000/api/animals/animals")
    const animals = await res.json()
    return {
        props: { animals }
    }
}

export default AdoptPage;
