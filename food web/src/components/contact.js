import React from 'react'
import { Button, Navbar, Nav, Form } from 'react-bootstrap'
import './contact';
import './Fooditem';
import './Reviews';
import fire from '../firebasa/fire';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput ,MDBIcon} from 'mdbreact';
import firebase from 'firebase'


const contact = props => {

  const logout = () => {
    fire.auth().signOut();
}

return (
    <div>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href='/'>HOME</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/Fooditem ">MENU</Nav.Link>
                <Nav.Link href="/contact ">CONTACT ME</Nav.Link>
                <Nav.Link href="/Reviews ">REVIEWS</Nav.Link>
            </Nav>
            <Form inline>
                <Button variant="outline-info" onClick={logout}>LogOut</Button>
            </Form>
        </Navbar>
      <div >
       




<section class="mb-6">
    <h1 class="h1-responsive font-weight-bold text-center my-4">CONTACT ME</h1>
   
<div class="card card-cascade">

  <div class="view view-cascade overlay">
    <img class="card-img-top" src=""/>
    <a>
      <div class="mask rgba-white-slight"></div>
    </a>
  </div>
 
  <div class="card-body card-body-cascade text-center">

    <h4 class="card-title"><strong>KANOKPORN THUNGSEABYUAN</strong></h4>

    <h6 class="font-weight-bold indigo-text py-2">62114440011</h6>

    <p class="card-text">Mini project WEB</p>
    <a href="https://www.facebook.com/profile.php?id=100007132440213" > Facrbook </a>
    <a > ...or... </a>
    <a href="https://mail.google.com/" > E-mail </a>
    
 </div>
       
         
</div>

   
        

   
    

 

    

</section>




      </div>
    </div>



  )



}

export default contact;
