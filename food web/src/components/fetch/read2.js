import React from 'react'
import fire from "../../firebasa/fire";
import { useState } from "react";
import db2 from "../../firebasa/fire";
import Topborder from '../Topborder';
import { Button, Navbar, Nav, Form } from 'react-bootstrap'
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn, MDBCardTitle } from 'mdbreact';

var df = fire.firestore();

const Read = () => {
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
        <div>

            <center>
                <h2>Food Detail</h2>
            </center>
            {
                info.map((data) => (
                    <Frame
                        Name={data.Name}
                        Calorie={data.calorie}
                    />
                ))
            }
        </div>
    );
}
const Frame = ({ Name, Calorie }) => {
    console.log(Name)
    return (
        <center>
            <div>
               
                <div>
                    <MDBCard className="my-5 px-5 pb-5 ">
                        <MDBCardBody>
                        <h2 className="h1-responsive font-weight-bold text-center my-5">
                        Reviews 
                        </h2>
                        <p className="text-center w-responsive mx-auto mb-5"></p>
                        <hr />
                            <MDBRow>
                            <MDBCol lg="5">
                                <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                                <img
                                    className="img-fluid"
                                    src="https://i.pinimg.com/236x/ea/32/db/ea32db203212d5bbc60e09a12d985893.jpg"
                                    alt=""
                                />
                                <a href="#!">
                                    <MDBMask overlay="white-slight" />
                                </a>
                                </MDBView>
                            </MDBCol>
                            <MDBCol lg="7">
                                <a href="#!" className="green-text">
                                <h6 className="font-weight-bold mb-3">
                                    <MDBIcon icon="utensils" className="pr-2" />
                                    Food
                                </h6>
                                </a>
                                <h3 className="font-weight-bold mb-3 p-0">
                                <strong>{Name}</strong>
                                </h3>
                                {/* <p>
                                อร่อยมากเลยค่า ปลาหมึกกรอบและสดมากค่า น้ำต้มยำก็แซ่บเหมาะกับคนที่ทานเผ็ด
                                </p> */}
                                <p>{Calorie}</p>
                                <p>
                                
                                {/* <a href="#!">
                                    <strong>พิกัดร้านตากลมอาหารตามสั่ง</strong>
                                </a> */}
                                
                                </p>
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