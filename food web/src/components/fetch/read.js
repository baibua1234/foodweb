import React from 'react'
import fire from "../../firebasa/fire";
import { useState } from "react";

// import db from './getFire.js';

var df = fire.firestore();
const Firestore = () =>{
    const [name , Setname] = useState("");
    const [calorie , Setcalorie] = useState();
    const [ingredien , Setingredien] = useState("");
    const [recipe , Setrecipe] = useState("");
    const sub = (e) =>{
        e.preventDefault();
        df.collection("Food").add({//collection name
            Name:name,
            calorie:calorie,
            
        })
        .then((docRef) => {
            alert("Add Successfully");
        })
        .catch((error)=>{
            alert("error")
            console.alert("Error มันแอดบ่ได่",error);
        });
    }
    return(
        <div>
            
            <center>
                <form style={{marginTop:"200px"}} onSubmit={(event)=>{sub(event)}}>
                    <input type="text" placeholder="Food Name" onChange={(e)=>{Setname(e.target.value)}}/><br/><br/>
                    <input type="text" placeholder="Calorie" onChange={(e)=>{Setcalorie(e.target.value)}}/><br/><br/>
                    {/* <input type="text" placeholder="Ingredien" onChange={(e)=>{Setingredien(e.target.value)}}/><br/><br/>
                    <input type="text" placeholder="Recipe" onChange={(e)=>{Setrecipe(e.target.value)}}/><br/><br/> */}
                    <button type="submit">Submit</button>

                </form>
            </center>
        </div>
    );

}
export default Firestore