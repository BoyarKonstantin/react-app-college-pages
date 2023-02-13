import React, { Component } from 'react'
import { Navbar, Nav, FormControl, Form, Container, Button } from 'react-bootstrap'
import logo from './logo.png'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import About from '../Pages/About';
import Contacts from '../Pages/Contacts';
import Home from '../Pages/Home';
import Blog from '../Pages/Blog';


export default class Header extends Component {
    render() {
        return (
            <>
                <Navbar collapseOnSelect sticky="top" expand='md' bg='light' variant='light'>
                    <Container>
                        <Navbar.Brand href=''>
                            <img
                                src={logo}
                                height="30"
                                width="30"
                                className='d-inline-block align-top'
                                alt='logo' />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                        <Navbar.Collapse id='responsive-navbar-nav'>
                            <Nav className="mr-auto">
                                <Nav.Link href='/home'>Home</Nav.Link>
                                <Nav.Link href='/about'>About us</Nav.Link>
                                <Nav.Link href='/contacts'>Contacts</Nav.Link>
                                <Nav.Link href='/blog'>Blog</Nav.Link>
                            </Nav>
                            <Form inline>
                                <FormControl
                                    type='text'
                                    placeholder='Search'
                                    className='mr-sm2'></FormControl>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Router>
                    <Routes>
                        <Route exact path="/home" element ={<Home/>}/>
                        <Route exact path="/about" element ={<About/>}/>
                        <Route exact path="/contacts" element ={<Contacts/>}/>
                        <Route exact path="/blog" element ={<Blog/>}/>
                    </Routes>
                    </Router>
            </>
        )
    }
}