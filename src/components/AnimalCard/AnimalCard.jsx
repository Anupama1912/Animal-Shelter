import React from "react";
import Link from "next/link";
import style from './AnimalCard.module.css'

export default function AnimalCard({animal}) {
    return (
        <Link href={`/adopt/${animal.id}`}>
            <div className = {style.container}>
                <img className = {style.image} src={animal.image}/>
                <div className = {style.text}>
                    <p>Name: {animal.name}</p>
                    <p>Age: {animal.age}</p>
                    <p>Location: {animal.location}</p>
                </div>
            </div>
        </Link>
    )
}