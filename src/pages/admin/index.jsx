import AdminPage from "../../screens/Admin";
import urls from "../../../utils/urls";

export async function getServerSideProps() {
    const res = await fetch(`http://localhost:3000/adopters`)
    const adopters = await res.json()
    return {
        props: { adopters }
    }
}

export default AdminPage;
