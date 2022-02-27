import React from 'react';
import fire from '../firebasa/fire';
import { Button, Navbar, Nav, Form } from 'react-bootstrap'
import './contact';
import './Fooditem';
import './Reviews';
import './fetch/read';
import './fetch/detailpage';
import { MDBMedia ,MDBIcon} from 'mdbreact';


const Topborder = () => {

    const logout = () => {
        fire.auth().signOut();
    }

    return (
        
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href='/'>HOME</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/food">MENU</Nav.Link>                  
                    <Nav.Link href="/addfood ">ADD FOOD</Nav.Link>
                    <Nav.Link href="/read ">REVIEW</Nav.Link>  
                    <Nav.Link href="/contact ">CONTACT ME</Nav.Link>
                   
                </Nav>
                <Form inline>
                    <Button variant="outline-info" onClick={logout}>LogOut</Button>
                </Form>
            </Navbar>
        </div>


    )
}
export default Topborder;


