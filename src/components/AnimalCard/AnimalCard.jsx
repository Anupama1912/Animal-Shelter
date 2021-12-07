import React from "react";
import Link from "next/link";
import style from './AnimalCard.module.css'
import Image from "next/image";


export default function AnimalCard({animal}) {
    console.log(animal._id)
    return (
        <Link href={`/adopt/${animal._id}`}>
            <div className = {style.container}>
                {/* <Image src="/static/image/cat.jpg" width={'200'} height={'200'} objectFit={'contain'}/> */}
                <img className = {style.image} src="/static/image/cat.jpg" alt="cat image"/>
                <div className = {style.text}>
                    <p>Name: {animal.name}</p>
                    <p>Age: {animal.age}</p>
                    <p>Location: {animal.location}</p>
                </div>
            </div>
        </Link>
    )
}