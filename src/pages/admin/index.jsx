import AdminPage from "../../screens/Admin";
import urls from "../../../utils/urls";

export async function getServerSideProps() {
    const res = await fetch("http://localhost:3000/api/search")
    //console.log(res)
    const adopters = await res.json()
    console.log("Hello")
    console.log(adopters)
    console.log("Bye")
    return {
        props: { adopters }
    }
}

export default AdminPage;
