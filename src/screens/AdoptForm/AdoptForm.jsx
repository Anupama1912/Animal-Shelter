import React from "react";
import style from './AdoptForm.module.css';
import urls from "../../../utils/urls";
// import mongoDB from "../../../server/mongodb";
// import Adopters from "../../../server/mongodb/models/Adopters";

const AdoptRequest = async (event) => {
    event.preventDefault()

    const res = await fetch(urls.baseUrl+urls.api.animals.adopters, {
      body: JSON.stringify({
        name: event.target.name.value,
        email: event.target.email.value,
        Location: event.target.Location.value,
        phone: event.target.phone.value,
        description: event.target.description.value,
        which: event.target.which.name,
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })
    event.target.name.value= "";
    event.target.email.value= "";
    event.target.Location.value= "";
    event.target.phone.value= "";
    event.target.description.value= "";

    alert("Request recieved!");
    const result = await res.json()
  }

export default function AdoptFormScreen( {animal} ) {
    let showMe = false
    return (
      <div className = {style.body}>
        <div className = {style.top}> 
          <div className = {style.left}>
            <img style={{"max-height": "100%", "max-width": "100%"}} src={animal.image} alt="" />
          </div>
          <div className = {style.right}>
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
            </div>
        </div>
        <div className={style.form}>
          <h3> Adopt {animal.name} Today! </h3>
          <form onSubmit = {AdoptRequest} className= {style.form}>
            <div className = {style.item}>
              <label htmlFor="name">Name: </label>
              <input className = {style.marginc}  type="text" autoComplete="name" id="name" placeholder="Full Name" required/>
              <label className = {style.margina}  htmlFor="email">Email: </label>
              <input className = {style.marginc} type="email" autoComplete="species" id="email" placeholder="hello@gmail.com" required/>
            </div>
            <br />
            <div className = {style.item}>
              <label htmlFor="Location">Location: </label>
              <input className = {style.margind} type="text" name="" id="Location" placeholder="Atlanta, Georgia" required/>
              <label className = {style.marginb} htmlFor="phone" >Phone Number: </label>
              <input className = {style.marginc} type="tel" id="phone" name="phone" pattern="[0-9]{10}" placeholder="1234567890" required/>
            </div>
            <br />
            <label htmlFor="description">Why do you want to adopt {animal.name}? </label>
            <br />
            <textarea name="description" id="description" cols="80" rows="10" placeholder="Answer" style={{"padding":"2%"}}></textarea>
            {/* <input className = {style.description} type="text" name="" id="description" required/> */}
            <br />
            <input style={{display: showMe?"block":"none"}} type="text" id="which" name={animal.name}/>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>

    )
}