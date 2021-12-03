import React from "react";
import AdopterCard from '../../components/AdopterCard/AdopterCard'
import PropTypes from "prop-types";
import { helloWorld } from "../../actions/General";
import style from './AdminPage.module.css'


const SearchRequest = async event => {
}
export default function AdminPage({adopters}) {

  console.log(adopters);
  return (
    
    <div>
      <div className={style.search}>
        <form onSubmit = {SearchRequest}>
          <input type="text" id = "search"/>
          <button type="submit">Submit</button>
        </form>
      </div>
      
      {/* <div className={style.list}>
      {
        adopters && adopters.map(adopter => <AdopterCard adopter={adopter} key={adopter._id}/>)
      }
    </div> */}
    </div>
    
    
  )
}