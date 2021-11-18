import React from "react";
import style from './AdoptForm.module.css';

const AdoptRequest = async event => {
    event.preventDefault()

    const res = await fetch('http://localhost:3001/adopters', {
      body: JSON.stringify({
        name: event.target.name.value,
        email: event.target.email.value,
        Location: event.target.Location.value,
        phone: event.target.phone.value,
        description: event.target.description.value,
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })

    const result = await res.json()
  }

export default function AdoptFormScreen( {animal} ) {
    return (
        <div className = {style.form}>
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
            <form onSubmit = {AdoptRequest} className= {style.form}>
                <div className = {style.item}>
                    <label htmlFor="name">Name: </label>
                    <input className = {style.marginc}  type="text" autoComplete="name" id="name" required/>
                    <label className = {style.margina} htmlFor="email">Email: </label>
                    <input className = {style.marginc} type="text" autoComplete="species" id="email" required/>
                </div>
                <br />
                <div className = {style.item}>
                    <label htmlFor="Location">Location: </label>
                    <input type="text" name="" id="Location" required/>
                    <label className = {style.marginb} htmlFor="phone" >Phone Number: </label>
                    <input className = {style.marginc} type="text" name="" id="phone" required/>
                </div>
                <br />
                <label htmlFor="description">Why do you want to adopt {animal.name}: </label>
                <br />
                <textarea name="description" id="description" cols="80" rows="10"></textarea>
                {/* <input className = {style.description} type="text" name="" id="description" required/> */}
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
        

    )
}