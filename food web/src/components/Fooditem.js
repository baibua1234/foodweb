import React from 'react'
import { Button, Navbar, Nav, Form } from 'react-bootstrap'
import fire from '../firebasa/fire';
import './contact';
import './Fooditem';
import './Reviews';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput,MDBMedia, MDBCard,MDBCardImage,MDBCardBody,MDBCardTitle,MDBCardText} from 'mdbreact';



const Fooditem = props => {

  
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
      <div class="container-fluid ">
  <div class="row ">
    <div class="col-sm">
      <MDBCol >
      <MDBCard style={{ width: "22rem" }}>
        <MDBCardImage className="img-fluid" src="https://img-global.cpcdn.com/recipes/a3e90a101658f78e/400x400cq70/photo.jpg" waves />
        <MDBCardBody>
          <MDBCardTitle>ต้มข่าไก่</MDBCardTitle>
          <MDBCardText>
          210 กิโลแคลอรี่
          </MDBCardText>
          
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    </div>
    <div class="col-sm">
    <MDBCol>
      <MDBCard style={{ width: "22rem" }}>
        <MDBCardImage className="img-fluid" src="https://www.technologychaoban.com/wp-content/uploads/2018/02/5-9.jpg" waves />
        <MDBCardBody>
          <MDBCardTitle>กวยจั๊บญวณ</MDBCardTitle>
          <MDBCardText>
          235 กิโลแคลอรี่
          </MDBCardText>
          
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    </div>
    <div class="col-sm">
    <MDBCol>
      <MDBCard style={{ width: "22rem" }}>
        <MDBCardImage className="img-fluid" src="https://www.bloggang.com/data/j/jazzy-bong/picture/1625038085.jpg" waves />
        <MDBCardBody>
          <MDBCardTitle>กุ้งทอดกระเทียมพริกไทย</MDBCardTitle>
          <MDBCardText>
          86 กิโลแคลอรี่
          </MDBCardText>
        
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    </div>
    <div class="col-sm">
    <MDBCol>
      <MDBCard style={{ width: "22rem" }}>
        <MDBCardImage className="img-fluid" src="https://us-fbcloud.net/wb/data/986/986957-img.s1g8vv.0p.jpg" waves />
        <MDBCardBody>
          <MDBCardTitle>แกงพะแนงเนื้อ</MDBCardTitle>
          <MDBCardText>
         457 กิโลแคลอรี่
          </MDBCardText>
      
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    </div>
    <div class="col-sm">

    <MDBCol>
      <MDBCard style={{ width: "22rem" }}>
        <MDBCardImage className="img-fluid" src="https://goodlifeupdate.com/app/uploads/2018/06/%E0%B9%80%E0%B8%A7%E0%B9%87%E0%B8%9A.gif" waves />
        <MDBCardBody>
          <MDBCardTitle>แกงมัสมั่นไก่</MDBCardTitle>
          <MDBCardText>
          325 กิโลแคลอรี่
          </MDBCardText>
      
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    </div>
    <div class="col-sm">
    <MDBCol>
      <MDBCard style={{ width: "22rem" }}>
        <MDBCardImage className="img-fluid" src="https://static.wixstatic.com/media/c8a905_2c4d601ec6644de4a9cf563637b102ec~mv2.jpg/v1/fill/w_800,h_533,al_c,q_90/c8a905_2c4d601ec6644de4a9cf563637b102ec~mv2.jpg" waves />
        <MDBCardBody>
          <MDBCardTitle>ข้าวยำปักษ์ใต้</MDBCardTitle>
          <MDBCardText>
          248 กิโลแคลอรี่
          </MDBCardText>
          
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    </div>
    <div class="col-sm">

    <MDBCol>
      <MDBCard style={{ width: "22rem" }}>
        <MDBCardImage className="img-fluid" src="https://i.ytimg.com/vi/aSx1T1e8co0/maxresdefault.jpg" waves />
        <MDBCardBody>
          <MDBCardTitle>ต้มยำปลาหมึก</MDBCardTitle>
          <MDBCardText>
          92 กิโลแคลอรี่
          </MDBCardText>
     
        </MDBCardBody>
      </MDBCard>
    </MDBCol>

    </div> 
    
    <div class="col-sm">

<MDBCol class="col-lg-4 col-md-6">
  <MDBCard style={{ width: "22rem" }}>
    <MDBCardImage className="img-fluid" src="https://food.mthai.com/app/uploads/2017/02/Spicy-fish-2.jpg" waves />
    <MDBCardBody>
      <MDBCardTitle>ปลากะพงนึ่งมะนาว</MDBCardTitle>
      <MDBCardText>
      155 กิโลแคลอรี่
      </MDBCardText>
    
    </MDBCardBody>
  </MDBCard>
</MDBCol>

</div>
<div class="col-sm">

<MDBCol class="col-lg-4 col-md-6">
  <MDBCard style={{ width: "22rem" }}>
    <MDBCardImage className="img-fluid" src="https://i.ytimg.com/vi/DJq2ce4cymo/maxresdefault.jpg" waves />
    <MDBCardBody>
      <MDBCardTitle>ผัดกุ้งสะตอหมู</MDBCardTitle>
      <MDBCardText>
      200 กิโลแคลอรี่
      </MDBCardText>
      
    </MDBCardBody>
  </MDBCard>
</MDBCol>

</div>
  </div>
</div>





     
            </div>


    </div>
  )
}

export default Fooditem;
