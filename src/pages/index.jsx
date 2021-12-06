import IndexPage from "../screens/Index";

export async function getServerSideProps() {
    const res = await fetch("https://localhost:3000/api/hello")
    console.log("hello")
    const data = await res.json()
    return {
      props: {
        data
      }
    }
  }

export default IndexPage;
