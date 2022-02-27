import React from 'react'
import { Button, Navbar, Nav, Form } from 'react-bootstrap'
import './contact';
import './Fooditem';
import './Reviews';
import fire from '../firebasa/fire';
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn,MDBCardTitle} from 'mdbreact';

const Reviews = props => {

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
   <div>
 

   <MDBCard className="my-5 px-5 pb-5 ">
      <MDBCardBody>
        <h2 className="h1-responsive font-weight-bold text-center my-5">
        Reviews 
        </h2>
        <p className="text-center w-responsive mx-auto mb-5">
       
        </p>
        <MDBRow>
          <MDBCol lg="5">
            <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
              <img
                className="img-fluid"
                src=""
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
              <strong></strong>
            </h3>
            <p>              
            </p>

            <p>
              
              <a href="#!">
                <strong></strong>
              </a>
            </p>
            </MDBCol>
        </MDBRow>

        <hr />
        <MDBRow>
          <MDBCol lg="5">
            <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
              <img
                className="img-fluid"
                src=""
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
              <strong></strong>
            </h3>
            <p>              
            </p>
            <p>
            
              <a href="#!">
                <strong></strong>
              </a>
            </p>
             </MDBCol>
        </MDBRow>

        <hr />
        <MDBRow>
          <MDBCol lg="5">
            <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
              <img
                className="img-fluid"
                src=""
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
              <strong></strong>
            </h3>
            <p>
              
            </p>
            <p>
            
              <a href="#!">
                <strong></strong>
              </a>
              
            </p>
            </MDBCol>
        </MDBRow>      
      </MDBCardBody>
    </MDBCard>
  
    </div>
 </div>


    
  )
}

export default Reviews;