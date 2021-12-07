import IndexPage from "../screens/Index";

<<<<<<< HEAD
export async function getServerSideProps() {
    const res = await fetch("http://localhost:3000/")
    console.log("hello")
    const data = await res.json()
    return {
      props: {
        data
      }
    }
  }
=======
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
>>>>>>> parent of f924154 (hello)

export default IndexPage;
