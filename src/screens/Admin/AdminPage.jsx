import React from "react";
import AdopterCard from '../../components/AdopterCard/AdopterCard'
import PropTypes from "prop-types";
import { helloWorld } from "../../actions/General";
import style from './AdminPage.module.css'


const searchRequest = async(event) => {
  event.preventDefault();
  const searchVal = searchInput.value;
  console.log(searchVal);
}
export default function AdminPage({adopters}) {

  console.log(adopters);
  return (
    <div>
      <div className={style.search}>
        <form onSubmit = {searchRequest}>
          <input type="text" id = "searchInput"/>
          <button onClick={searchRequest} type="submit">Submit</button>
        </form>
      </div>
      
      <div className={style.list}>
      {
        adopters && adopters.map(adopter => {
          return (
            adopter.which == "Cecil" &&
              <AdopterCard adopter={adopter} key={adopter._id}/>
  
          )
        })
      }
    </div>
    </div>
    
    
  )
}