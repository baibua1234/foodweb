import React from 'react'
import fire from "../../firebasa/fire";
import { useState ,useEffect} from "react";
import Topborder from '../Topborder'
import { MDBCard, MDBCardTitle, MDBBtn, MDBCardGroup, MDBCardImage, MDBCardText, MDBCardBody} from 'mdbreact';
import { Link } from 'react-router-dom'
import '../contact';

var df = fire.firestore();
const PageDetail = () =>{
    const [blogs,setBlogs]=useState([])

    useEffect(() => {
        fetchBlogs();
      }, [])

    const fetchBlogs=async()=>{

        df.collection("Food").get().then((querySnapshot) => {
             
            // Loop through the data and store
            // it in array to display
            querySnapshot.forEach(element => {//
                var data = element.data();
                var sum = {data,id:element.id}
                setBlogs(arr => [...arr , sum]);
                  
            });
        })
    }
    console.log(blogs)


    return(
        <div>
            <Topborder/>
            <div>
            {
                blogs.map((blog)=>(
                <Frame 
                    name = {blog.data.Name}
                    calorie = {blog.data.calorie}
                    url = {blog.data.Url}
                    id = {blog.id}
                />
                ))
            }
            </div>
        </div>
    )

}
const Frame =({name,calorie,id,url})=>{
    return (
        <MDBCardGroup>
          <MDBCard  className="text-center">
            <MDBCardImage src={url} width="18%" height="225"/>
            <MDBCardBody>
            <MDBCardTitle><Link to={`detail/${id}`}>{name}</Link></MDBCardTitle>
              <MDBBtn color="primary" size="md">
              {calorie} กิโลแคลอรี่
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCardGroup>
      );
    }
export default PageDetail;