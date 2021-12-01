import AdminPage from "../../screens/Admin";

export async function getServerSideProps() {
    const res = await fetch("http://localhost:3001/adopters")
    const adopters = await res.json()
    return {
        props: { adopters }
    }
}

export default AdminPage;
