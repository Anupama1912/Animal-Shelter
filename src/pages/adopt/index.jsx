import AdoptPage from "../../screens/Adopt";

export async function getServerSideProps() {
    const res = await fetch("http://localhost:3001/animals")
    const animals = await res.json()
    return {
        props: { animals }
    }
}

export default AdoptPage;
