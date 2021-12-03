import AdminPage from "../../screens/Admin";

export async function getServerSideProps() {
    const res = await fetch(urls.baseUrl+urls.api.animals.adopters)
    const adopters = await res.json()
    return {
        props: { adopters }
    }
}

export default AdminPage;
