import React from "react";
import Link from "next/link";
import style from './AdopterCard.module.css'

export default function AdopterCard({adopter}) {
    return (
            <div className = {style.container}>
                <div className = {style.left}>
                    <p>Name: {adopter.name}</p>
                    <p>Location: {adopter.location}</p>
                    <p>Email: {adopter.email}</p>
                    <p>Phone #: {adopter.phone}</p>
                </div>
                <div className = {style.right}>
                    <p>View More</p>
                </div>
            </div>
    )
}