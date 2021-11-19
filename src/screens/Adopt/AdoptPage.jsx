import React from "react";
import AnimalCard from '../../components/AnimalCard/AnimalCard'
import style from './AdoptPage.module.css'

export default function AdoptPage({animals}) {

  console.log(animals);
  return (
    <div className={style.container}>
      <div className={style.list}>
        {
          animals && animals.map(animal => <AnimalCard animal={animal} key={animal.id}/>)
        }
      </div>
    </div>
  )
}