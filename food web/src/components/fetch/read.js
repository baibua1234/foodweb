import React from 'react'
import fire from "../../firebasa/fire";
import { useState } from "react";
import '../contact';
import '../Fooditem';
import '../Reviews';
import { Button, Navbar, Nav, Form } from 'react-bootstrap'
import Topborder from '../Topborder'

// import db from './getFire.js';

var df = fire.firestore();//get data
var fs = fire.storage();// get firebase storage
const Firestore = () =>{
    const [name , Setname] = useState("");
    const [calorie , Setcalorie] = useState();

    const [image, setImage] = useState(null);
    const [url, setUrl] = useState("");
    const [ingredient, setIngred] = useState("");
    const [review, setReview] = useState("");
    const [progress, setProgress] = useState(0);

    const handleChange = e => {// image Upload form 
        if (e.target.files[0]) {
          setImage(e.target.files[0]);
        }
    };


    const sub =(e) =>{//submit
        e.preventDefault();

        const uploadTask = fs.ref(`images/${image.name}`).put(image);// save image
        uploadTask.on(
          "state_changed",
          snapshot => {//progress bar
            const progress = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            setProgress(progress);
          },
          error => {
            console.log(error);
          },
          () => {
            fs//get url image 
              .ref("images")
              .child(image.name)
              .getDownloadURL()
              .then( async url => {
                setUrl(url);

                await df.collection("Food").add({//collection name save to database
                  Name:name,
                  calorie:calorie,
                  Url:url,
                  Review:review,
                  
              })
              .then((docRef) => {
                  alert("Add Successfully");
              })
              .catch((error)=>{
                  alert("error")
                  console.alert("Error มันแอดบ่ได่",error);
              });
              console.log({url})
              });
          }
        );       
    }
    return(
        <div>
            <Topborder/>
            <center>
                <form style={{marginTop:"200px"}} onSubmit={(event)=>{sub(event)}}>
                
                    <input type="text" placeholder="Food Name" onChange={(e)=>{Setname(e.target.value)}}/><br/><br/>
                    <input type="text" placeholder="Calorie" onChange={(e)=>{Setcalorie(e.target.value)}}/><br/><br/>
                    <textarea placeholder="review...." onChange={(e)=>{setReview(e.target.value)}}/><br/><br/>
                    <input type="file" onChange={handleChange} /><br/><br/>
                    <button type="submit">Submit</button><br/><br/>
                    <progress value={progress} max="100" /><br/><br/>

                </form>
            </center>
        </div>
    );

}
export default Firestore