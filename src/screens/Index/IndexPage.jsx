import React from "react";
import Image from "next/image";
import { helloWorld } from "../../actions/General";
import classes from "./IndexPage.module.css";

const IndexPage = () => {
  const [payload, setPayload] = React.useState("");

  React.useEffect(() => {
    // Example how to create page without ssr
    helloWorld().then((resp) => {
      setPayload(resp);
    });
  }, []);

  return (
    <>
      <div className = {classes.mainContent}>
        <div className= {classes.left}>
          <Image src="/static/image/homePageCats.jpeg" width={'600'} height={'500'} objectFit={'cover'}/>
        </div>
        <div className={classes.right}>
          <h1> Welcome to CatScout </h1>
          <h4> We are an Atlanta based nonprofit that aims to find families for stray cats. </h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
             incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
             nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
               in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
             incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
             nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
               in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
      
    </>
  );
};

export default IndexPage;
