import React from 'react'
import fire from "../../firebasa/fire";
import { useState ,useEffect} from "react";
import Topborder from '../Topborder'
import { useParams } from 'react-router-dom';


var df = fire.firestore();// firebase 

const Detail = () =>{
    const {id} = useParams();// id 
    const [food, setFood] = useState([]);

    useEffect(() => {
        getFood();
      }, [])

    const getFood = async () =>{// get data form firebase by id
        const FoodRef = df.collection('Food').doc(id);
        const doc = await FoodRef.get();
        console.log(doc.data())
        var data = doc.data();
        var sum = {data,id:doc.id}
        setFood(arr =>[...arr, sum])//set
    }
    console.log(food)
    return(
        <div>
            <Topborder/>
            <div>
            {
                food.map((food)=>(//set data
                <Frame 
                    name = {food.data.Name}
                    calorie = {food.data.calorie}
                    url = {food.data.Url}
                    id = {food.id}
                />
                ))
            }
            </div>
        </div>
    )
}
const Frame =({name,calorie,url})=>{
    return(
        <div class="container">
            <div class="row justify-content-md-center">
                <div class="col-md-4">
                   <img src={url} width="370" height="400"/>
                   <center><h1>{name}</h1></center>
                   <center><p>{calorie} calorie</p></center>
                </div>
            </div>
        </div>
    )
}

export default Detail;
