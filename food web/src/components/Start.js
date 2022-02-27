import React from 'react';
// import fire from '../firebasa/fire';
// import {  Button } from 'react-bootstrap'

import Topborder from './Topborder'


const Start = props => {

    return (
        <div>
            <Topborder />

            <div class="d-flex flex-column bd-highlight mb-3">
                <div class="p-2 bd-highlight">
                    <body>
                        <div>
                            <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
                                <ol class="carousel-indicators">
                                 </ol>
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img src="/img/food.png" class="d-block w-100" alt="..."></img>
                                        <div class="carousel-caption d-none d-md-block">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </body>
                </div>
            </div>
        </div>
    )
}

export default Start;