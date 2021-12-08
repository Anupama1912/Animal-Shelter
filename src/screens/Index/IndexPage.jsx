import React from "react";
import Image from "next/image";
import { helloWorld } from "../../actions/General";
import classes from "./IndexPage.module.css";

const IndexPage = (data) => {
  const [payload, setPayload] = React.useState("");
  // console.log(data.data)
  // console.log(typeof data.data)
  React.useEffect(() => {
    // Example how to create page without ssr
    helloWorld().then((resp) => {
      setPayload(resp);
    });
  }, []);

  return (
    console.log("Hello"),
    <>
      <div className = {classes.mainContent}>
        <div className= {classes.left}>
          <Image src="/static/image/Catscout.jpg" width={'600'} height={'500'} objectFit={'contain'}/>
        </div>
        <div className={classes.right}>
          {/* <h1> {data.data.name} </h1> */}
          <h4> We are an Atlanta based non-profit that aims to find families for stray cats. </h4>
          <p>This website is a platform through which we strive to unite stray cats and abandoned pets with loving families.
            Our mission is to rescue homeless cats, provide them with the best medical care and nurturing environment while
            working to find them a forever home. 
          </p>
          <p>We are located in Atlanta, Georgia and are open from 10AM - 6PM. <br/> For more information, please contact us:
          <ul>
            <li>Email: catscout@gmail.com</li>
            <li>Phone: 404-123-4567</li>
          </ul>
          </p>
        </div>
      </div>
      
    </>
  );
};

export default IndexPage;
