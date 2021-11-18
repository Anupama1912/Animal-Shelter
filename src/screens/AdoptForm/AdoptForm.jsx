import React from "react";
import style from './AdoptForm.module.css';

export default function AdoptFormScreen( {animal} ) {
    return (
        <div className = {style.container}>
            <h3>Catscout</h3>
            <img src={animal.img} alt="" />
                    <p>Name: {animal.name}</p>
                    <p>Age: {animal.age}</p>
                    <p>Location: {animal.location}</p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada erat at 
            bibendum maximus. Mauris id facilisis ligula. Donec et est lectus. Nulla facilisi. 
            Proin rutrum scelerisque ante, eget interdum augue rutrum vel. Sed id ligula quis 
            mauris laoreet suscipit. Sed luctus suscipit tortor, sit amet efficitur sapien dignissim eu. 
            Sed consectetur ante at metus rhoncus, mattis commodo nunc egestas. Etiam eu pellentesque elit. 
            Mauris commodo diam et nunc gravida, nec tempor diam ornare. Morbi nibh ligula, vestibulum ac 
            massa quis, efficitur laoreet ligula. Sed ut purus sapien. Morbi sagittis felis porta, commodo
             orci vel, auctor tellus. Donec sagittis maximus nisi quis tincidunt.
            </p>
            <form className= {style.form}>
                <label htmlFor="name">Name: </label>
                <input type="text" autoComplete="name" id="name" required/>
                <br />
                <label htmlFor="species">Species: </label>
                <input type="text" autoComplete="species" id="species" required/>
                <br />
                <label htmlFor="Location">Location: </label>
                <input type="text" name="" id="Location" required/>
                <br />
                <label htmlFor="description" >Please introduce this to us all: </label>
                <input type="text" name="" id="description" required/>
                <br />
                <label htmlFor="Image">Submit an image for this animal: </label>
                <input type="File" id="Image"/>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
        

    )
}