import React, {Component} from "react";
import Carousel from 'react-bootstrap/Carousel';
import edinburghView1 from '../pics/city1.jpeg'
import edinburghView2 from '../pics/uni.jpeg';
import edinburghView3 from '../pics/fontan.jpeg';
import edinburghView4 from '../pics/city2.jpeg';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import About from '../Pages/About';
import Contacts from '../Pages/Contacts';
import Home from '../Pages/Home';
import Blog from '../Pages/Blog';
import { Navbar, Nav, FormControl, Form, Container, Button } from 'react-bootstrap'

export default class CarouselBox extends Component{
    render(){
        return(
            
                <Carousel>
                    <Carousel.Item>
                        <img className="d-block w-100"
                        src={edinburghView1}
                        alt="Edinburgh_Uni"
                        />
                    <Carousel.Caption>
                        <Nav.Link href='/EdinburghCity'>
                        <h3>Edinburgh city</h3>
                        <p>Edinburgh city view in 2023</p>
                        </Nav.Link>
                    </Carousel.Caption>        
                    </Carousel.Item>
                
                    <Carousel.Item>
                        <img className="d-block w-100"
                        src={edinburghView2}
                        alt="Edinburgh_Uni"
                        />
                    <Carousel.Caption>
                        <h3>Edinburgh university</h3>
                        <p>Edinburgh university in 2023</p>    
                    </Carousel.Caption>        
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100"
                        src={edinburghView3}
                        alt="Edinburgh_Uni"
                        />
                    <Carousel.Caption>
                        <h3>Edinburgh university</h3>
                        <p>Edinburgh university in 2023</p>    
                    </Carousel.Caption>        
                    </Carousel.Item>  
                    <Carousel.Item>
                        <img className="d-block w-100"
                        src={edinburghView4}
                        alt="Edinburgh_Uni"
                        />
                    <Carousel.Caption>
                        <h3>Edinburgh university</h3>
                        <p>Edinburgh university in 2023</p>    
                    </Carousel.Caption>        
                    </Carousel.Item>  
                </Carousel>                
            
        )
    }
}