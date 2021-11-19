import React from "react";
import PropTypes from "prop-types";
import { helloWorld } from "../../actions/General";

const SearchRequest = async event => {
}
export default function AdminPage() {

  
  return (
    
    <div>
      <h2>Catscout</h2>
      <form onSubmit = {SearchRequest}>
      <input type="text" id = "search"/>
      <button type="submit">Submit</button>
      </form>
      
    </div>
  )
}