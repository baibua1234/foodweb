import React from 'react';
import fire from '../firebasa/fire';
import { Button, Navbar, Nav, Form } from 'react-bootstrap'
import './contact';
import './Fooditem';
import './Reviews';
import './fetch/read';
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
                    <Nav.Link href="/Fooditem ">MENU</Nav.Link>
                    <Nav.Link href="/contact ">CONTACT ME</Nav.Link>
                    <Nav.Link href="/Reviews ">REVIEWS</Nav.Link>
                    <Nav.Link href="/addfood ">ADD Food</Nav.Link>
                </Nav>
                <Form inline>
                    <Button variant="outline-info" onClick={logout}>LogOut</Button>
                </Form>
            </Navbar>

            <div class="d-flex flex-column bd-highlight mb-3">
                <div class="p-2 bd-highlight">
                    <body>
                        <div>
                            <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
                                <ol class="carousel-indicators">
                                 </ol>
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img src="https://i.ytimg.com/vi/zHBU2d3F6n8/maxresdefault.jpg" class="d-block w-100" alt="..."></img>
                                        <div class="carousel-caption d-none d-md-block">
                                            <h5></h5>
                                            <p></p>
                                        </div>
                                    </div>
                                        <div class="carousel-item">
                                        <img src="https://img.lovepik.com/back_pic/05/54/31/725b0527562bda0.jpg_wh860.jpg" class="d-block w-100" alt="..."></img>
                                        <div class="carousel-caption d-none d-md-block">
                                            <h5></h5>
                                            <p></p>
                                        </div>
                                    </div>
                                </div>
                                <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Previous</span>
                                </a>
                                <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Next</span>
                                </a>
                            </div>


                        </div>
                    </body>
                </div>

                <div class="p-2 bd-highlight">
                    <div class="d-flex align-items-center ">
                        <div class="p-2 bd-highlight justify-content-center">
                            <div>
                            </div>


                        </div>
                        <div class="p-2 bd-highlight">
                            <div class="d-flex align-items-center">
                                <div class="d-flex justify-content-around">
                                    <div class="p-2 bd-highlight view zoom">
                                        <div >
                                            <img src="https://mpics.mgronline.com/pics/Thumbnails/564000006631503.JPEG"
                                                width="200" height="300"  />
                                          </div>
                                    </div>
                                    <div class="p-2 bd-highlight">
                                        <div>
                                            <img src="https://tawandang-mahason.com/upload_file/menu_img/1551888310n3.jpg"
                                                width="200" height="300" />
                                        </div>
                                    </div>
                                    <div class="p-2 bd-highlight">
                                        <div>
                                            <img src="https://www.joinalifethailand.com/wp-content/uploads/2020/01/Sunday-Brunch-@-Surawongse-2-200x300.jpg"
                                                width="200" height="300" />
                                        </div>
                                    </div>
                                    <div class="p-2 bd-highlight">
                                        <div>
                                            <img src="https://ข่าว.live/wp-content/uploads/2021/10/28fc0a9fae3eeeb014371e79e2517c34-200x300.jpg"
                                                width="200" height="300" />
                                        </div>
                                    </div>
                                    <div class="p-2 bd-highlight">
                                        <div>
                                            <img src="https://i.pinimg.com/236x/fe/97/d3/fe97d39b444c3697d9d09d8644980bb5.jpg"
                                                width="200" height="300" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="d-flex align-items-center">
                                <div class="d-flex justify-content-around">
                                    <div class="p-2 bd-highlight">
                                        <div>
                                            <img src="https://lisergia.org/wp-content/uploads/2020/07/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%97%E0%B8%B5%E0%B9%88-3-7-200x300.jpg"
                                                width="200" height="300" />
                                        </div>
                                    </div>
                                    <div class="p-2 bd-highlight">
                                        <div>
                                            <img src="https://lh4.ggpht.com/-rBv4GigyIhE/VLZ5KIPVhPI/AAAAAAAABLE/ZYEz_qjZt4E/w825/Image.jpg?imgmax=800"
                                                width="200" height="300" />
                                        </div>
                                    </div>
                                    <div class="p-2 bd-highlight">
                                        <div>
                                            <img src="https://cdn1.citylife.group/wp-content/uploads/2020/12/IMG_9811-200x300.jpg"
                                                width="200" height="300" />
                                        </div>
                                    </div>
                                    <div class="p-2 bd-highlight">
                                        <div>
                                            <img src="http://www.benewsonline.com/wp-content/uploads/2016/10/IMG_6867-200x300.jpg"
                                                width="200" height="300" />
                                        </div>
                                    </div>
                                    <div class="p-2 bd-highlight">
                                        <div>
                                            <img src="https://pbs.twimg.com/media/D7dnXrfUYAA2Gpl.jpg"
                                                width="200" height="300" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    

                    <div class="p-2 bd-highlight">
                        <body>
                            <div>
                                <img src="https://hellothailand-assets.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2011/05/21164028/Featue-image-2560-1200-3.jpg"
                                    width="1505" height="450" />
                            </div>
                        </body>
                    </div>

                </div>


                <div class="p-2 bd-highlight justify-content-center text-center ">
                    <MDBMedia>

                        <MDBMedia left className="mr-3 text-center" href="https://www.facebook.com/bansuanpay/" class="card" >
                            <MDBMedia object src="https://www.aniaetleprogrammeur.com/wp-content/uploads/2019/09/facebook-new-misinformation-measures-1.png" width="150" height="100" className="mr-3 justify-content-center text-center" />
                            <MDBMedia heading class="justify-content-center ">
                                ติดตามทาง
                             </MDBMedia>
                        </MDBMedia>
                        <MDBMedia left className="mr-3 text-center" href="https://www.facebook.com/tonkitsada999/" class="card" >
                            <MDBMedia object src="https://www.aniaetleprogrammeur.com/wp-content/uploads/2019/09/facebook-new-misinformation-measures-1.png" width="150" height="100" className="mr-3 justify-content-center text-center" />
                            <MDBMedia heading class="justify-content-center ">
                                ติดตามทาง
                             </MDBMedia>
                        </MDBMedia>
                        <MDBMedia left className="mr-3 text-center" href="https://www.facebook.com/%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B8%95%E0%B8%B2%E0%B8%81%E0%B8%A5%E0%B8%A1%E0%B8%AD%E0%B8%B2%E0%B8%AB%E0%B8%B2%E0%B8%A3%E0%B8%95%E0%B8%B2%E0%B8%A1%E0%B8%AA%E0%B8%B1%E0%B9%88%E0%B8%87-%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%95%E0%B8%B93-%E0%B8%A1%E0%B8%AD%E0%B8%B8%E0%B8%9A%E0%B8%A5-110314264221522/" class="card" >
                            <MDBMedia object src="https://www.aniaetleprogrammeur.com/wp-content/uploads/2019/09/facebook-new-misinformation-measures-1.png" width="150" height="100" className="mr-3 justify-content-center text-center" />
                            <MDBMedia heading class="justify-content-center ">
                                ติดตามทาง
                             </MDBMedia>
                        </MDBMedia>
                        <MDBMedia body class="justify-content-center ">
                         </MDBMedia>
                    </MDBMedia>
                </div>
            </div>



        </div>


    )
}
export default Topborder;


