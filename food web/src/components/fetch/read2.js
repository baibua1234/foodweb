import React from 'react'
import fire from "../../firebasa/fire";
import { useState } from "react";
import '../contact';
import '../Fooditem';
import '../Reviews';
import Topborder from '../Topborder'
import { Button, Navbar, Nav, Form } from 'react-bootstrap'
import { MDBContainer, MDBInput,MDBMedia,MDBCardImage,MDBCardText} from 'mdbreact';
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn, MDBCardTitle } from 'mdbreact';

var df = fire.firestore();   

const Read = () => {


    
    const logout = () => {
        fire.auth().signOut();
    }
    const [info, setInfo] = useState([]);

    window.addEventListener('load', () => {
        Fetchdata();
    });

    const Fetchdata = () => {
        df.collection("Food").get().then((querySnapshot) => {
            querySnapshot.forEach(element => {
                var data = element.data();
                setInfo(arr => [...arr, data]);
            });
        })
    }
    return (
        <div style={{backgroundColor:'white'}}>
            <Topborder/>

            <center>
                <h2 className="h1-responsive font-weight-bold text-center my-5">
                        Reviews 
                </h2>
            </center>
            {
                info.map((data) => (
                    <Frame
                        Name={data.Name}
                        Calorie={data.calorie}
                        Url={data.Url}
                        Review={data.Review}
                    />
                ))
            }
        </div>
    );
}
const Frame = ({ Name, Calorie ,Url, Review}) => {
    console.log(Name)
    return (
        <center>
            
            <div>              
                <div>
                    <MDBCard className="my-5 px-5 pb-5 ">
                        <MDBCardBody>
                        <hr />
                            <MDBRow>
                            <MDBCol lg="5">
                                <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                                <img
                                    className="img-fluid"
                                    src={Url}
                                    alt=""
                                    width="400"
                                    height="200"
                                />
                                <a href="#!">
                                    <MDBMask overlay="white-slight" />
                                </a>
                                </MDBView>
                            </MDBCol>
                            <MDBCol lg="7">
                                <a href="#!" className="green-text">                                                                
                                    <h3 className="font-weight-bold mb-3 p-0">
                                    <strong>{Name}</strong>
                                    </h3>
                                </a>                            
                                <p>{Calorie} kiloCalorie</p>
                                <p>{Review}</p>
                               
                                </MDBCol>
                            </MDBRow>
                        </MDBCardBody>
                    </MDBCard>
              </div>

            </div>
        </center>


    )
}
export default Read;