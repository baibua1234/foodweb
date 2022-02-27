import React from 'react'
import { Button, Navbar, Nav, Form } from 'react-bootstrap'
import fire from '../firebasa/fire';
import './contact';
import './Fooditem';
import './Reviews';
import { useState,useEffect } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput,MDBMedia, MDBCard,MDBCardImage,MDBCardBody,MDBCardTitle,MDBCardText} from 'mdbreact';

var df = fire.firestore();
const foodCollection = df.collection('Food,')

const Fooditem = props => {
  const [posts, setPosts] = useState();
  
  const logout = () => {
    fire.auth().signOut();
}

useEffect(async () => {
  return df.collection('Food').onSnapshot((snapshot) => {
    const postData = [];
    snapshot.forEach((doc) => postData.push({ ...doc.data(), id: doc.id }));
    setPosts(postData);
  });
  
}, []);

console.log(posts);


return (

    <div>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href='/'>HOME</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/Fooditem ">MENU</Nav.Link>
                <Nav.Link href="/addfood ">ADD FOOD</Nav.Link>
                <Nav.Link href="/read ">REVIEWS</Nav.Link>
                <Nav.Link href="/contact ">CONTACT ME</Nav.Link>
                
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
        <MDBCardImage className="img-fluid" src="https://food-heal.com/wp-content/uploads/2021/08/c7baa0_1d88281570b948269b8922d7584ac710_mv2_d_2800_1867_s_2.jpg" waves />
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
        <MDBCardImage className="img-fluid" src="https://รักษ์อาหารไทย.net/uploads/editor/images/%E0%B8%9E%E0%B8%B0%E0%B9%81%E0%B8%99%E0%B8%87%E0%B9%80%E0%B8%99%E0%B8%B7%E0%B9%89%E0%B8%AD.jpg" waves />
        <MDBCardBody>
          <MDBCardTitle>แกงพะแนงเนื้อ</MDBCardTitle>
          <MDBCardText>
          875 กิโลแคลอรี่
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

const Frame = ({ Name, Calorie }) => {
  console.log(Name)
  return (
    <div>
      {Name}
    </div>
  )
}

export default Fooditem;
